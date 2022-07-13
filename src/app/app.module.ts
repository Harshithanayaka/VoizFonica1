import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './app.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlansComponent } from './plans/plans.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { RechargeComponent } from './recharge/recharge.component';
import { CreateNewConnectionComponent } from './create-new-connection/create-new-connection.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PostpaidinvoiceComponent } from './postpaidinvoice/postpaidinvoice.component';
import { DongleinvoiceComponent } from './dongleinvoice/dongleinvoice.component';



@NgModule({
  declarations: [
    AppComponent,
    PlansComponent,
    UserdetailsComponent,
    CustomerComponent,
    RechargeComponent,
    CreateNewConnectionComponent,
    InvoiceComponent,
    PostpaidinvoiceComponent,
    DongleinvoiceComponent,
],
  imports: [
    BrowserModule,
   AppRoutingModule,
      FormsModule,
    ReactiveFormsModule,
     HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule { }
