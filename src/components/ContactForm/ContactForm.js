import { Component } from "react";
import propTypes, { number } from "prop-types";
import "./ContactForm.css";
export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.addContact(name, number);
    this.setState({
      name: "",
      number: "",
    });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form className="contactForm" onSubmit={this.handleSubmit}>
        <label className="form__label">
          Name
          <input
            placeholder="Введите имя"
            className="form__input"
            onChange={this.handleChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <br />
        <label className="form__label">
          Number
          <input
            placeholder="Введите номер"
            className="form__input"
            onChange={this.handleChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <br />
        <button className="form__button" type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  addContact: propTypes.func,
};
