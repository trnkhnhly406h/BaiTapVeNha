import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProductImageEventComponent } from './service-product-image-event-component/service-product-image-event-component';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail-component/service-product-image-event-detail-component';
import { CustomerServiceComponent } from './customer-service-component/customer-service-component';
import { CustomerServiceHttpErrorComponent } from './customer-service-http-error-component/customer-service-http-error-component';

const routes: Routes = [
  {path:'service-product-image-event', component:ServiceProductImageEventComponent},
  {path:'service-product-image-event/:id', component:ServiceProductImageEventDetailComponent},
  {path: 'customer-service-component', component:CustomerServiceComponent},
  {path: 'customer-service-http-error-component', component:CustomerServiceHttpErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
