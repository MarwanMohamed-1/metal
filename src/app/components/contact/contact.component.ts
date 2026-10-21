import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectLanguage } from '../../store/forge.selectors';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <section class="section contact-section" id="contact">
      <div class="wrap contact-card">
        <div class="contact-copy">
          <span class="eyebrow">{{ (language$ | async) === 'ar' ? 'تواصل معنا' : 'CONTACT HEGAZY METAL' }}</span>
          <h2>{{ (language$ | async) === 'ar' ? 'لنبنِ شيئاً' : 'Let’s build' }} <span>{{ (language$ | async) === 'ar' ? 'يدوم.' : 'something that lasts.' }}</span></h2>
          <p>{{ (language$ | async) === 'ar' ? 'أخبرنا عن مشروعك، وسنساعدك في تحديد الخطوة التالية.' : 'Tell us about your project and we’ll help you identify the next step.' }}</p>
          <a class="btn btn-grad" href="#quote">{{ (language$ | async) === 'ar' ? 'ابدأ بطلب عرض سعر' : 'Start a quote request' }} ↗</a>
        </div>
        <div class="contact-details">
          <div class="contact-row"><span class="contact-icon">✉</span><div><small>{{ (language$ | async) === 'ar' ? 'البريد الإلكتروني' : 'EMAIL' }}</small><strong>sales&#64;hegazymetal.com</strong></div></div>
          <div class="contact-row"><span class="contact-icon">⌖</span><div><small>{{ (language$ | async) === 'ar' ? 'الموقع' : 'LOCATION' }}</small><strong>{{ (language$ | async) === 'ar' ? 'المنطقة الصناعية، أبو رواش، مصر' : 'Abu Rowash Industrial Zone, Egypt' }}</strong></div></div>
          <div class="contact-row"><span class="contact-icon">☎</span><div><small>{{ (language$ | async) === 'ar' ? 'الهاتف' : 'TELEPHONE' }}</small><strong><a href="tel:01010007369">01010007369</a></strong></div></div>
          <div class="contact-row"><span class="contact-icon">✉</span><div><small>{{ (language$ | async) === 'ar' ? 'البريد الإلكتروني الإضافي' : 'EMAIL' }}</small><strong><a href="mailto:Info@hegazymetal.com">Info&#64;hegazymetal.com</a></strong></div></div>
          <div class="contact-row"><span class="contact-icon">⌖</span><div><small>{{ (language$ | async) === 'ar' ? 'المخازن' : 'WAREHOUSES' }}</small><strong>{{ (language$ | async) === 'ar' ? 'المنطقة الصناعية، أبو رواش — مقابل توكيل نيسان' : 'Industrial Zone, Abu Rowash — opposite Nissan dealership' }}</strong></div></div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section{padding-top:35px}.contact-card{display:grid;grid-template-columns:1fr .8fr;gap:50px;padding:clamp(25px,5vw,60px);border-radius:28px;background:radial-gradient(500px 300px at 100% 0%,#4fd3f31a,transparent 60%),var(--surface);border:1px solid var(--line);box-shadow:var(--shadow)}
    .contact-copy{display:grid;justify-items:start;align-content:center;gap:18px}.eyebrow{font:600 .8rem var(--font-mono);letter-spacing:.12em;color:var(--accent)}
    h2{font:700 clamp(2rem,4vw,3rem)/1.4 var(--font-display)}h2 span{display:block;color:var(--accent)}.contact-copy p{color:var(--muted);line-height:1.9}
    .contact-details{display:grid;align-content:center;gap:8px}.contact-row{display:flex;align-items:center;gap:14px;padding:16px 0;border-bottom:1px solid var(--line);min-width:0}.contact-icon{display:grid;place-items:center;width:44px;height:44px;flex:none;border-radius:13px;background:var(--accent-soft);color:var(--accent);font-size:1.3rem}
    .contact-row small,.contact-row strong{display:block}.contact-row small{color:var(--muted);font:10px var(--font-mono);letter-spacing:.1em;margin-bottom:4px}.contact-row strong{font-size:.93rem;overflow-wrap:anywhere}.contact-row strong a{text-decoration:none}.contact-row strong a:hover{color:var(--accent)}
    .demo-note{color:var(--muted);font-size:.75rem;line-height:1.7;margin-top:8px}
    @media(max-width:800px){.contact-card{grid-template-columns:1fr;gap:28px}}
  `]
})
export class ContactComponent {
  language$: Observable<'ar' | 'en'> = this.store.select(selectLanguage);
  constructor(private store: Store) {}
}
