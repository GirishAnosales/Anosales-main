import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MaterialModule } from './modules/material/material.module';
import { HeaderComponent } from './components/shell/header/header.component';
import { FooterComponent } from './components/shell/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DoNotSellMyInformationComponent } from './pages/do-not-sell-my-information/do-not-sell-my-information.component';
import { CareersComponent } from './pages/careers/careers.component';
import { CareersFormComponent } from './components/forms/careers-form/careers-form.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { HttpClientModule } from '@angular/common/http';
import { IndustriesWeWorkWithComponent } from './components/industries-we-work-with/industries-we-work-with.component';
import { ContactFormComponent } from './components/forms/contact-form/contact-form.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { DoNotSellMyInfoFormComponent } from './components/forms/do-not-sell-my-info-form/do-not-sell-my-info-form.component';
import { EmployeesSigninFormComponent } from './components/forms/employees-signin-form/employees-signin-form.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { StatsCounterComponent } from './pages/home/components/stats-counter/stats-counter.component';
import { AccountBasedMarketingComponent } from './pages/services/account-based-marketing/account-based-marketing.component';
import { AppointmentGenerationComponent } from './pages/services/appointment-generation/appointment-generation.component';
import { ContentCreationComponent } from './pages/services/content/content-creation/content-creation.component';
import { ContentMarketingComponent } from './pages/services/content/content-marketing/content-marketing.component';
import { ContentSyndicationComponent } from './pages/services/content/content-syndication/content-syndication.component';
import { AccountProfilingComponent } from './pages/services/database-management-solutions/account-profiling/account-profiling.component';
import { CustomDataBuildOutComponent } from './pages/services/database-management-solutions/custom-data-build-out/custom-data-build-out.component';
import { DatabaseHygieneComponent } from './pages/services/database-management-solutions/database-hygiene/database-hygiene.component';
import { EmailAppendComponent } from './pages/services/database-management-solutions/email-append/email-append.component';
import { TechnologyUserListComponent } from './pages/services/database-management-solutions/technology-user-list/technology-user-list.component';
import { BantComponent } from './pages/services/intent-marketing/bant/bant.component';
import { HqlComponent } from './pages/services/intent-marketing/hql/hql.component';
import { MqlComponent } from './pages/services/intent-marketing/mql/mql.component';
import { SqlComponent } from './pages/services/intent-marketing/sql/sql.component';
import { EmailMarketingComponent } from './pages/services/intent-marketing/email-marketing/email-marketing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    AboutComponent,
    ContactComponent,
    DoNotSellMyInformationComponent,
    CareersComponent,
    CareersFormComponent,
    TestimonialsComponent,
    IndustriesWeWorkWithComponent,
    ContactFormComponent,
    PrivacyPolicyComponent,
    DoNotSellMyInfoFormComponent,
    EmployeesSigninFormComponent,
    TermsAndConditionsComponent,
    StatsCounterComponent,
    AccountBasedMarketingComponent,
    AppointmentGenerationComponent,
    ContentCreationComponent,
    ContentMarketingComponent,
    ContentSyndicationComponent,
    BantComponent,
    HqlComponent,
    MqlComponent,
    SqlComponent,
    AccountProfilingComponent,
    CustomDataBuildOutComponent,
    DatabaseHygieneComponent,
    EmailAppendComponent,
    TechnologyUserListComponent,
    EmailMarketingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CarouselModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
