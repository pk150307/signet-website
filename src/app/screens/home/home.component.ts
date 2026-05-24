import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Meta } from '@angular/platform-browser';

interface HomeEdge {
  title: string;
  description: string;
  image: string;
}

interface CarouselSlide {
  image: string;
  title: string;
  caption: string;
}

interface HeroSlide {
  type: 'image' | 'video';
  src: string;
  alt: string;
}

interface SecuritySector {
  title: string;
  description: string;
  image: string;
}

interface KpiStat {
  target: number;
  suffix: string;
  label: string;
  strip: number[];
  targetIndex: number;
  rollIndex: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('statsSection') statsSection?: ElementRef<HTMLElement>;

  activeSlide = 0;
  activeHeroSlide = 0;
  statsLocked = false;
  private carouselTimer?: ReturnType<typeof setInterval>;
  private heroTimer?: ReturnType<typeof setInterval>;
  private statsObserver?: IntersectionObserver;
  private statsAnimated = false;

  readonly statLineHeight = 56;

  kpiStats: KpiStat[] = [
    this.createKpiStat(10, '+', 'Years Active'),
    this.createKpiStat(50, '+', 'Client Organisations'),
    this.createKpiStat(8, '', 'Service Verticals'),
    this.createKpiStat(100, '%', 'Compliance Record')
  ];

  readonly showcaseVideo = 'assets/videos/security-patrol.mp4';
  readonly showcasePoster = 'assets/images/guard-company-gate.jpg';

  readonly positioningPrimaryImage = 'assets/images/warehouse-helpers.jpg';
  readonly positioningSecondaryImage = 'assets/images/ncr-factory-floor.jpg';

  heroSlides: HeroSlide[] = [
    {
      type: 'image',
      src: 'assets/images/guard-company-gate.jpg',
      alt: 'Security guard at an industrial company gate in Delhi NCR'
    },
    {
      type: 'image',
      src: 'assets/images/vehicle-gate-inspection.jpg',
      alt: 'Vehicle inspection at a secured factory entry point'
    },
    {
      type: 'video',
      src: 'assets/videos/hero-gate-security.mp4',
      alt: 'Security personnel on patrol at a corporate facility'
    },
    {
      type: 'image',
      src: 'assets/images/visitor-register-log.jpg',
      alt: 'Visitor register and access control at a secured premises'
    }
  ];

  securitySectors: SecuritySector[] = [
    {
      title: 'Industrial & Manufacturing',
      description: 'Gate security, patrolling, and access control for factory floors, assembly units, and production facilities across Gurgaon and Manesar.',
      image: 'assets/images/ncr-factory-floor.jpg'
    },
    {
      title: 'Corporate & IT Campuses',
      description: 'Professional front-office and lobby security for corporate offices, business parks, and IT campuses with visitor management discipline.',
      image: 'assets/images/guard-company-gate.jpg'
    },
    {
      title: 'Warehousing & Logistics',
      description: 'Perimeter guarding, vehicle checks, and cargo-area security for warehouses, dispatch yards, and logistics hubs.',
      image: 'assets/images/warehouse-helpers.jpg'
    },
    {
      title: 'Residential Societies',
      description: 'Main gate security, visitor verification, and round-the-clock vigilance for housing societies and residential complexes.',
      image: 'assets/images/visitor-register-log.jpg'
    },
    {
      title: 'Healthcare & Pharma',
      description: 'Controlled access, visitor screening, and disciplined guarding for hospitals, clinics, and pharmaceutical facilities.',
      image: 'assets/images/industrial-housekeeping.jpg'
    },
    {
      title: 'Commercial & Retail',
      description: 'Customer-facing security and parking control for malls, showrooms, and high-footfall commercial establishments.',
      image: 'assets/images/vehicle-gate-inspection.jpg'
    },
    {
      title: 'Export & Apparel Units',
      description: 'Asset protection, material gate checks, and workforce security for export-oriented and apparel manufacturing units.',
      image: 'assets/images/warehouse-helpers.jpg'
    },
    {
      title: 'Engineering & Fabrication',
      description: 'Workshop security, equipment protection, and skilled manpower support for engineering and fabrication operations.',
      image: 'assets/images/ncr-factory-floor.jpg'
    }
  ];

  carouselSlides: CarouselSlide[] = [
    {
      image: 'assets/images/guard-company-gate.jpg',
      title: 'Security at the Company Gate',
      caption: 'Uniformed guards manning factory and campus entry points across Gurgaon, Manesar, and Udyog Vihar.'
    },
    {
      image: 'assets/images/vehicle-gate-inspection.jpg',
      title: 'Vehicle In & Out Inspection',
      caption: 'Every truck, bike, and delivery vehicle checked before entry and exit — protecting your premises round the clock.'
    },
    {
      image: 'assets/images/visitor-register-log.jpg',
      title: 'Entry & Exit Register Maintenance',
      caption: 'Visitor logs, contractor records, and movement registers maintained with discipline at every site we manage.'
    },
    {
      image: 'assets/images/ncr-factory-floor.jpg',
      title: 'NCR Factory & Small-Scale Industry',
      caption: 'Manpower deployed on production floors, assembly units, and small-scale industrial operations across the NCR.'
    },
    {
      image: 'assets/images/warehouse-helpers.jpg',
      title: 'Helpers, Loaders & Warehouse Staff',
      caption: 'Reliable loaders, helpers, and warehouse hands supporting dispatch, inventory, and logistics operations.'
    },
    {
      image: 'assets/images/industrial-housekeeping.jpg',
      title: 'Housekeeping & Industrial Cleaning',
      caption: 'Sweepers and sanitation teams keeping factory floors, workshops, and common areas clean and compliant.'
    }
  ];

  edges: HomeEdge[] = [
    {
      title: 'Security & Manpower, Unified',
      description: 'One accountable partner for guarding and workforce — not two vendors passing the buck when accountability matters most.',
      image: 'assets/images/guard-company-gate.jpg'
    },
    {
      title: 'Built for NCR Industry',
      description: 'From Udyog Vihar to Manesar, we know factory floors, warehouses, and corporate parks — because this is our home turf.',
      image: 'assets/images/ncr-factory-floor.jpg'
    },
    {
      title: 'Compliance as Culture',
      description: 'PF, ESI, GST, and labour-law obligations managed proactively — so your exposure stays where it belongs: at zero.',
      image: 'assets/images/visitor-register-log.jpg'
    },
    {
      title: 'People You Can Reach',
      description: 'Fast decisions, on-ground supervisors, and relationship-led support — not a call-centre runaround when you need action.',
      image: 'assets/images/vehicle-gate-inspection.jpg'
    }
  ];

  competitorGaps = [
    'National operators optimise for scale — you get volume, not intimacy.',
    'Fragmented vendors split security and manpower — gaps appear at the handover.',
    'Compliance treated as paperwork — until it becomes your problem.',
    'Signet was built for establishments that need certainty, not just headcount.'
  ];

  constructor(private cdr: ChangeDetectorRef, private meta: Meta) {
    this.setMetaTags();
  }

  private setMetaTags(): void {
    this.meta.updateTag({ name: 'title', content: 'Signet Corporate Services - Security & Manpower Solutions in Delhi NCR' });
    this.meta.updateTag({ name: 'description', content: 'Signet Corporate Services provides professional security guards, industrial manpower, and workforce solutions across Delhi NCR, Gurgaon, Manesar, and Udyog Vihar. Trusted by 50+ client organisations.' });
    this.meta.updateTag({ property: 'og:title', content: 'Signet Corporate Services - Security & Manpower Solutions in Delhi NCR' });
    this.meta.updateTag({ property: 'og:description', content: 'Professional security guards, industrial manpower, and workforce solutions across Delhi NCR. Trusted by 50+ client organisations.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://signetcorporateservices.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Signet Corporate Services - Security & Manpower Solutions in Delhi NCR' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Professional security guards, industrial manpower, and workforce solutions across Delhi NCR. Trusted by 50+ client organisations.' });
  }

  ngOnInit(): void {
    this.carouselTimer = setInterval(() => this.nextSlide(), 6000);
    this.heroTimer = setInterval(() => this.nextHeroSlide(), 7000);
  }

  ngAfterViewInit(): void {
    if (!this.statsSection) {
      return;
    }

    this.statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.statsAnimated) {
          this.statsAnimated = true;
          this.animateKpiStats();
          this.statsObserver?.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    this.statsObserver.observe(this.statsSection.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.carouselTimer) {
      clearInterval(this.carouselTimer);
    }
    if (this.heroTimer) {
      clearInterval(this.heroTimer);
    }
    this.statsObserver?.disconnect();
  }

  private createKpiStat(target: number, suffix: string, label: string): KpiStat {
    const cycles = target > 50 ? 2 : 4;
    const strip: number[] = [];

    for (let cycle = 0; cycle < cycles; cycle++) {
      for (let value = 0; value <= target; value++) {
        strip.push(value);
      }
    }

    return {
      target,
      suffix,
      label,
      strip,
      targetIndex: strip.length - 1,
      rollIndex: 0
    };
  }

  private animateKpiStats(): void {
    this.kpiStats.forEach((stat, index) => {
      setTimeout(() => {
        stat.rollIndex = stat.targetIndex;
        this.cdr.markForCheck();

        if (index === this.kpiStats.length - 1) {
          setTimeout(() => {
            this.statsLocked = true;
            this.cdr.markForCheck();
          }, 2400);
        }
      }, index * 160);
    });
  }

  nextSlide(): void {
    this.activeSlide = (this.activeSlide + 1) % this.carouselSlides.length;
  }

  prevSlide(): void {
    this.activeSlide =
      (this.activeSlide - 1 + this.carouselSlides.length) % this.carouselSlides.length;
  }

  goToSlide(index: number): void {
    this.activeSlide = index;
  }

  nextHeroSlide(): void {
    this.activeHeroSlide = (this.activeHeroSlide + 1) % this.heroSlides.length;
  }

  goToHeroSlide(index: number): void {
    this.activeHeroSlide = index;
  }
}
