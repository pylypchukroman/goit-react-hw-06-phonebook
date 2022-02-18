import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contacts/Add', (name, number) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

export const deleteContact = createAction('contacts/Delete');
// export const changeFilter = createAction('contacts/Filter') ;

export const changeFilter = createAction('contacts/filter', e => {
  return {
    payload: e.target.value,
  };
});
