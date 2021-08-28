import contactsActions from "./contacts-actions";
import api from "../services/contacts-api";

const fetchContacts = () => async (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const contacts = await api.fetchContacts();
    dispatch(contactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};

const deleteContact = (id) => async (dispatch) => {
  dispatch(contactsActions.deleteContactRequest());
  try {
    const deleteContact = await api.deleteContact(id);
    
    dispatch(contactsActions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(contactsActions.deleteContactError(error));
  }
};

const saveContact = (name, number) => async (dispatch) => {
  const contact = {
    
    name,
    number,
  };
  dispatch(contactsActions.saveContactRequest(contact));
  try {
    const contactToSave = await api.addContact(contact);
    dispatch(contactsActions.saveContactSuccess(contactToSave.data));
  } catch (error) {
    dispatch(contactsActions.saveContactError(error));
  }
};

export default { fetchContacts, deleteContact, saveContact };