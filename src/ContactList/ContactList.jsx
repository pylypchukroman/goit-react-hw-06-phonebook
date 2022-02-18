import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import style from './ContactList.module.css';
import { deleteContact } from '../redux/contacts/contactsActions';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={style.Item}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={e => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const getCurrentContacts = (allContacts, filter) => {
  const normalizeFilterRequest = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilterRequest)
  );
};

const mapStateToProps = ({ contacts, filter }) => ({
  contacts: getCurrentContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
