import "./ContactList.css";
import propTypes from "prop-types";
export default function ContactList({ contacts, onDeliteContact }) {
  return (
    <ul className="contactList">
      {contacts.map((contact) => {
        return (
          <li className="contactItem" key={contact.id}>
            <div className="contactBlock">
              <sapn>{contact.name}</sapn>
              <sapn className="nubmer">{contact.number}</sapn>
            </div>

            <button
              className="deleteBotton"
              onClick={() => {
                onDeliteContact(contact.id);
              }}
              type="button"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: propTypes.array,
  onDeliteContact: propTypes.func,
};
