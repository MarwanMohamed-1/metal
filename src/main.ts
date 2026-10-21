import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { AppComponent } from './app/app.component';
import { forgeReducer } from './app/store/forge.reducer';

bootstrapApplication(AppComponent, {
  providers: [provideStore({ forge: forgeReducer })]
}).catch((error) => console.error(error));
