import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.less']
})
export class SolutionsComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.setMetaTags();
  }

  private setMetaTags(): void {
    this.meta.updateTag({ name: 'title', content: 'Our Solutions - Signet Corporate Services' });
    this.meta.updateTag({ name: 'description', content: 'Explore our comprehensive security and manpower solutions including industrial security, corporate guarding, warehouse security, and workforce management across Delhi NCR.' });
    this.meta.updateTag({ property: 'og:title', content: 'Our Solutions - Signet Corporate Services' });
    this.meta.updateTag({ property: 'og:description', content: 'Explore our comprehensive security and manpower solutions across Delhi NCR.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://signetcorporateservices.com/solutions' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Our Solutions - Signet Corporate Services' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Explore our comprehensive security and manpower solutions across Delhi NCR.' });
  }
}
