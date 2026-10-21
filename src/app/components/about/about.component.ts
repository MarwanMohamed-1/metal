import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectLanguage } from '../../store/forge.selectors';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <section class="section" id="about">
      <div class="wrap about-grid">
        <div class="drawing">
          <div class="drawing-head"><span>HM-1996</span><span>METAL SOLUTIONS</span><span>PROFILE</span></div>
          <svg viewBox="0 0 520 350" role="img" aria-label="Technical drawing of a steel portal frame">
            <defs><pattern id="grid" width="22" height="22" patternUnits="userSpaceOnUse"><path d="M22 0H0V22" fill="none" stroke="#8de4fa" stroke-opacity=".12"/></pattern></defs>
            <rect width="520" height="350" fill="url(#grid)"/>
            <g fill="#7fe3fb18" stroke="#7fe3fb" stroke-width="2">
              <rect x="95" y="105" width="17" height="190"/><rect x="408" y="105" width="17" height="190"/>
              <polygon points="112,108 260,54 408,108 408,126 260,72 112,126"/>
              <polygon points="112,126 157,110 112,172"/><polygon points="408,126 363,110 408,172"/>
              <rect x="82" y="294" width="43" height="7"/><rect x="397" y="294" width="43" height="7"/>
            </g>
            <g fill="none" stroke="#8de4fa" stroke-width="1" opacity=".75"><path d="M95 320H425M95 312v16M425 312v16M455 105V295M447 105h16M447 295h16" stroke-dasharray="5 4"/></g>
            <g fill="#c8f3ff" font-family="monospace" font-size="12"><text x="260" y="340" text-anchor="middle">12 000 mm</text><text x="480" y="205" transform="rotate(-90 480 205)" text-anchor="middle">6 000 mm</text><text x="155" y="95">19°</text></g>
            <circle cx="408" cy="127" r="28" fill="none" stroke="#ffb454" stroke-dasharray="4 4"/><path d="M428 107l25-18" stroke="#ffb454"/><text x="454" y="84" fill="#ffc27a" font-size="10">DET. 03</text>
          </svg>
          <div class="drawing-foot"><span>ENGINEERING / FABRICATION</span><strong>EST. 1996</strong></div>
        </div>
        <div class="copy">
          <span class="eyebrow">{{ (language$ | async) === 'ar' ? 'نبذة عن الشركة' : 'COMPANY OVERVIEW' }}</span>
          <h2>{{ (language$ | async) === 'ar' ? 'خبرة في تشكيل المعادن' : 'Metal manufacturing' }} <span>{{ (language$ | async) === 'ar' ? 'منذ عام 1996' : 'since 1996' }}</span></h2>
          <p>{{ (language$ | async) === 'ar' ? 'بدأت حجازي ميتال العمل في تصنيع وتشكيل المعادن عام 1996. وتركز الشركة على الخبرة العملية وتلبية احتياجات العملاء من خلال الخدمة المهنية والاهتمام بالجودة.' : 'Hegazy Metal began working in metal manufacturing and forming in 1996. The company focuses on practical experience and meeting customer needs through professional service and attention to quality.' }}</p>
          <ul>
            <li><span>✓</span>{{ (language$ | async) === 'ar' ? 'فهم احتياجات العميل ونطاق المشروع' : 'Understand customer needs and project scope' }}</li>
            <li><span>✓</span>{{ (language$ | async) === 'ar' ? 'مراجعة الخامات والأبعاد والتشطيب' : 'Review materials, dimensions and finish' }}</li>
            <li><span>✓</span>{{ (language$ | async) === 'ar' ? 'تنسيق واضح لمتطلبات المشروع' : 'Clear coordination on project requirements' }}</li>
          </ul>
          <a class="text-link" href="#services">{{ (language$ | async) === 'ar' ? 'استكشف منتجاتنا وخدماتنا ←' : 'Explore products and services →' }}</a>
        </div>
      </div>
      <div class="wrap profile-details">
        <div class="profile-note"><span class="eyebrow">{{ (language$ | async) === 'ar' ? 'مهمتنا' : 'OUR MISSION' }}</span><p>{{ (language$ | async) === 'ar' ? 'تقديم حلول معدنية عملية تتوافق مع متطلبات العملاء من خلال التواصل الواضح والاهتمام بالمواصفات والتحسين المستمر.' : 'To provide practical metal solutions aligned with customer requirements through clear communication, careful attention to specifications and continuous improvement.' }}</p></div>
        <div class="profile-note"><span class="eyebrow">{{ (language$ | async) === 'ar' ? 'رؤيتنا' : 'OUR VISION' }}</span><p>{{ (language$ | async) === 'ar' ? 'بناء اسم موثوق في تصنيع المعادن وتوريد المشروعات من خلال خدمة يمكن الاعتماد عليها وتطوير القدرات والشراكات طويلة الأجل.' : 'To build a trusted name in metal manufacturing and project supply through dependable service, growing capabilities and long-term partnerships.' }}</p></div>
        <div class="profile-note profile-projects"><span class="eyebrow">{{ (language$ | async) === 'ar' ? 'مشروعات واردة في ملف الشركة' : 'PROJECTS FEATURED IN THE PROFILE' }}</span><p>Egyptian Parliament · Grand Egyptian Museum · Galala University · New Giza Hospital · New Administrative Capital Opera House · Al Massa Hotel</p><small>{{ (language$ | async) === 'ar' ? 'ذكر هذه المشروعات في الملف لا يحدد وحده نطاق أعمال الشركة في كل مشروع.' : 'Listing these projects does not by itself specify Hegazy Metal’s exact scope of work on each one.' }}</small></div>
        <div class="profile-note"><span class="eyebrow">{{ (language$ | async) === 'ar' ? 'عملاء وشركاء واردون في الملف' : 'CLIENTS & PARTNERS FEATURED' }}</span><p>Concord · Redcon · Hassan Allam · Rowad · Orascom · SIAC · HAZ Misr · El Hazek · Power Control · TMG</p></div>
        <div class="profile-note"><span class="eyebrow">{{ (language$ | async) === 'ar' ? 'الشهادات والاعتمادات' : 'CERTIFICATIONS & APPROVALS' }}</span><p>{{ (language$ | async) === 'ar' ? 'الحالة: قيد الإجراء. يتم ذكر الشهادات وتقارير الاختبار والاعتمادات المحددة بعد التحقق من المستندات ونطاقها.' : 'Status: in progress. Specific certificates, test reports and approvals should only be named after supporting documents and their scope have been verified.' }}</p></div>
      </div>
    </section>
  `,
  styles: [`
    .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(35px,6vw,80px);align-items:center}
    .drawing{background:linear-gradient(145deg,#08161f,#0d3444);border:1px solid #7fe3fb30;border-radius:24px;padding:18px;box-shadow:0 22px 60px #0b16200d;direction:ltr}
    .drawing-head,.drawing-foot{display:flex;justify-content:space-between;gap:8px;color:#8ddff2;font:10px var(--font-mono);letter-spacing:.08em}
    .drawing svg{display:block;width:100%;margin:12px 0}.drawing-foot{border-top:1px solid #7fe3fb30;padding-top:12px}.drawing-foot strong{color:#ffc27a}
    .copy{display:grid;justify-items:start;gap:18px}.profile-details{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:42px}.profile-note{padding:22px;border:1px solid var(--line);border-radius:18px;background:var(--surface)}.profile-note p{margin:10px 0 0;color:var(--muted);line-height:1.9}.profile-projects{grid-column:1/-1;background:var(--surface-2)}.profile-projects small{display:block;color:var(--muted);margin-top:10px;font-size:.78rem}@media(max-width:650px){.profile-details{grid-template-columns:1fr}.profile-projects{grid-column:auto}}.eyebrow{color:var(--accent);font:600 .8rem var(--font-mono);letter-spacing:.13em}
    h2{font:700 clamp(1.9rem,3.5vw,2.8rem)/1.4 var(--font-display);letter-spacing:-.03em}h2 span{color:var(--accent);display:block}
    p{color:var(--muted);line-height:1.95}.copy ul{list-style:none;padding:0;margin:0;display:grid;gap:12px}.copy li{display:flex;gap:10px;align-items:center;font-weight:600}.copy li span{display:grid;place-items:center;width:24px;height:24px;border-radius:50%;background:var(--accent-soft);color:var(--accent)}
    .text-link{color:var(--accent);font-weight:700;text-decoration:none}
    @media(max-width:850px){.about-grid{grid-template-columns:1fr}.drawing{max-width:620px;width:100%;margin:auto}}
  `]
})
export class AboutComponent {
  language$: Observable<'ar' | 'en'> = this.store.select(selectLanguage);
  constructor(private store: Store) {}
}
