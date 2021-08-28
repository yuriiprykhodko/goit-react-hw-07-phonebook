import React from "react";

import Container from "./components/Container";
import Form from "./components/Form";
import ContactsList from "./components/ContactsList";
import ContactsListItem from "./components/ContactsListItem";
import Filter from "./components/Filter";

function App() {
  return (
    <>
      <Container title="Phonebook">
        <Form />
      </Container>
      <Container title="Contacts">
        <Filter />
        <ContactsList>
          <ContactsListItem />
        </ContactsList>
      </Container>
    </>
  );
}
export default App;
