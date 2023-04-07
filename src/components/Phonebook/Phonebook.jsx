import { Formik, ErrorMessage } from 'formik';
import { StyledForm, StyledInput } from './Phonebook.styled';
import * as yup from 'yup';
import { Component } from 'react';
import { nanoid } from 'nanoid';

// const schema = yup.object().shape({
//     name: yup.string().min(2).max(30).required(),
//     number: yup.number().required(),
// })

const initialValues = {
  name: '',
  number: '',
};

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
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name
            <input
              name="name"
              id={this.nameInputId}
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor={this.numberInputId}>
            Number
            <input
              name="number"
              id={this.numberInputId}
              type="tel"
              value={this.state.number}
              onChange={this.handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>

      // <>
      //     <h2>Phonebook</h2>
      //     <Formik
      //         initialValues={initialValues}
      //         validationSchema={schema}
      //         onSubmit={handleSubmit}>
      //         <StyledForm autoComplete="off">
      //             <label htmlFor="name">Name</label>
      //             <StyledInput type="text" name="name"
      //                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      //                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" />
      //             <ErrorMessage name="name" component="div"/>
      //             <label htmlFor="number">Number</label>
      //             <StyledInput type="tel" name="number" />
      //             <ErrorMessage name="number" component="div"/>
      //             <button type="submit">Add contact</button>
      //         </StyledForm>
      //         </Formik>
      // </>
    );
  }
}

export default PhonebookForm;
