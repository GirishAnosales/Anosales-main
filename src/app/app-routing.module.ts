import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DoNotSellMyInformationComponent } from './pages/do-not-sell-my-information/do-not-sell-my-information.component';
import { CareersComponent } from './pages/careers/careers.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
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

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'services/account-based-marketing', component: AccountBasedMarketingComponent },
  { path: 'services/appointment-generation', component: AppointmentGenerationComponent },

  { path: 'services/content/content-creation', component: ContentCreationComponent },
  { path: 'services/content/content-marketing', component: ContentMarketingComponent },
  { path: 'services/content/content-syndication', component: ContentSyndicationComponent },

  { path: 'services/data-management-solutions/account-profiling', component: AccountProfilingComponent },
  { path: 'services/data-management-solutions/custom-data-build-out', component: CustomDataBuildOutComponent },
  { path: 'services/data-management-solutions/database-hygiene', component: DatabaseHygieneComponent },
  { path: 'services/data-management-solutions/email-append', component: EmailAppendComponent },
  { path: 'services/data-management-solutions/technology-user-list', component: TechnologyUserListComponent },

  { path: 'services/intent-marketing/bant', component: BantComponent },
  { path: 'services/intent-marketing/email-marketing', component: EmailMarketingComponent },
  { path: 'services/intent-marketing/hql', component: HqlComponent },
  { path: 'services/intent-marketing/mql', component: MqlComponent },
  { path: 'services/intent-marketing/sql', component: SqlComponent },

  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'do-not-sell-my-information', component: DoNotSellMyInformationComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
