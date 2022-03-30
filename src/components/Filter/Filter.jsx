import { Component } from 'react';
import { nanoid } from 'nanoid';

export class Filter extends Component {
  filterInputId = nanoid();

  handleInputChange = event => {
    const { value } = event.currentTarget;
    const inputData = value;

    this.props.onSubmit(inputData);
  };

  render() {
    return (
      <label htmlFor={this.filterInputId}>
        Find contacts by name
        <input
          id={this.filterInputId}
          type="text"
          name="filter"
          onChange={this.handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    );
  }
}

export default Filter;
