import { useSelector } from 'react-redux';
import { deleteContact, filterContacts } from 'redux/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { contactsSelector, filterSelector } from 'redux/selectors';

export const ContactsList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const handleContactDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFiltering = e => {
    const currentSearchTerm = e.target.value;
    setSearchTerm(currentSearchTerm);
    dispatch(filterContacts(currentSearchTerm));
  };

  const displayContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
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
