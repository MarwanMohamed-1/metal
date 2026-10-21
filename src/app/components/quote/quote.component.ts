import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FORGE_SERVICES } from '../../data/services';
import { submitQuote, clearQuote } from '../../store/forge.actions';
import { selectLanguage, selectLastQuote, selectSelectedServiceId } from '../../store/forge.selectors';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, NgFor, NgIf],
  template: `
    <section class="section quote-section" id="quote">
      <div class="wrap quote-grid">
        <div class="quote-copy">
          <span class="eyebrow">{{ (language$ | async) === 'ar' ? 'ابدأ مشروعك' : 'START YOUR PROJECT' }}</span>
          <h2>{{ (language$ | async) === 'ar' ? 'مشروعك يبدأ' : 'Your next project' }} <span>{{ (language$ | async) === 'ar' ? 'بعرض سعر واضح' : 'starts with a clear quote' }}</span></h2>
          <p>{{ (language$ | async) === 'ar' ? 'شاركنا تفاصيل المشروع وسيتوفر لفريقنا ما يحتاجه لتجهيز الخطوة التالية. هذا نموذج تجريبي ولا يرسل البيانات إلى خادم.' : 'Share a few project details so the team can prepare the next step. This demo form stores the request in NgRx only; it does not send data to a server.' }}</p>
          <div class="quote-note"><span>01</span><div><strong>{{ (language$ | async) === 'ar' ? 'شارك التفاصيل' : 'Share the details' }}</strong><small>{{ (language$ | async) === 'ar' ? 'الخامات، المقاسات، والكمية' : 'Materials, dimensions and quantity' }}</small></div></div>
          <div class="quote-note"><span>02</span><div><strong>{{ (language$ | async) === 'ar' ? 'نراجع المتطلبات' : 'We review requirements' }}</strong><small>{{ (language$ | async) === 'ar' ? 'نحدد نطاق العمل المناسب' : 'Define a suitable scope of work' }}</small></div></div>
          <div class="quote-note"><span>03</span><div><strong>{{ (language$ | async) === 'ar' ? 'نخطط للتنفيذ' : 'Plan the execution' }}</strong><small>{{ (language$ | async) === 'ar' ? 'نرتب الخطوات التالية' : 'Agree on the next steps' }}</small></div></div>
        </div>
        <div class="form-card">
          <ng-container *ngIf="!(lastQuote$ | async); else success">
            <h3>{{ (language$ | async) === 'ar' ? 'اطلب عرض سعر' : 'Request a quote' }}</h3>
            <p class="form-intro">{{ (language$ | async) === 'ar' ? 'الحقول المميزة مطلوبة.' : 'Fields marked required are mandatory.' }}</p>
            <form [formGroup]="form" (ngSubmit)="submit()">
              <label>{{ (language$ | async) === 'ar' ? 'الاسم' : 'Name' }}<input formControlName="name" [placeholder]="(language$ | async) === 'ar' ? 'اسمك بالكامل' : 'Your full name'"></label>
              <label>{{ (language$ | async) === 'ar' ? 'رقم الهاتف' : 'Phone number' }}<input formControlName="phone" type="tel" [placeholder]="(language$ | async) === 'ar' ? '+20...' : '+20...'"></label>
              <label>{{ (language$ | async) === 'ar' ? 'الخدمة المطلوبة' : 'Service required' }}
                <select formControlName="serviceId">
                  <option *ngFor="let s of services" [value]="s.id">{{ (language$ | async) === 'ar' ? s.titleAr : s.titleEn }}</option>
                </select>
              </label>
              <label>{{ (language$ | async) === 'ar' ? 'تفاصيل المشروع' : 'Project details' }}<textarea formControlName="details" rows="4" [placeholder]="(language$ | async) === 'ar' ? 'الخامات، المقاسات، الكمية...' : 'Materials, dimensions, quantities...'"></textarea></label>
              <p class="error" *ngIf="attempted && form.invalid">{{ (language$ | async) === 'ar' ? 'راجع الحقول المطلوبة وتأكد من صحة البيانات.' : 'Please complete the required fields.' }}</p>
              <button class="btn btn-grad submit" type="submit">{{ (language$ | async) === 'ar' ? 'تجهيز الطلب' : 'Prepare request' }} ↗</button>
              <small class="privacy">{{ (language$ | async) === 'ar' ? 'عرض تجريبي: لا يتم إرسال أو حفظ البيانات خارج التطبيق.' : 'Demo only: data is not sent or saved outside this app.' }}</small>
            </form>
          </ng-container>
          <ng-template #success>
            <div class="success">
              <div class="success-icon">✓</div>
              <span class="eyebrow">{{ (language$ | async) === 'ar' ? 'تم تجهيز الطلب' : 'REQUEST PREPARED' }}</span>
              <h3>{{ (language$ | async) === 'ar' ? 'شكراً لاهتمامك' : 'Thank you for your interest' }}</h3>
              <p>{{ (language$ | async) === 'ar' ? 'تم حفظ بيانات الطلب في حالة NgRx الحالية فقط.' : 'Your request is stored in the current NgRx state only.' }}</p>
              <button class="btn btn-grad" type="button" (click)="reset()">{{ (language$ | async) === 'ar' ? 'طلب جديد' : 'Create another request' }}</button>
            </div>
          </ng-template>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .quote-section{background:linear-gradient(180deg,var(--bg),var(--surface-2))}
    .quote-grid{display:grid;grid-template-columns:1fr .9fr;gap:clamp(30px,6vw,80px);align-items:start}
    .quote-copy{display:grid;gap:18px}.eyebrow{font:600 .8rem var(--font-mono);letter-spacing:.12em;color:var(--accent)}
    h2{font:700 clamp(1.9rem,3.5vw,2.8rem)/1.4 var(--font-display)}h2 span{display:block;color:var(--accent)}.quote-copy>p{color:var(--muted);line-height:1.9}
    .quote-note{display:flex;align-items:center;gap:14px;padding:14px 0;border-bottom:1px solid var(--line)}.quote-note>span{display:grid;place-items:center;width:42px;height:42px;border-radius:12px;background:var(--accent-soft);color:var(--accent);font:500 .8rem var(--font-mono)}
    .quote-note strong,.quote-note small{display:block}.quote-note strong{font-family:var(--font-display)}.quote-note small{color:var(--muted);margin-top:3px}
    .form-card{padding:clamp(22px,4vw,34px);border:1px solid var(--line);border-radius:24px;background:var(--surface);box-shadow:var(--shadow)}
    .form-card h3{font:700 1.45rem var(--font-display)}.form-intro{color:var(--muted);font-size:.88rem;margin-top:7px}
    form{display:grid;gap:15px;margin-top:24px}label{display:grid;gap:7px;font-size:.88rem;font-weight:600}
    input,select,textarea{width:100%;padding:12px 13px;border:1px solid var(--line);border-radius:12px;background:var(--bg);color:var(--ink);font:inherit;outline:none}
    input:focus,select:focus,textarea:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-soft)}textarea{resize:vertical}
    .submit{width:100%;border:0;cursor:pointer}.privacy{color:var(--muted);font-size:.75rem;text-align:center}.error{color:#b93226;font-size:.85rem}
    .success{min-height:420px;display:grid;align-content:center;justify-items:start;gap:15px}.success-icon{display:grid;place-items:center;width:54px;height:54px;border-radius:17px;background:var(--accent-soft);color:var(--accent);font-size:1.6rem}
    .success p{color:var(--muted);line-height:1.8}
    @media(max-width:850px){.quote-grid{grid-template-columns:1fr}}
  `]
})
export class QuoteComponent {
  services = FORGE_SERVICES;
  language$: Observable<'ar' | 'en'> = this.store.select(selectLanguage);
  lastQuote$ = this.store.select(selectLastQuote);
  selectedServiceId$ = this.store.select(selectSelectedServiceId);
  attempted = false;
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.minLength(8)]],
    serviceId: [1, Validators.required],
    details: ['', [Validators.required, Validators.minLength(8)]]
  });
  constructor(private fb: FormBuilder, private store: Store) {
    this.selectedServiceId$.subscribe(id => this.form.patchValue({ serviceId: id }, { emitEvent: false }));
  }
  submit(): void {
    this.attempted = true;
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const value = this.form.getRawValue();
    const service = this.services.find(s => s.id === Number(value.serviceId));
    this.store.dispatch(submitQuote({
      name: value.name ?? '',
      phone: value.phone ?? '',
      details: value.details ?? '',
      service: service?.titleEn ?? 'Unknown service'
    }));
  }
  reset(): void { this.store.dispatch(clearQuote()); this.attempted = false; this.form.reset({ name: '', phone: '', serviceId: 1, details: '' }); }
}
