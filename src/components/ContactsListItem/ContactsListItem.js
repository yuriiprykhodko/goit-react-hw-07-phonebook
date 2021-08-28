import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./ContactsListItem.css";

import { contactsSelection, contactsOperations } from "redux/contacts";
const ContactsListItem = () => {
  const visibleContacts = useSelector(contactsSelection.getVisibleContacts);

  const dispatch = useDispatch();

  

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const onDeleteButtonClick = (id) =>
    dispatch(contactsOperations.deleteContact(id));

  return (
   
    visibleContacts.map(({ id, name, number }) => (
      <li className="listItem" key={id}>
        {name}:{number}
        <button
          className="button"
          onClick={() => onDeleteButtonClick(id)}
        >
          Delete
        </button>
      </li>
    ))
  );
};

export default ContactsListItem;