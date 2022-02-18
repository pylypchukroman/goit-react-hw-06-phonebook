import style from './ContactForm.module.css';
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { addContact } from '../redux/contacts/contactsActions';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from 'react-redux';

const ContactForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    items.some(contact => name.toLowerCase() === contact.name.toLowerCase())
      ? Notify.failure(`${name} is already in contacts.`)
      : dispatch(addContact(name, number));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={style.Form}>
      <label className={style.Label}>
        <span>
          <b>Name</b>
        </span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
        <span>
          <b>Number</b>
        </span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

// const mapStateToProps = state => ({
//   currentContacts: state.contacts,
// });

// const mapDispatchToProps = dispatch => ({
//   onSubmit: (name, number) => dispatch(addContact(name, number)),
// });

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   currentContacts: PropTypes.array.isRequired,
// };

export default ContactForm;
