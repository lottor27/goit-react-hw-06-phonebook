import SavedContact from 'components/PhonebookList/PhoneBookList';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/reducers/contactsSlice';
import { selectorContacts, selectorFilter } from 'redux/selectors';
import css from './PhonebookForm.module.css';

const Contacts = () => {
  const contacts = useSelector(selectorContacts);
  const filter = useSelector(selectorFilter);
  const dispatch = useDispatch();

  const handleClick = e => {
    if (e.target.tagName === 'BUTTON') {
      const id = e.target.getAttribute('data-id');
      dispatch(deleteContact(id));
    }
  };

  const filteredContacts = () => {
    if (filter !== '')
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    else if (filter === '') return contacts;
  };

  return contacts.length > 0 ? (
    <ul className={css.list}  onClick={handleClick}>
      {filteredContacts().map(({ id, name, number }) => (
        <SavedContact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  ) : (
    <p className="text-message">The contact list is empty.</p>
  );
};

export default Contacts;
