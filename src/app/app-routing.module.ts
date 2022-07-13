import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RechargeComponent } from './recharge/recharge.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { CustomerComponent } from './customer/customer.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PostpaidinvoiceComponent } from './postpaidinvoice/postpaidinvoice.component';
import { DongleinvoiceComponent } from './dongleinvoice/dongleinvoice.component';
import { PlansComponent } from './plans/plans.component'

const routes: Routes = [
{ path: 'userdetails', component: UserdetailsComponent },
{ path: 'customer', component: CustomerComponent },
{ path: 'recharge' , component: RechargeComponent},
{ path: 'invoice' , component: InvoiceComponent},
{ path: 'postpaidinvoice' , component: PostpaidinvoiceComponent},
{path : 'dongleinvoice' , component:DongleinvoiceComponent},
{path : 'plans', component: PlansComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [UserdetailsComponent , CustomerComponent , RechargeComponent , InvoiceComponent,PostpaidinvoiceComponent ,DongleinvoiceComponent]
