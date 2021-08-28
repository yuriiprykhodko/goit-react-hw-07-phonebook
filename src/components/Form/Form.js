import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Form.css";
import { getItems } from "redux/contacts/contacts-selection";
import contactsOperations from "redux/contacts/contactsOperations";

const useForm = (key) => {
  const [state, setState] = useState("");

  return [state, setState];
};

const Form = () => {
  const [name, setName] = useForm("name");
  const [number, setNumber] = useForm("number");
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(contactsOperations.saveContact(name, number));
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          Name
          <input
            className="input"
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
          />
        </label>
        <label className="label">
          Number
          <input
            className="input"
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

export default Form;
