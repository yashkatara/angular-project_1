import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
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

import { ReactiveFormsModule } from '@angular/forms';
import { ApplyformComponent } from './applyform/applyform.component';
import { Jd2Component } from './jd2/jd2.component';
import { RTACourseComponent } from './rta-course/rta-course.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PromotersComponent,
    AccreditationComponent,
    ServiceComponent,
    BlogsComponent,
    ClientsComponent,
    DownloadsComponent,
    FoodComponent,
    AutomotiveComponent,
    TelecomComponent,
    TextileComponent,
    InfoTechComponent,
    ProductCertificationComponent,
    MedicalDiviceComponent,
    GeneralIndustriesComponent,
    Jd1Component,
    ApplyformComponent,
    Jd2Component,
    RTACourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
