import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contacts/addContact',
  (name, number) => {
    return {
      payload: {
        id: nanoid(),
        name: name,
        number: number,
      },
    };
  }
);

export const deleteContact = createAction(
  'contacts/deleteContact',
  contactId => {
    return {
      payload: contactId,
    };
  }
);

export const filterContacts = createAction(
  'contacts/filterContacts',
  searchTerm => {
    return {
      payload: searchTerm,
    };
  }
);
