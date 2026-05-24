import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.less']
})
export class ContactUsComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.setMetaTags();
  }

  private setMetaTags(): void {
    this.meta.updateTag({ name: 'title', content: 'Contact Us - Signet Corporate Services' });
    this.meta.updateTag({ name: 'description', content: 'Get in touch with Signet Corporate Services for security and manpower solutions in Delhi NCR. Contact us for inquiries, quotes, and partnership opportunities.' });
    this.meta.updateTag({ property: 'og:title', content: 'Contact Us - Signet Corporate Services' });
    this.meta.updateTag({ property: 'og:description', content: 'Get in touch with Signet Corporate Services for security and manpower solutions in Delhi NCR.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://signetcorporateservices.com/contact' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Contact Us - Signet Corporate Services' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Get in touch with Signet Corporate Services for security and manpower solutions in Delhi NCR.' });
  }
}
