import { Component } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectLanguage } from '../../store/forge.selectors';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf],
  template: `
    <section class="section" id="faq">
      <div class="wrap faq-grid">
        <div class="faq-intro">
          <span class="eyebrow">{{ (language$ | async) === 'ar' ? 'الأسئلة الشائعة' : 'FAQ' }}</span>
          <h2>{{ (language$ | async) === 'ar' ? 'إجابات واضحة.' : 'Straight answers.' }} <span>{{ (language$ | async) === 'ar' ? 'قبل أن نبدأ.' : 'Before we begin.' }}</span></h2>
          <p>{{ (language$ | async) === 'ar' ? 'إليك بعض المعلومات التي تساعدك على بدء مشروعك.' : 'A few details to help you get your project moving.' }}</p>
          <a class="btn btn-grad" href="#quote">{{ (language$ | async) === 'ar' ? 'اسأل عن مشروعك' : 'Ask about your project' }} ↗</a>
        </div>
        <div class="accordion">
          <article class="faq-item" *ngFor="let item of questions; let i = index" [class.open]="openIndex === i">
            <button type="button" (click)="toggle(i)" [attr.aria-expanded]="openIndex === i">
              <span class="num">0{{ i + 1 }}</span><strong>{{ (language$ | async) === 'ar' ? item.qAr : item.qEn }}</strong><span class="plus">{{ openIndex === i ? '−' : '+' }}</span>
            </button>
            <div class="answer" *ngIf="openIndex === i"><p>{{ (language$ | async) === 'ar' ? item.aAr : item.aEn }}</p></div>
          </article>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .faq-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:clamp(30px,6vw,80px);align-items:start}
    .faq-intro{display:grid;justify-items:start;gap:17px}.eyebrow{font:600 .8rem var(--font-mono);letter-spacing:.12em;color:var(--accent)}
    h2{font:700 clamp(1.9rem,3.5vw,2.8rem)/1.4 var(--font-display)}h2 span{display:block;color:var(--accent)}.faq-intro p{color:var(--muted);line-height:1.9}
    .accordion{display:grid;gap:10px}.faq-item{border:1px solid var(--line);border-radius:16px;background:var(--surface);overflow:hidden;transition:border-color .2s,box-shadow .2s}.faq-item.open{border-color:#0a7d9c55;box-shadow:var(--shadow)}
    .faq-item button{display:grid;grid-template-columns:36px 1fr 30px;align-items:center;gap:12px;width:100%;padding:16px;border:0;background:transparent;color:var(--ink);text-align:start;cursor:pointer}
    .num{display:grid;place-items:center;width:34px;height:34px;border-radius:10px;background:var(--accent-soft);color:var(--accent);font:500 .75rem var(--font-mono)}.faq-item strong{font:600 .98rem var(--font-display)}
    .plus{display:grid;place-items:center;width:28px;height:28px;border:1px solid var(--line);border-radius:50%;color:var(--accent);font-size:1.2rem}
    .answer{padding:0 20px 18px 64px;color:var(--muted);line-height:1.9}
    @media(max-width:850px){.faq-grid{grid-template-columns:1fr}}
  `]
})
export class FaqComponent {
  language$: Observable<'ar' | 'en'> = this.store.select(selectLanguage);
  openIndex = 0;
  questions = [
    { qAr: 'ما الخامات التي تعملون بها؟', qEn: 'Which materials do you work with?', aAr: 'نعمل مع الصلب والاستانلس ستيل والألومنيوم، حسب متطلبات المشروع والرسومات الفنية.', aEn: 'We work with steel, stainless steel and aluminium, depending on project requirements and technical drawings.' },
    { qAr: 'هل يمكن التصنيع طبقاً لرسوماتنا؟', qEn: 'Can you fabricate from our drawings?', aAr: 'نعم، يمكن لفريقنا مراجعة الرسومات التنفيذية وتنسيق متطلبات التصنيع قبل بدء الإنتاج.', aEn: 'Yes. Our team can review shop drawings and coordinate fabrication requirements before production.' },
    { qAr: 'هل تقدمون التركيب في الموقع؟', qEn: 'Do you provide on-site installation?', aAr: 'يمكن تنسيق أعمال التركيب ضمن نطاق المشروع بعد مراجعة الموقع والمتطلبات.', aEn: 'Installation can be coordinated as part of the project scope after reviewing the site and requirements.' },
    { qAr: 'كيف أطلب عرض سعر؟', qEn: 'How do I request a quote?', aAr: 'استخدم نموذج طلب عرض السعر وأضف تفاصيل الخامات والمقاسات والكميات المطلوبة.', aEn: 'Use the quote form and include the materials, dimensions and quantities you need.' }
  ];
  constructor(private store: Store) {}
  toggle(index: number): void { this.openIndex = this.openIndex === index ? -1 : index; }
}
