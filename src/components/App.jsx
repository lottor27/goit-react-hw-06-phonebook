import React from 'react';
import Head from './Title/head';
import Section from './Title/section-title';
import Contacts from './Contacts/contacts';
import SearchContact from './SearchContact/SearchContact';
import AddContactForm from './Add-contact/add-contact';

export const App = () => {
  return (
    <div className="container">
      <Head headTitle="Phonebook" />
      <AddContactForm />
      <Section title="Contacts">
        <SearchContact searchTitle="Find contacts by name" />
        <Contacts />
      </Section>
    </div>
  );
};
