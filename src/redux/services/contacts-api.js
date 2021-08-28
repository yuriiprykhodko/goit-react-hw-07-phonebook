import axios from "axios";

axios.defaults.baseURL = "http://localhost:3004";

async function fetchContacts() {
  const { data } = await axios.get("/contacts");
  return data;
}

function addContact(contact) {
  return axios.post("/contacts", contact);
}

function deleteContact(id) {
  return axios.delete(`/contacts/${id}`);
}

export default { fetchContacts, addContact, deleteContact };