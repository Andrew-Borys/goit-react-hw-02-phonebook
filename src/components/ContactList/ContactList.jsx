import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button type="button" onClick={() => onDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}

      {/* {filter === ''
        ? contacts.map(contact => (
            <li key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <button type="button" onClick={() => onDeleteContact(contact.id)}>
                Delete
              </button>
            </li>
          ))
        : filteredContacts.map(contact => (
            <li key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <button type="button" onClick={() => onDeleteContact(contact.id)}>
                Delete
              </button>
            </li>
          ))} */}
    </ul>
  );
};

ContactList.propTypes = {
  // filter: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
