import PropTypes from 'prop-types';

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul>
      {filter === ''
        ? contacts.map(contact => (
            <li key={contact.name}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <button
                type="button"
                onClick={() => onDeleteContact(contact.name)}
              >
                Delete
              </button>
            </li>
          ))
        : filteredContacts.map(contact => (
            <li key={contact.name}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <button
                type="button"
                onClick={() => onDeleteContact(contact.name)}
              >
                Delete
              </button>
            </li>
          ))}
    </ul>
  );
};

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
