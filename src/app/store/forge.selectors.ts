import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ForgeState } from './forge.reducer';

export const selectForgeState = createFeatureSelector<ForgeState>('forge');
export const selectLanguage = createSelector(selectForgeState, (state) => state.language);
export const selectSelectedServiceId = createSelector(selectForgeState, (state) => state.selectedServiceId);
export const selectLastQuote = createSelector(selectForgeState, (state) => state.lastQuote);
