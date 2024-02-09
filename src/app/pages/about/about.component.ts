import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  r4 = [
    { title: "Ideal Prospect Identification", content: "You specify your criterion in terms of target market, geographical location, role definition." },
    { title: "Data Accumulation", content: "Using existing database specific to your industry, social media like linked-in, websites etc." },
    { title: "Screening Of Collected Database", content: "Our research experts filter and enhance the data." },
    { title: "Telephonic Validation", content: "Our telemarketing team qualifies, disqualifies, validates the data also discovers new apt contacts." },
  ]


  r5 = [
    { title: "Custom Business Contact List", content: "We build the business contact list according to your requirements. We develop the contact list database when you order it. The list is not already compiled or resold. Depending on your criteria our business contact findings will be of two types. Role Based Contact Discovery and Title Based Contact Discovery." },
    { title: "Current Database which is accurate", content: "People change their jobs, get transferred in their current job or their contact details such as email id or telephone number change. Because of this, about 2% of database becomes invalid every month. Since we discover the business to business contact database at the time you order it, it will be 100% accurate and current." },
    { title: "High Data Quality", content: "Each contact is phone verified hence you will never receive a not identified response." },
    { title: "Multi National - Multi Lingual Contacts", content: "We discover the contacts from across the globe (USA, UK, entire Europe, entire Asia etc) as per your target geographical market." },
    { title: "Low Risk Payment Option", content: "Our payment form for contact discovery is based on Pay Per Performance model. Hence you will pay fixed price for each contact, which is one of the lowest pricing in the industry. You can utilize the contact list for unlimited use in the future and sustain the sales campaigns." },
  ]
}
