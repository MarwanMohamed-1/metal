import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectLanguage } from '../../store/forge.selectors';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <footer>
      <div class="wrap">
        <div class="footer-main">
          <a class="brand" href="#home"><img src="assets/hegazy-metal-logo.png" alt="Hegazy Metal" /> HEGAZY METAL</a>
          <p>{{ (language$ | async) === 'ar' ? 'هندسة المعادن. دقة في التصنيع. ثقة في التنفيذ.' : 'Metal engineering. Fabrication precision. Delivery you can trust.' }}</p>
          <nav><a href="#about">{{ (language$ | async) === 'ar' ? 'من نحن' : 'About' }}</a><a href="#services">{{ (language$ | async) === 'ar' ? 'خدماتنا' : 'Services' }}</a><a href="#quote">{{ (language$ | async) === 'ar' ? 'عرض سعر' : 'Get a quote' }}</a><a href="#contact">{{ (language$ | async) === 'ar' ? 'تواصل معنا' : 'Contact' }}</a></nav>
        </div>
        <div class="footer-bottom"><span>© {{ year }} HEGAZY METAL</span><a href="#home">{{ (language$ | async) === 'ar' ? 'العودة للأعلى ↑' : 'Back to top ↑' }}</a></div>
      </div>
    </footer>
  `,
  styles: [`
    footer{padding:48px 0 22px;background:#06080b;color:#f2f7fa;border-top:1px solid #ffffff16}
    .footer-main{display:grid;grid-template-columns:1fr 1.5fr 1fr;align-items:center;gap:24px}.brand{display:flex;align-items:center;gap:10px;text-decoration:none;font:700 1rem var(--font-display);letter-spacing:.2em}.brand img{width:38px;height:38px;object-fit:contain;animation:footer-logo-turn 14s ease-in-out infinite}@keyframes footer-logo-turn{0%,84%,100%{transform:rotateY(0)}92%{transform:rotateY(180deg)}}
    p{color:#9babb8;font-size:.9rem}.footer-main nav{display:flex;flex-wrap:wrap;gap:16px}.footer-main nav a,.footer-bottom a{color:#9babb8;text-decoration:none;font-size:.85rem}.footer-main nav a:hover,.footer-bottom a:hover{color:#4fd3f3}
    .footer-bottom{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;border-top:1px solid #ffffff16;margin-top:30px;padding-top:18px;color:#71818e;font:10px var(--font-mono);letter-spacing:.08em}
    @media(max-width:800px){.footer-main{grid-template-columns:1fr;align-items:start}}
  `]
})
export class FooterComponent {
  language$: Observable<'ar' | 'en'> = this.store.select(selectLanguage);
  year = new Date().getFullYear();
  constructor(private store: Store) {}
}
