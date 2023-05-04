import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getContacts } from 'redux/selectors';

export const ContactsList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleContactDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFiltering = e => {
    setSearchTerm(e.target.value);
  };

  const displayContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <h1>Contacts </h1>
      <p>Find contacts name</p>
      <input value={searchTerm} onChange={handleFiltering} />
      {displayContacts.map(contact => {
        return (
          <li name="contact" key={contact.id}>
            {contact.name} : {contact.number}
            <button onClick={() => handleContactDelete(contact.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};
