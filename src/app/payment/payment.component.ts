import { Component, OnInit, Input } from '@angular/core';
import { StripeElement, StripeElementsOptions, StripeElements, StripeCardElement } from '@stripe/stripe-js';
import { StripeService } from 'ngx-stripe';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentService } from '../service/payment.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PaymentIntentDto } from '../model/payment-intent-dto';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  elements:any;
  card:StripeCardElement;
  elementsOptions:StripeElementsOptions={
      locale:"auto"
  };
  @Input() price;
  @Input() name;

  error: any;

  constructor(private stripeService:StripeService, private modalService:NgbModal,
    private paymentService:PaymentService, private router:Router) { }

    public stripeForm= new FormGroup({
      name : new FormControl( '' ,Validators.required ),
    });

  ngOnInit(): void {
    this.stripeService.elements(this.elementsOptions).subscribe(
      elements=>{
        this.elements=elements;
        if(!this.card){
          this.card=this.elements.create('card',
            {
              style:{
                base:{
                  iconColor : '# 666EE8' ,
                  color : '# 31325F' ,
                  lineHeight : '40px' ,
                  fontWeight : 300 ,
                  fontFamily : '"Helvetica Neue", Helvetica, sans-serif' ,
                  fontSize : '18px' ,
                  ':: placeholder' : {
                    color : '# CFD7E0'
                  }}
              } 
            }
          );
          this.card.mount('#card-element');
        }
      }
    );
  }

  buy ( )  {
    const  name  =  this . stripeForm.get ( 'name' ) . value ;
    this . stripeService
      . createToken ( this . card ,  { name } )
      . subscribe ( result  =>  {
        if  ( result . token )  {
          const  paymentIntentDto : PaymentIntentDto  =  {
            token : result.token.id ,
            amount : this . price ,
            currency : 'usd' ,
            
          } ;
          this . paymentService . pay ( paymentIntentDto ) . subscribe (
            data  =>  {
              this . openModal ( data [ `id` ] ,  this . name ,  data [ `amount` ] ) ;
              this . router . navigate ( [ '/' ] ) ;
            }
          ) ;
          this . error  =  undefined ;
        }  else  if  ( result . error )  {
          this . error  =  "error" ;
        }
      } ) ;
  }

  openModal ( id : string ,  name : string ,  price : number )  {
    const  modalRef  =  this . modalService . open ( ModalComponent ) ;
    modalRef . componentInstance . id  =  id ;
    modalRef . componentInstance . name  =  name ;
    modalRef . componentInstance . price  =  price ;
  }
}
  