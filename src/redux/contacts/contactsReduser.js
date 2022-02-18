import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  changeFilter,
} from '../../redux/contacts/contactsActions.js';

const contactsFotChecking = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  { id: 'id-5', name: 'rosie simpson', number: '459-12-56' },
  { id: 'id-6', name: 'hermione kline', number: '443-89-12' },
  { id: 'id-7', name: 'eden clements', number: '645-17-79' },
  { id: 'id-8', name: 'annie copeland', number: '227-91-26' },
];

const contacts = createReducer(contactsFotChecking, {
  [addContact]: (state, { payload }) => [payload, ...state],
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
