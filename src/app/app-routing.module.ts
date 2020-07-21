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


const routes: Routes = [
  {path:'view-agent', component:ViewAgentComponent},
  {path:'create-cpr', component:CreateCprComponent},
  {path:'create-ceo', component:CreateCeoComponent},
  {path:'create-customer', component:CreateCustomerComponent},
  {path:'create-policy', component:CreatePolicyComponent},
  {path:'create-branch', component:CreateBranchComponent},
  {path:'create-manager', component:CreateManagerComponent},
  {path:'create-agent', component:CreateAgentComponent},
  {path:'', component:CreateAgentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
