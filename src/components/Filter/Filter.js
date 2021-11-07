import propTypes from "prop-types";
export default function Filter({ value, onChange }) {
  return (
    <label>
      Find contacts by name
      <input
        onChange={onChange}
        value={value}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
}
Filter.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};
