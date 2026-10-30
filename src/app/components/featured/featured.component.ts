import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectLanguage } from '../../store/forge.selectors';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <section class="section featured">
      <div class="wrap">
        <div class="featured-group">
          <div class="section-heading">
            <span class="eyebrow">{{ (language$ | async) === 'ar' ? 'عملاء وشركاء' : 'CLIENTS & PARTNERS' }}</span>
            <h2>{{ (language$ | async) === 'ar' ? 'شراكات نفخر بها' : 'Organizations featured in our company profile' }}</h2>
          </div>
          <div class="partner-grid">
            @for (partner of partners; track partner.image) {
              <div class="partner-card">
                <img [src]="'assets/clients-partners/' + partner.image" [alt]="partner.name" loading="lazy" decoding="async" />
              </div>
            }
          </div>
        </div>

        <div class="featured-group">
          <div class="section-heading">
            <span class="eyebrow">{{ (language$ | async) === 'ar' ? 'مشروعات مختارة' : 'SELECTED PROJECTS' }}</span>
            <h2>{{ (language$ | async) === 'ar' ? 'مشروعات واردة في ملف الشركة' : 'Projects featured in the company profile' }}</h2>
            <p>{{ (language$ | async) === 'ar' ? 'عرض هذه المشروعات لا يحدد وحده نطاق أعمال حجازي ميتال في أي مشروع.' : 'Listing these projects does not by itself specify Hegazy Metal’s exact scope of work on any project.' }}</p>
          </div>
          <div class="project-grid">
            @for (project of projects; track project.image) {
              <article class="project-card">
                <img [src]="'assets/projects-featured/' + project.image" [alt]="project.name" loading="lazy" decoding="async" />
                <h3>{{ project.name }}</h3>
              </article>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .featured{background:var(--surface-2)}
    .featured-group+.featured-group{margin-top:76px}
    .section-heading{display:grid;gap:10px;margin-bottom:26px}
    .eyebrow{color:var(--accent);font:600 .8rem var(--font-mono);letter-spacing:.13em}
    h2{font:700 clamp(1.7rem,3vw,2.4rem)/1.4 var(--font-display)}
    .section-heading p{max-width:760px;margin:0;color:var(--muted);line-height:1.8}
    .partner-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:14px}
    .partner-card{display:grid;place-items:center;min-height:130px;padding:18px;border:1px solid var(--line);border-radius:16px;background:#fff}
    .partner-card img{display:block;width:100%;height:88px;object-fit:contain}
    .project-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
    .project-card{overflow:hidden;margin:0;border:1px solid var(--line);border-radius:18px;background:var(--surface);box-shadow:var(--shadow)}
    .project-card:last-child{grid-column:2}
    .project-card img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;background:var(--surface-2)}
    .project-card h3{margin:0;padding:16px 18px;font:600 1rem/1.6 var(--font-display)}
    @media(max-width:950px){.partner-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.project-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.project-card:last-child{grid-column:1/-1;width:min(100%,520px);justify-self:center}}
    @media(max-width:560px){.partner-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.partner-card{min-height:110px;padding:14px}.partner-card img{height:74px}.project-grid{grid-template-columns:1fr}.project-card:last-child{grid-column:auto;width:auto}.featured-group+.featured-group{margin-top:56px}}
  `]
})
export class FeaturedComponent {
  language$: Observable<'ar' | 'en'> = this.store.select(selectLanguage);

  partners = [
    { name: 'Concord', image: 'concord.png' },
    { name: 'El Hazek Construction', image: 'el-hazek-construction.png' },
    { name: 'Hassan Allam Properties', image: 'hassan-allam-properties.png' },
    { name: 'HAZ Misr', image: 'haz-misr.png' },
    { name: 'IVEC Contracting', image: 'ivec-contracting.png' },
    { name: 'Orascom Construction', image: 'orascom-construction.png' },
    { name: 'Power Control', image: 'power-control.png' },
    { name: 'Redcon Construction', image: 'redcon-construction.png' },
    { name: 'Rowad Modern Engineering', image: 'rowad-modern-engineering.png' },
    { name: 'SIAC', image: 'siac.png' },
    { name: 'TMG', image: 'tmg.png' }
  ];

  projects = [
    { name: 'Al-Fattah Al-Aleem Mosque, New Administrative Capital', image: 'al-fattah-al-aleem-mosque-new-capital.png' },
    { name: 'Al Massa Hotel, El Alamein', image: 'al-massa-hotel-el-alamein.png' },
    { name: 'Al Massa Hotel, New Administrative Capital', image: 'al-massa-hotel-new-administrative-capital.png' },
    { name: 'Egyptian Parliament', image: 'egyptian-parliament.png' },
    { name: 'Four Seasons Hotel, Madinaty', image: 'four-seasons-hotel-madinaty.png' },
    { name: 'Galala University', image: 'galala-university.png' },
    { name: 'Grand Egyptian Museum', image: 'grand-egyptian-museum.png' },
    { name: 'Masr Mosque', image: 'masr-mosque.png' },
    { name: 'New Administrative Capital Opera House', image: 'new-administrative-capital-opera-house.png' },
    { name: 'New Giza Hospital', image: 'new-giza-hospital.png' },
    { name: 'October Gardens Central Train Station', image: 'october-gardens-central-train-station.png' },
    { name: 'Smart Village, Assiut', image: 'smart-village-assiut.png' },
    { name: 'Wadi El Nile Hospital', image: 'wadi-el-nile-hospital.png' }
  ];

  constructor(private store: Store) {}
}
