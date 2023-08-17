import { combineReducers } from 'redux';
import { persistReducerContacts } from './reducers/contactsSlice';
import filterSlice from './reducers/filterSlice';

export const rootReducer = combineReducers({
  contacts: persistReducerContacts,
  filter: filterSlice,
});
