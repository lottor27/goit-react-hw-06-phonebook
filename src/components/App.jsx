import React from 'react';
import Contacts from './Phonebook/PhonebookForm';
import SearchContact from './Filter/Filter';
import AddContactForm from './addContact/addContact';

export const App = () => {
  return (
    <div>
      
      <h2>Phonebook</h2>
      <AddContactForm />
      <h2>Contacts</h2>
      <SearchContact/>
      <Contacts />
    </div>
  );
};
