import { Component } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { FORGE_SERVICES, ForgeService } from '../../data/services';
import { selectService } from '../../store/forge.actions';
import { selectLanguage, selectSelectedServiceId } from '../../store/forge.selectors';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf],
  template: `
    <section class="section services-section" id="services">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow">{{ (language$ | async) === 'ar' ? 'خدماتنا' : 'OUR CAPABILITIES' }}</span>
          <h2>{{ (language$ | async) === 'ar' ? 'كل مراحل العمل' : 'Every stage of the job' }} <span>{{ (language$ | async) === 'ar' ? 'داخل مصنع واحد' : 'under one roof' }}</span></h2>
          <p>{{ (language$ | async) === 'ar' ? 'من الرسم التنفيذي حتى التركيب في الموقع. تنسيق مباشر بين كل مراحل التصنيع.' : 'From shop drawings to on-site installation, every fabrication stage is coordinated in-house.' }}</p>
        </div>
        <div class="service-layout">
          <div class="service-list" role="tablist" [attr.aria-label]="(language$ | async) === 'ar' ? 'الخدمات' : 'Services'">
            <button *ngFor="let service of services" class="service-tab" type="button"
              [class.active]="(selectedId$ | async) === service.id"
              [attr.aria-selected]="(selectedId$ | async) === service.id"
              (click)="choose(service.id)">
              <span class="number">0{{ service.id }}</span><span class="icon">{{ service.icon }}</span>
              <span class="tab-copy"><strong>{{ title(service) }}</strong><small>{{ subtitle(service) }}</small></span><span class="arrow">↗</span>
            </button>
          </div>
          <div class="service-detail" *ngIf="activeService$ | async as service">
            <div class="detail-art">
              <div class="detail-grid"></div>
              <div class="detail-icon">{{ service.icon }}</div>
              <span class="detail-label">HEGAZY METAL / SERVICE 0{{ service.id }}</span>
              <div class="detail-lines"><i></i><i></i><i></i><i></i><i></i></div>
              <span class="detail-index">0{{ service.id }} / 04</span>
            </div>
            <div class="detail-body">
              <h3>{{ title(service) }}</h3><p>{{ description(service) }}</p>
              <ul><li *ngFor="let feature of features(service)"><span>✓</span>{{ feature }}</li></ul>
              <a class="btn btn-grad" href="#quote" (click)="selectForQuote(service.id)">{{ (language$ | async) === 'ar' ? 'اطلب الخدمة' : 'Request this service' }} ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services-section{background:var(--surface-2)}
    .section-head{max-width:700px;display:grid;gap:14px;margin-bottom:40px}.eyebrow{font:600 .8rem var(--font-mono);letter-spacing:.12em;color:var(--accent)}
    h2{font:700 clamp(1.9rem,3.5vw,2.8rem)/1.4 var(--font-display)}h2 span{color:var(--accent)}.section-head p{color:var(--muted);line-height:1.9}
    .service-layout{display:grid;grid-template-columns:.9fr 1.1fr;gap:26px;align-items:start}
    .service-list{display:grid;gap:10px}
    .service-tab{display:grid;grid-template-columns:28px 46px 1fr 20px;gap:12px;align-items:center;text-align:start;padding:16px;border:1px solid var(--line);border-radius:16px;background:var(--surface);color:var(--ink);cursor:pointer;transition:.2s}
    .service-tab:hover,.service-tab.active{border-color:#0a7d9c55;box-shadow:0 12px 30px #0b16200a;transform:translateY(-1px)}
    .service-tab.active{background:color-mix(in srgb,var(--accent-soft) 45%,var(--surface))}
    .number{font:500 .75rem var(--font-mono);color:var(--muted)}.icon{display:grid;place-items:center;width:44px;height:44px;border-radius:12px;background:var(--accent-soft);color:var(--accent);font-size:1.5rem}
    .tab-copy strong,.tab-copy small{display:block}.tab-copy strong{font:600 1rem var(--font-display)}.tab-copy small{color:var(--muted);font-size:.8rem;margin-top:4px}.arrow{color:var(--accent);font-size:1.2rem;opacity:0}.active .arrow{opacity:1}
    .service-detail{overflow:hidden;border:1px solid var(--line);border-radius:24px;background:var(--surface);box-shadow:var(--shadow)}
    .detail-art{position:relative;min-height:220px;display:grid;place-items:center;overflow:hidden;background:linear-gradient(145deg,#08161f,#0d3444);color:#8de4fa}
    .detail-grid{position:absolute;inset:0;background-image:linear-gradient(#71def815 1px,transparent 1px),linear-gradient(90deg,#71def815 1px,transparent 1px);background-size:25px 25px}
    .detail-icon{position:relative;display:grid;place-items:center;width:120px;height:120px;border:1px solid #71def866;border-radius:30px;background:#71def80d;font-size:4rem;transform:rotate(-8deg);box-shadow:0 0 80px #22bfe61c}
    .detail-label,.detail-index{position:absolute;left:18px;bottom:16px;font:10px var(--font-mono);letter-spacing:.1em}.detail-index{left:auto;right:18px;color:#ffc27a}
    .detail-lines{position:absolute;right:12%;top:18%;display:flex;gap:7px;align-items:flex-end;opacity:.35}.detail-lines i{display:block;width:5px;height:50px;border:1px solid #71def8}.detail-lines i:nth-child(2){height:90px}.detail-lines i:nth-child(3){height:65px}.detail-lines i:nth-child(4){height:110px}.detail-lines i:nth-child(5){height:75px}
    .detail-body{padding:26px;display:grid;gap:15px}.detail-body h3{font:700 1.45rem var(--font-display)}.detail-body p{color:var(--muted);line-height:1.9}.detail-body ul{list-style:none;padding:0;margin:0;display:flex;flex-wrap:wrap;gap:8px}.detail-body li{display:flex;gap:7px;align-items:center;padding:7px 10px;border-radius:999px;background:var(--surface-2);font-size:.82rem}.detail-body li span{color:var(--accent)}
    @media(max-width:850px){.service-layout{grid-template-columns:1fr}.service-list{grid-template-columns:1fr 1fr}}
    @media(max-width:560px){.service-list{grid-template-columns:1fr}.service-tab{padding:12px;grid-template-columns:22px 40px 1fr 14px}.icon{width:38px;height:38px}.detail-body{padding:20px}}
  `]
})
export class ServicesComponent {
  services = FORGE_SERVICES;
  language$: Observable<'ar' | 'en'> = this.store.select(selectLanguage);
  selectedId$: Observable<number> = this.store.select(selectSelectedServiceId);
  activeService$: Observable<ForgeService> = this.selectedId$.pipe(map(id => FORGE_SERVICES.find(s => s.id === id) ?? FORGE_SERVICES[0]));
  constructor(private store: Store) {}
  choose(id: number): void { this.store.dispatch(selectService({ serviceId: id })); }
  selectForQuote(id: number): void { this.choose(id); }
  title(s: ForgeService): string { return this.currentLang === 'ar' ? s.titleAr : s.titleEn; }
  subtitle(s: ForgeService): string { return this.currentLang === 'ar' ? s.subtitleAr : s.subtitleEn; }
  description(s: ForgeService): string { return this.currentLang === 'ar' ? s.descriptionAr : s.descriptionEn; }
  features(s: ForgeService): string[] { return this.currentLang === 'ar' ? s.featuresAr : s.featuresEn; }
  private currentLang: 'ar' | 'en' = 'ar';
  ngOnInit(): void { this.language$.subscribe(lang => this.currentLang = lang); }
}
