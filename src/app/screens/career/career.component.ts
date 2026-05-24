import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.less']
})
export class CareerComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.setMetaTags();
  }

  private setMetaTags(): void {
    this.meta.updateTag({ name: 'title', content: 'Careers - Signet Corporate Services' });
    this.meta.updateTag({ name: 'description', content: 'Join Signet Corporate Services and build a rewarding career in security and manpower services. Explore current job openings and opportunities across Delhi NCR.' });
    this.meta.updateTag({ property: 'og:title', content: 'Careers - Signet Corporate Services' });
    this.meta.updateTag({ property: 'og:description', content: 'Join Signet Corporate Services and build a rewarding career in security and manpower services across Delhi NCR.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://signetcorporateservices.com/careers' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Careers - Signet Corporate Services' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Join Signet Corporate Services and build a rewarding career in security and manpower services across Delhi NCR.' });
  }
}
