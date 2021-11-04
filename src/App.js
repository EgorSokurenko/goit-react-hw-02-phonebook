import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter/";
import ContactList from "./components/ContactList/";
const shortid = require("shortid");

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  onFilter = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };
  addContact = (name, number) => {
    if (this.state.contacts.filter((contact) => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState((prevState) => ({
      contacts: [contact, ...this.state.contacts],
    }));
  };

  changeFilter = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };
  render() {
    const visibleContacts = this.changeFilter();
    const { filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.onFilter} />
        <ContactList contacts={visibleContacts} />
      </div>
    );
  }
}

export default App;
