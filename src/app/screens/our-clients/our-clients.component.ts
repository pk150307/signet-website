import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

interface Client {
  name: string;
  location: string;
}

interface ClientGroup {
  title: string;
  clients: Client[];
}

@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.less']
})
export class OurClientsComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.setMetaTags();
  }

  private setMetaTags(): void {
    this.meta.updateTag({ name: 'title', content: 'Our Clients - Signet Corporate Services' });
    this.meta.updateTag({ name: 'description', content: 'Meet our valued clients across technology, manufacturing, pharma, apparel, and logistics sectors in Delhi NCR who trust Signet Corporate Services for their security and manpower needs.' });
    this.meta.updateTag({ property: 'og:title', content: 'Our Clients - Signet Corporate Services' });
    this.meta.updateTag({ property: 'og:description', content: 'Meet our valued clients across technology, manufacturing, pharma, apparel, and logistics sectors in Delhi NCR.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://signetcorporateservices.com/clients' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Our Clients - Signet Corporate Services' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Meet our valued clients across technology, manufacturing, pharma, apparel, and logistics sectors in Delhi NCR.' });
  }
  clientGroups: ClientGroup[] = [
    {
      title: 'Technology & Corporate',
      clients: [
        { name: 'Aequor Information Technologies', location: 'Sector 34, Gurgaon' },
        { name: 'Sun Tech India', location: 'Udyog Vihar Phase VI, Gurgaon' },
        { name: 'EAP Electro Projects (P) Ltd', location: 'Udyog Vihar Phase VI, Gurgaon' },
        { name: 'Eptech Power', location: 'Sector 37, Gurgaon' }
      ]
    },
    {
      title: 'Manufacturing & Engineering',
      clients: [
        { name: 'Krishna Metallurgical Laboratories', location: 'Sector 37, Gurgaon' },
        { name: 'JSL Fabricators Pvt Ltd', location: 'Sector 8, Manesar, Gurgaon' },
        { name: 'Mass Generators (P) Ltd', location: 'Udyog Vihar, Gurgaon' },
        { name: 'OSR Industries', location: 'Kadipur, Gurgaon' }
      ]
    },
    {
      title: 'Pharma, Medical & Chemicals',
      clients: [
        { name: 'Mais India Medical Devices P Ltd', location: 'Sector 37, Gurgaon' },
        { name: 'Roseus Private Ltd', location: 'Pace City II, Sector 37' },
        { name: '3J Finechems', location: 'Udyog Vihar Phase VI, Gurgaon' },
        { name: 'Pearl Water', location: 'Sector 37, Gurgaon' }
      ]
    },
    {
      title: 'Apparel, Export & Trade',
      clients: [
        { name: 'Shree Balaji Exports Inc', location: 'Sector 37, Gurgaon' },
        { name: 'Atvira Apparels', location: 'Pace City II, Sector 37' },
        { name: 'Milano Impex Pvt Ltd', location: 'Sector 37, Gurgaon' },
        { name: 'Shree Salasar Fashion Pvt Ltd', location: 'Sector 37, Gurgaon' },
        { name: 'Dynasty Apparels', location: 'Sector 37, Gurgaon' },
        { name: 'Brij Prints', location: 'Sector 37, Gurgaon' },
        { name: 'Filk Merchandising', location: 'Sector 37, Gurgaon' },
        { name: 'S.S International', location: 'Phase VI, Sector 37' }
      ]
    },
    {
      title: 'Logistics, Trade & Others',
      clients: [
        { name: 'Nexus Enterprises', location: 'Sector 37, Gurgaon' },
        { name: 'Sharpex Global', location: 'Sector 37, Gurgaon' },
        { name: 'OM Overseas', location: 'Sector 37, Gurgaon' },
        { name: 'VKG Labels & Tags LLP', location: 'Phase VI, Sector 37' },
        { name: 'Daily Bakery', location: 'Sector 37, Gurgaon' },
        { name: 'Jaggi Brothers', location: 'Sector 37, Gurgaon' }
      ]
    }
  ];
}
