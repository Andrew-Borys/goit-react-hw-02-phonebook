import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Will Smith', number: '127-19-32' },
      { id: 'id-6', name: 'Koza Dereza', number: '345-76-16' },
    ],
    filter: '',
  };

  contactId = () => nanoid();

  handleSubmitFormData = data => {
    console.log(data);

    if (this.state.contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: this.contactId(),
            name: data.name,
            number: data.number,
          },
        ],
      };
    });
  };

  handleFilterData = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const fiteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
    console.log(filter);
    console.log(fiteredContacts);

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmitFormData} />
        <h2>Contacts</h2>
        <Filter onInputEntry={this.handleFilterData} />
        <ContactList
          contacts={fiteredContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
