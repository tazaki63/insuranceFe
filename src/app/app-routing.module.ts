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


const routes: Routes = [
  {path:'cpr-control', component:CprControlComponent}, 
  {path:'manager-control', component:ManagerControlComponent},
  {path:'policy-control', component:PolicyControlComponent},  
  {path:'branch-control', component:BranchControlComponent},
  {path:'customer-control', component:CustomerControlComponent},
  {path:'agent-control', component:AgentControlComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'view-cpr', component:ViewCprComponent}, 
  {path:'view-policy', component:ViewPolicyComponent}, 
  {path:'view-customer', component:ViewCustomerComponent}, 
  {path:'view-branch', component:ViewBranchComponent},  
  {path:'view-manager', component:ViewManagerComponent},
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
