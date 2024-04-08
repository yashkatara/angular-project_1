import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PromotersComponent } from './promoters/promoters.component';
import { AccreditationComponent } from './accreditation/accreditation.component';
import { ServiceComponent } from './service/service.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ClientsComponent } from './clients/clients.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { FoodComponent } from './food/food.component';
import { AutomotiveComponent } from './automotive/automotive.component';
import { TelecomComponent } from './telecom/telecom.component';
import { TextileComponent } from './textile/textile.component';
import { InfoTechComponent } from './info-tech/info-tech.component';
import { ProductCertificationComponent } from './product-certification/product-certification.component';
import { MedicalDiviceComponent } from './medical-divice/medical-divice.component';
import { GeneralIndustriesComponent } from './general-industries/general-industries.component';
import { Jd1Component } from './jd1/jd1.component';
import { ApplyformComponent } from './applyform/applyform.component';
import { Jd2Component } from './jd2/jd2.component';
import { RTACourseComponent } from './rta-course/rta-course.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services' , component: ServicesComponent},
  {path: 'promoters' , component:PromotersComponent},
  {path: 'accreditation' , component:AccreditationComponent},
  {path: 'service' , component:ServiceComponent},
  {path: 'blogs' , component:BlogsComponent},
  {path: 'clients', component:ClientsComponent},
  {path:'downloads',component:DownloadsComponent},
  {path: 'foodprocessing', component:FoodComponent},
  {path: 'service/automotive', component:AutomotiveComponent},
  {path:'service/telecom', component:TelecomComponent},
  {path:'service/textile', component:TextileComponent},
  {path:'service/info-tech', component:InfoTechComponent},
  {path:'service/product-certification', component:ProductCertificationComponent},
  {path:'service/medical-divice', component:MedicalDiviceComponent},
  {path:'service/general-industries', component:GeneralIndustriesComponent},
  {path:'about/jd1', component:Jd1Component},
  {path:'about/applyform', component:ApplyformComponent},
  {path:'about/jd2', component:Jd2Component},
  {path: 'RTA-Course', component:RTACourseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
