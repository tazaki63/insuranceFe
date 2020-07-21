import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BranchService} from 'src/app/service/branch.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAgentComponent } from './create-agent/create-agent.component';
import { AgentService } from './service/agent.service';
import { HttpClientModule } from '@angular/common/http';
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
    EditAgentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [AgentService, BranchManagerService, BranchService,
     PolicyService, CustomerService, CeoService, CprService],
  bootstrap: [AppComponent]
})
export class AppModule { }
