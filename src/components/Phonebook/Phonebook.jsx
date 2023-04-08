import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledButton,
} from './Phonebook.styled';
import { Component } from 'react';
import { nanoid } from 'nanoid';

class PhonebookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleInputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledLabel htmlFor={this.nameInputId}>Name</StyledLabel>
          <StyledInput
            name="name"
            id={this.nameInputId}
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <StyledLabel htmlFor={this.numberInputId}>Number</StyledLabel>
          <StyledInput
            name="number"
            id={this.numberInputId}
            type="tel"
            value={this.state.number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <StyledButton type="submit">Add contact</StyledButton>
        </StyledForm>
      </>
    );
  }
}

export default PhonebookForm;
