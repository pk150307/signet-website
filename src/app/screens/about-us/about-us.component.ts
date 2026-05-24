import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.less']
})
export class AboutUsComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.setMetaTags();
  }

  private setMetaTags(): void {
    this.meta.updateTag({ name: 'title', content: 'About Us - Signet Corporate Services' });
    this.meta.updateTag({ name: 'description', content: 'Learn about Signet Corporate Services - a decade of delivering security and manpower solutions across Delhi NCR with focus, expertise, and accountability.' });
    this.meta.updateTag({ property: 'og:title', content: 'About Us - Signet Corporate Services' });
    this.meta.updateTag({ property: 'og:description', content: 'Learn about Signet Corporate Services - a decade of delivering security and manpower solutions across Delhi NCR.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://signetcorporateservices.com/about' });
    this.meta.updateTag({ name: 'twitter:title', content: 'About Us - Signet Corporate Services' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Learn about Signet Corporate Services - a decade of delivering security and manpower solutions across Delhi NCR.' });
  }
}
