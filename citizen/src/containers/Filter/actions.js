import { CHANGE_FILTERS } from './constants';

export const changeFilters = (payload) => ({
  type: CHANGE_FILTERS,
  payload,
});
