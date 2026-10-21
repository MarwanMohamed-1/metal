import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectLanguage } from '../../store/forge.selectors';

@Component({
  selector: 'app-why',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <section class="section night why">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow">{{ (language$ | async) === 'ar' ? 'منهجية العمل' : 'OUR APPROACH' }}</span>
          <h2>{{ (language$ | async) === 'ar' ? 'الجودة تبدأ' : 'Quality starts' }} <span>{{ (language$ | async) === 'ar' ? 'من التفاصيل.' : 'with the details.' }}</span></h2>
          <p>{{ (language$ | async) === 'ar' ? 'نراجع متطلبات المشروع والخامات والأبعاد والتشطيب، مع تنسيق نطاق العمل مع العميل.' : 'We review project requirements, materials, dimensions and finish, while coordinating scope clearly with the customer.' }}</p>
        </div>
        <div class="why-grid">
          <article><span>01</span><div class="why-icon">⌖</div><h3>{{ (language$ | async) === 'ar' ? 'مراجعة المتطلبات' : 'Requirements review' }}</h3><p>{{ (language$ | async) === 'ar' ? 'مراجعة رسومات العميل والمواصفات ونطاق العمل قبل تأكيد الطلب.' : 'Review customer drawings, specifications and scope before order confirmation.' }}</p></article>
          <article><span>02</span><div class="why-icon">◷</div><h3>{{ (language$ | async) === 'ar' ? 'فحص الخامات' : 'Material checks' }}</h3><p>{{ (language$ | async) === 'ar' ? 'التحقق من نوع الخامة والسماكة وفق مواصفات الطلب.' : 'Verify material type and thickness against the order specification.' }}</p></article>
          <article><span>03</span><div class="why-icon">◇</div><h3>{{ (language$ | async) === 'ar' ? 'مراجعة التشطيب' : 'Finish review' }}</h3><p>{{ (language$ | async) === 'ar' ? 'مراجعة الأبعاد وجودة التنفيذ والتشطيب وفق الرسومات والمتطلبات المتفق عليها.' : 'Review dimensions, workmanship and finish against agreed drawings and requirements.' }}</p></article>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .why{background:radial-gradient(700px 400px at 90% 0%,#0a7d9c35,transparent 60%),#06080b;color:#f2f7fa}
    .section-head{max-width:700px;display:grid;gap:14px;margin-bottom:36px}.eyebrow{font:600 .8rem var(--font-mono);letter-spacing:.12em;color:#4fd3f3}
    h2{font:700 clamp(1.9rem,3.5vw,2.8rem)/1.4 var(--font-display)}h2 span{display:block;color:#4fd3f3}.section-head p{color:#9babb8;line-height:1.9}
    .why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#ffffff1a;border:1px solid #ffffff1a;border-radius:22px;overflow:hidden}
    article{position:relative;padding:28px;background:#0a0f14;display:grid;gap:12px;min-height:230px}article>span{position:absolute;top:22px;right:22px;color:#ffffff40;font:700 1.5rem var(--font-display)}
    .why-icon{display:grid;place-items:center;width:48px;height:48px;border-radius:14px;background:#4fd3f318;border:1px solid #4fd3f340;color:#4fd3f3;font-size:1.6rem}
    h3{font:600 1.1rem var(--font-display)}article p{color:#9babb8;font-size:.93rem;line-height:1.8}
    @media(max-width:750px){.why-grid{grid-template-columns:1fr}article{min-height:unset}}
  `]
})
export class WhyComponent {
  language$: Observable<'ar' | 'en'> = this.store.select(selectLanguage);
  constructor(private store: Store) {}
}
