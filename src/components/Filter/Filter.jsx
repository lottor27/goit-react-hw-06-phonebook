
// import css from 'components/SearchContact/searchContact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/reducers/filterSlice';
import { selectorContacts } from 'redux/selectors';

const SearchContact = ({ searchTitle }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);

  const handleSearchInput = e => {
    dispatch(updateFilter(e.target.value.trim()));
  };

  return (
    contacts.length > 0 && (
      <div >
        <h3 >{searchTitle}</h3>
        <input  type="text" onInput={handleSearchInput} />
      </div>
    )
  );
};

export default SearchContact;