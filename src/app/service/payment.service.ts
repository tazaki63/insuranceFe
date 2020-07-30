import { Injectable } from '@angular/core';
import { PaymentIntentDto} from '../model/payment-intent-dto';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const  header  =  { headers : new  HttpHeaders ( {'Content-Type' : 'application/json' } ) } ;


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  stripeURL='http://localhost:8080/stripe/' ;

  
  constructor(private httpClient:HttpClient) { }

  public pay(paymentIntentDto:PaymentIntentDto):Observable<string>{
    return this.httpClient.post<string>(this.stripeURL+'paymentintent', paymentIntentDto, header);
  }

  public  confirm ( id : string ) : Observable < string >  {
    return this.httpClient.post<string> (this.stripeURL+`confirm/${id}`,{},header) ;
  }

  public  cancel ( id : string ) : Observable < string >  {
    return this.httpClient.post<string> (this.stripeURL+`cancel/${id}`,{},header ) ;
  }

}
