import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { toggleLanguage } from '../../store/forge.actions';
import { selectLanguage } from '../../store/forge.selectors';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <header class="nav">
      <div class="nav-bar">
        <a class="brand" href="#home" aria-label="Hegazy Metal home"><img class="brand-logo" src="assets/hegazy-metal-icon.png" alt="Hegazy Metal" /><span class="brand-name">HEGAZY METAL<small>ENGINEERED METAL SOLUTIONS</small></span></a>
        <nav class="nav-links" [class.open]="menuOpen">
          <a href="#home" (click)="closeMenu()">{{ (language$ | async) === 'ar' ? 'الرئيسية' : 'Home' }}</a>
          <a href="#about" (click)="closeMenu()">{{ (language$ | async) === 'ar' ? 'من نحن' : 'About' }}</a>
          <a href="#services" (click)="closeMenu()">{{ (language$ | async) === 'ar' ? 'خدماتنا' : 'Services' }}</a>
          <a href="#quote" (click)="closeMenu()">{{ (language$ | async) === 'ar' ? 'عرض سعر' : 'Get a quote' }}</a>
          <a href="#faq" (click)="closeMenu()">{{ (language$ | async) === 'ar' ? 'الأسئلة الشائعة' : 'FAQ' }}</a>
          <a href="#contact" (click)="closeMenu()">{{ (language$ | async) === 'ar' ? 'تواصل معنا' : 'Contact' }}</a>
        </nav>
        <div class="nav-actions">
          <button class="lang" type="button" (click)="toggleLang()">{{ (language$ | async) === 'ar' ? 'EN' : 'عربي' }}</button>
          <a class="btn btn-grad btn-sm nav-cta" href="#quote">{{ (language$ | async) === 'ar' ? 'اطلب عرض سعر' : 'Request a quote' }}</a>
          <button class="burger" type="button" (click)="menuOpen = !menuOpen" [attr.aria-expanded]="menuOpen" aria-label="Toggle menu">☰</button>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .nav{position:fixed;top:14px;left:0;right:0;z-index:50;padding:0 20px}
    .nav-bar{max-width:1220px;margin:auto;display:flex;align-items:center;gap:16px;padding:8px 10px;border:1px solid rgba(255,255,255,.14);border-radius:20px;background:rgba(10,15,20,.88);backdrop-filter:blur(16px);box-shadow:0 16px 44px #0002;color:#f2f7fa}
    .brand{display:flex;align-items:center;gap:9px;text-decoration:none;font:700 1rem var(--font-display);letter-spacing:.2em;white-space:nowrap}
    .brand-logo{width:42px;height:42px;object-fit:contain;animation:logo-turn 12s ease-in-out infinite;filter:drop-shadow(0 0 10px #18b6d533)}.brand-name{display:grid;gap:1px;font-size:.88rem;letter-spacing:.12em}.brand-name small{font:500 .48rem var(--font-mono);letter-spacing:.06em;color:#7bc9d8}@keyframes logo-turn{0%,82%,100%{transform:rotateY(0)}90%{transform:rotateY(180deg)}}
    .nav-links{display:flex;align-items:center;justify-content:center;gap:4px;margin:auto}
    .nav-links a{padding:9px 12px;color:#aab8c3;text-decoration:none;border-radius:10px;font-size:.9rem;white-space:nowrap}
    .nav-links a:hover{background:#ffffff12;color:#fff}
    .nav-actions{display:flex;align-items:center;gap:8px}
    .lang,.burger{min-width:42px;height:42px;border:1px solid #ffffff24;border-radius:12px;background:#ffffff0a;color:#fff;cursor:pointer}
    .burger{display:none}
    @media(max-width:980px){.burger{display:block}.nav-links{display:none;position:absolute;top:calc(100% + 8px);left:20px;right:20px;padding:10px;background:#0a0f14;border:1px solid #ffffff24;border-radius:16px;align-items:stretch;flex-direction:column}.nav-links.open{display:flex}.nav-links a{padding:12px}.nav-cta{display:none}}
    @media(max-width:540px){.nav{padding:0 10px}.nav-bar{gap:8px}.brand{font-size:.9rem}.nav-actions{margin-inline-start:auto}}
  `]
})
export class NavbarComponent {
  language$: Observable<'ar' | 'en'> = this.store.select(selectLanguage);
  menuOpen = false;
  constructor(private store: Store) {}
  toggleLang(): void { this.store.dispatch(toggleLanguage()); }
  closeMenu(): void { this.menuOpen = false; }
}
