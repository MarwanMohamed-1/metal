import { createAction, props } from '@ngrx/store';

export const toggleLanguage = createAction('[Forge] Toggle Language');
export const selectService = createAction(
  '[Forge] Select Service',
  props<{ serviceId: number }>()
);
export const submitQuote = createAction(
  '[Forge] Submit Quote',
  props<{ name: string; phone: string; details: string; service: string }>()
);
export const clearQuote = createAction('[Forge] Clear Quote');
