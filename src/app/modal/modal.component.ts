import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentService } from '../service/payment.service';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() id;
  @Input() name;
  @Input() price;

  constructor(
    public activeModal: NgbActiveModal,
    private paymentService: PaymentService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
  }

  confirm(id: string): void {
    this.paymentService.confirm(id).subscribe(
      data => {
        this.toastrService.success
        ('Payment confirmed', 'Payment has been confirmed with id ' + data[`id`], {positionClass: 'toast-top-center', timeOut: 3000});
        this.activeModal.close();
      },
      err => {
        console.log(err);
        this.activeModal.close();
      }
    );
  }

  cancel(id: string): void {
    this.paymentService.cancel(id).subscribe(
      data => {
        this.toastrService.success
        ('Payment cancelled', 'Payment has been cancelled with id ' + data[`id`], {positionClass: 'toast-top-center', timeOut: 3000});
        this.activeModal.close();
      },
      err => {
        console.log(err);
        this.activeModal.close();
      }
    );
  }
Init(): void {
  }

}
