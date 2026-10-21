import { createReducer, on } from '@ngrx/store';
import { clearQuote, selectService, submitQuote, toggleLanguage } from './forge.actions';

export interface QuoteRequest {
  name: string;
  phone: string;
  details: string;
  service: string;
}

export interface ForgeState {
  language: 'ar' | 'en';
  selectedServiceId: number;
  lastQuote: QuoteRequest | null;
}

export const initialForgeState: ForgeState = {
  language: 'ar',
  selectedServiceId: 1,
  lastQuote: null
};

export const forgeReducer = createReducer(
  initialForgeState,
  on(toggleLanguage, (state): ForgeState => ({
    ...state,
    language: state.language === 'ar' ? 'en' : 'ar'
  })),
  on(selectService, (state, { serviceId }): ForgeState => ({
    ...state,
    selectedServiceId: serviceId
  })),
  on(submitQuote, (state, quote): ForgeState => ({
    ...state,
    lastQuote: quote
  })),
  on(clearQuote, (state): ForgeState => ({
    ...state,
    lastQuote: null
  }))
);
