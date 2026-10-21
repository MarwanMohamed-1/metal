import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLanguage } from './store/forge.selectors';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { WhyComponent } from './components/why/why.component';
import { QuoteComponent } from './components/quote/quote.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent, HeroComponent, AboutComponent, ServicesComponent,
    WhyComponent, QuoteComponent, FaqComponent, ContactComponent, FooterComponent
  ],
  template: `
    <div class="site" [attr.dir]="direction" [attr.lang]="language">
      <app-navbar />
      <main>
        <app-hero />
        <app-about />
        <app-services />
        <app-why />
        <app-quote />
        <app-faq />
        <app-contact />
      </main>
      <app-footer />
    </div>
  `
})
export class AppComponent {
  // Direction follows the NgRx language state; updated by the store subscription.
  language: 'ar' | 'en' = 'ar';
  direction: 'rtl' | 'ltr' = 'rtl';
  constructor(private store: Store) {
    this.store.select(selectLanguage).subscribe((language) => {
      this.language = language;
      this.direction = language === 'ar' ? 'rtl' : 'ltr';
    });
  }
}
