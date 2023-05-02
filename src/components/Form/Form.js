import { useDispatch, useSelector } from 'react-redux';
import css from './Form.module.css';
import { addContact } from 'redux/actions';
import { useState } from 'react';
import { contactsSelector } from 'redux/selectors';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState();

  const contacts = useSelector(contactsSelector);
  const dispatch = useDispatch();

  const handleContactCreator = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      alert(`Contact ${name} is in your contact list`);
    } else {
      dispatch(addContact(name, number));
    }
  };

  return (
    <form onSubmit={handleContactCreator}>
      <h1>Phonebook</h1>
      <label className={css.label}>
        <h3 className={css.labeltitle}>Name</h3>
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <h3 className={css.labeltitle}>Number</h3>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </label>
    </form>
  );
};
