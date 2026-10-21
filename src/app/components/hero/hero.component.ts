import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectLanguage } from '../../store/forge.selectors';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <section class="hero night" id="home">
      <div class="wrap hero-grid">
        <div class="hero-copy">
          <span class="pill">{{ (language$ | async) === 'ar' ? 'حلول معدنية للمشروعات منذ 1996' : 'Metal solutions for projects since 1996' }}</span>
          <h1>{{ (language$ | async) === 'ar' ? 'حلول معدنية' : 'Engineered metal' }}<span class="gradient">{{ (language$ | async) === 'ar' ? 'مصممة لاحتياجات مشروعك' : 'for your project needs' }}</span></h1>
          <p class="lead">{{ (language$ | async) === 'ar' ? 'حجازي ميتال تعمل في تصنيع وتشكيل المعادن منذ عام 1996، وتقدم منتجات معدنية وتوريداً للمشروعات مع الاهتمام بالمواصفات والتنسيق وجودة التنفيذ.' : 'Hegazy Metal has worked in metal manufacturing and forming since 1996, supplying metal products and project solutions with attention to specifications, coordination and quality.' }}</p>
          <div class="cta">
            <a class="btn btn-grad" href="#services">{{ (language$ | async) === 'ar' ? 'شاهد خدماتنا' : 'Explore services' }} <span>←</span></a>
            <a class="btn btn-outline" href="#quote">{{ (language$ | async) === 'ar' ? 'اطلب عرض سعر' : 'Request a quote' }}</a>
          </div>
        </div>
        <div class="hero-art" aria-hidden="true">
          <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
          <div class="blueprint">
            <span class="bp-label">HEGAZY METAL / ENGINEERED SOLUTIONS</span>
            <svg viewBox="0 0 360 300" role="img">
              <g fill="none" stroke="#71def8" stroke-width="2">
                <path d="M65 240V105L180 55 295 105V240M65 105L180 155 295 105M180 155V285M65 240L180 285 295 240M95 118V225M265 118V225M95 225L180 260 265 225"/>
                <path d="M50 245H310M55 98L180 42 305 98" stroke-dasharray="5 6" opacity=".5"/>
                <path d="M65 240L95 225M295 240L265 225M180 55V155" stroke="#ffb454"/>
              </g>
              <g fill="#a8eafa" font-size="10" font-family="monospace"><text x="180" y="22" text-anchor="middle">PORTAL FRAME / 014</text><text x="180" y="298" text-anchor="middle">S355JR · CNC FABRICATION</text></g>
              <circle cx="180" cy="155" r="5" fill="#ffb454"/>
            </svg>
            <div class="bp-footer"><span>PRECISION</span><span>ENGINEERING</span><span>DELIVERY</span></div>
          </div>
        </div>
      </div>
      <div class="wrap stats">
        <div class="stat"><strong>1996</strong><small>{{ (language$ | async) === 'ar' ? 'بداية العمل في التصنيع المعدني' : 'Working in metal manufacturing since' }}</small></div>
        <div class="stat"><strong>06</strong><small>{{ (language$ | async) === 'ar' ? 'مجالات منتجات وحلول' : 'Product and solution categories' }}</small></div>
        <div class="stat"><strong>01</strong><small>{{ (language$ | async) === 'ar' ? 'تنسيق واضح للمشروع' : 'Clear project coordination' }}</small></div>
        <div class="stat"><strong>QC</strong><small>{{ (language$ | async) === 'ar' ? 'اهتمام بالمواصفات والجودة' : 'Specification-minded quality' }}</small></div>
      </div>
      <div class="ticker"><div class="ticker-track"><span>CABLE TRAYS ✦ METAL DOORS ✦ MARBLE FIXING CHASSIS ✦ STEEL BRACKETS ✦ LASER CUTTING ✦ HANDRAILS & FENCES ✦ </span><span>CABLE TRAYS ✦ METAL DOORS ✦ MARBLE FIXING CHASSIS ✦ STEEL BRACKETS ✦ LASER CUTTING ✦ HANDRAILS & FENCES ✦ </span></div></div>
    </section>
  `,
  styles: [`
    .hero{padding:150px 0 0;background:radial-gradient(800px 520px at 12% 18%,#0e749044,transparent 60%),radial-gradient(700px 500px at 90% 70%,#0a7d9c35,transparent 60%),#06080b;color:#f2f7fa;position:relative;overflow:hidden}
    .hero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(#ffffff08 1px,transparent 1px),linear-gradient(90deg,#ffffff08 1px,transparent 1px);background-size:52px 52px;mask-image:radial-gradient(ellipse at center,#000,transparent 75%);pointer-events:none}
    .hero-grid{display:grid;grid-template-columns:1.1fr .9fr;align-items:center;gap:52px;position:relative}
    .hero-copy{display:grid;justify-items:start;gap:22px}
    h1{font:700 clamp(2.5rem,5vw,4.3rem)/1.25 var(--font-display);letter-spacing:-.04em}
    .gradient{display:block;background:linear-gradient(120deg,#8ae9ff,#22bfe6);color:transparent;background-clip:text}
    .lead{max-width:620px;color:#aab8c3;font-size:1.08rem;line-height:1.9}
    .pill{padding:6px 14px;border:1px solid #4fd3f355;border-radius:999px;background:#4fd3f311;color:#65ddf8;font-size:.85rem}
    .cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:4px}
    .btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:13px 20px;border-radius:13px;text-decoration:none;font-weight:700;transition:transform .2s}
    .btn:hover{transform:translateY(-2px)}.btn-grad{background:linear-gradient(135deg,#7be3fa,#16a8cf);color:#03212b}.btn-outline{border:1px solid #ffffff30;color:#f2f7fa;background:#ffffff08}
    .hero-art{position:relative;min-width:0;display:grid;place-items:center;min-height:390px}
    .orbit{position:absolute;width:330px;height:330px;border:1px solid #71def822;border-radius:50%}.orbit-two{width:245px;height:245px;border-style:dashed}
    .blueprint{position:relative;width:min(100%,420px);padding:18px;border:1px solid #71def833;border-radius:22px;background:linear-gradient(145deg,#0d3444bb,#08161fdd);box-shadow:0 30px 80px #0006}
    .bp-label,.bp-footer{font:11px var(--font-mono);color:#8ddff2;letter-spacing:.12em}.blueprint svg{display:block;width:100%;margin:10px 0}.bp-footer{display:flex;justify-content:space-between;border-top:1px solid #71def822;padding-top:12px;font-size:9px}
    .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:60px;position:relative}
    .stat{display:flex;align-items:center;gap:14px;padding:20px;border:1px solid #ffffff1b;background:#ffffff08;border-radius:16px;backdrop-filter:blur(8px)}
    .stat strong{font:700 1.9rem var(--font-display);white-space:nowrap}.stat strong span{color:#4fd3f3}.stat small{color:#aab8c3;font-size:.86rem}
    .ticker{overflow:hidden;border-top:1px solid #ffffff16;margin-top:38px;padding:18px 0;color:#8296a5;font:500 .8rem var(--font-mono);letter-spacing:.1em;white-space:nowrap}
    .ticker-track{display:flex;width:max-content;gap:40px;animation:scroll 32s linear infinite}.ticker-track span{display:block}
    @keyframes scroll{to{transform:translateX(50%)}}
    @media(max-width:900px){.hero-grid{grid-template-columns:1fr;gap:25px}.hero-art{min-height:320px}.blueprint{max-width:390px}.stats{grid-template-columns:repeat(2,1fr)}}
    @media(max-width:520px){.hero{padding-top:125px}.hero-art{min-height:290px}.orbit{width:260px;height:260px}.orbit-two{width:200px;height:200px}.stats{gap:8px;margin-top:35px}.stat{padding:12px;align-items:flex-start;flex-direction:column;gap:5px}.stat strong{font-size:1.55rem}.stat small{font-size:.78rem}}
  `]
})
export class HeroComponent {
  language$: Observable<'ar' | 'en'> = this.store.select(selectLanguage);
  constructor(private store: Store) {}
}
