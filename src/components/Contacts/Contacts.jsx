import React from 'react';
import { ContactsElement, DeleteButton } from './Contacts.styled';

const Contacts = ({ contacts, onDeleteContact }) => (
  <>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactsElement key={id}>
          <div>
            <p>{name}:</p>
            <p>{number}</p>
          </div>
          <DeleteButton onClick={() => onDeleteContact(id)}>
            Delete contact
          </DeleteButton>
        </ContactsElement>
      ))}
    </ul>
  </>
);

export default Contacts;
