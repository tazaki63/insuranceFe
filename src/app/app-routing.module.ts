import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAgentComponent } from './create-agent/create-agent.component';
import { CreateManagerComponent } from './create-manager/create-manager.component';
import { CreateBranchComponent } from './create-branch/create-branch.component';
import { CreatePolicyComponent } from './create-policy/create-policy.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateCeoComponent } from './create-ceo/create-ceo.component';
import { CreateCprComponent } from './create-cpr/create-cpr.component';
import { ViewAgentComponent } from './view-agent/view-agent.component';
import { ViewManagerComponent } from './view-manager/view-manager.component';
import { ViewBranchComponent } from './view-branch/view-branch.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { ViewPolicyComponent } from './view-policy/view-policy.component';
import { ViewCprComponent } from './view-cpr/view-cpr.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AgentControlComponent } from './agent-control/agent-control.component';
import { CustomerControlComponent } from './customer-control/customer-control.component';
import { BranchControlComponent } from './branch-control/branch-control.component';
import { PolicyControlComponent } from './policy-control/policy-control.component';
import { ManagerControlComponent } from './manager-control/manager-control.component';
import { CprControlComponent } from './cpr-control/cpr-control.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentComponent } from './payment/payment.component';
import { ModalComponent } from './modal/modal.component';
import {AuthguardService} from 'src/app/service/authguard.service';
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


const routes: Routes = [
  {path:'customer-pay', component:CustomerPayComponent},   
  {path:'policies', component:PoliciesComponent},   
  {path:'footer', component:FooterComponent},   
  {path:'agent-customers', component:AgentCustomersComponent},   
  {path:'commission-details', component:CommissionDetailsComponent},  
  {path:'agent-commission', component:AgentCommissionComponent},  
  {path:'policy-details-cust', component:PolicyDetailsCustComponent},
  {path:'payement-date', component:PayementDateComponent},
  {path:'report', component:ReportComponent},
  {path:'modal', component:ModalComponent},
  {path:'logout', component:LogoutComponent},
  {path:'payment', component:PaymentComponent},
  {path:'payment-details/:customerId', component:PaymentDetailsComponent},
  {path:'payment-page', component:PaymentPageComponent},
  {path:'cpr-control', component:CprControlComponent}, 
  {path:'manager-control', component:ManagerControlComponent},
  {path:'policy-control', component:PolicyControlComponent},  
  {path:'branch-control', component:BranchControlComponent},
  {path:'customer-control', component:CustomerControlComponent},
  {path:'agent-control', component:AgentControlComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent, canActivate:[AuthguardService]},
  {path:'view-cpr', component:ViewCprComponent}, 
  {path:'view-policy', component:ViewPolicyComponent}, 
  {path:'view-customer', component:ViewCustomerComponent,canActivate:[AuthguardService]}, 
  {path:'view-branch', component:ViewBranchComponent,canActivate:[AuthguardService]},  
  {path:'view-manager', component:ViewManagerComponent, canActivate:[AuthguardService]},
  {path:'view-agent', component:ViewAgentComponent},
  {path:'create-cpr', component:CreateCprComponent},
  {path:'create-ceo', component:CreateCeoComponent},
  {path:'create-customer', component:CreateCustomerComponent},
  {path:'create-policy', component:CreatePolicyComponent},
  {path:'create-branch', component:CreateBranchComponent},
  {path:'create-manager', component:CreateManagerComponent},
  {path:'create-agent', component:CreateAgentComponent},
  {path:'', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
