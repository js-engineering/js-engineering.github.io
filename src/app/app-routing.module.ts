import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { EnquiryComponent } from './pages/enquiry/enquiry.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'products', component:ProductsComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'enquiry', component:EnquiryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
