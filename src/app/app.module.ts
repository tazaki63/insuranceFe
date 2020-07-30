import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BranchService} from 'src/app/service/branch.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAgentComponent } from './create-agent/create-agent.component';
import { AgentService } from './service/agent.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateManagerComponent } from './create-manager/create-manager.component';
import {BranchManagerService} from 'src/app/service/branchmanager.service';
import { CreateBranchComponent } from './create-branch/create-branch.component';
import { CreatePolicyComponent } from './create-policy/create-policy.component';
import {PolicyService} from 'src/app/service/policy.service';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import {CustomerService} from './service/customer.service';
import { CreateCeoComponent } from './create-ceo/create-ceo.component';
import {CeoService} from 'src/app/service/ceo.service';
import { CreateCprComponent } from './create-cpr/create-cpr.component';
import {CprService} from 'src/app/service/cpr.service';
import { ViewAgentComponent } from './view-agent/view-agent.component';
import { EditAgentComponent } from './edit-agent/edit-agent.component';
import { ViewManagerComponent } from './view-manager/view-manager.component';
import { ViewBranchComponent } from './view-branch/view-branch.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { ViewPolicyComponent } from './view-policy/view-policy.component';
import { ViewCprComponent } from './view-cpr/view-cpr.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AgentControlComponent } from './agent-control/agent-control.component';
import { CustomerControlComponent } from './customer-control/customer-control.component';
import { BranchControlComponent } from './branch-control/branch-control.component';
import { PolicyControlComponent } from './policy-control/policy-control.component';
import { ManagerControlComponent } from './manager-control/manager-control.component';
import { CprControlComponent } from './cpr-control/cpr-control.component';
//import { PaymentComponent } from './payment/payment.component';
import { ToastrModule } from 'ngx-toastr';
import {NgxStripeModule} from 'ngx-stripe';
import { PaymentService } from './service/payment.service';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { ModalComponent } from './modal/modal.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentComponent } from './payment/payment.component';
import {InterceptorService} from 'src/app/service/interceptor.service';
import { LogoutComponent } from './logout/logout.component';
import { ReportComponent } from './report/report.component';
import { PayementDateComponent } from './payement-date/payement-date.component';
import { PolicyDetailsCustComponent } from './policy-details-cust/policy-details-cust.component';
import { AgentCommissionComponent } from './agent-commission/agent-commission.component';
import { CommissionDetailsComponent } from './commission-details/commission-details.component';
import { AgentCustomersComponent } from './agent-customers/agent-customers.component';
import { FooterComponent } from './footer/footer.component';
import { PoliciesComponent } from './policies/policies.component';
import { CustomerPayComponent } from './customer-pay/customer-pay.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateAgentComponent,
    CreateManagerComponent,
    CreateBranchComponent,
    CreatePolicyComponent,
    CreateCustomerComponent,
    CreateCeoComponent,
    CreateCprComponent,
    ViewAgentComponent,
    EditAgentComponent,
    ViewManagerComponent,
    ViewBranchComponent,
    ViewCustomerComponent,
    ViewPolicyComponent,
    ViewCprComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    AgentControlComponent,
    CustomerControlComponent,
    BranchControlComponent,
    PolicyControlComponent,
    ManagerControlComponent,
    CprControlComponent,
    PaymentPageComponent,
    ModalComponent,
    PaymentDetailsComponent,
    PaymentComponent,
    LogoutComponent,
    ReportComponent,
    PayementDateComponent,
    PolicyDetailsCustComponent,
    AgentCommissionComponent,
    CommissionDetailsComponent,
    AgentCustomersComponent,
    FooterComponent,
    PoliciesComponent,
    CustomerPayComponent,
   
  ],
  entryComponents : [ ModalComponent ] ,
  imports: [
    BrowserModule, 
    AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule,
    NgbModalModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxStripeModule.forRoot('pk_test_51H5WsAHwWWtXeCa3kEgTUgTybpLIjlbZmC3qVJkSeUlX9cLQg67MhuUGWI4zFnm7fu0H1sW41iMcQSohlVdhPL4L00XmSXtOtw'),
   
  ],
  providers: [AgentService, BranchManagerService, BranchService,  
     PolicyService, CustomerService, CeoService, CprService, PaymentService,
      {provide:HTTP_INTERCEPTORS,
        useClass:InterceptorService,
        multi:true
        }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
