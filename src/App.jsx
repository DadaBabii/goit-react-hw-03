import { useEffect, useState } from "react";
// import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import beginContacts from "./Contacts.json";
import { nanoid } from "nanoid";

function App() {
  const [contact, setContact] = useState(() => {
    const lsContact = localStorage.getItem("addcontacts");
    if (!lsContact) return beginContacts;
    const parseContact = JSON.parse(lsContact);
    return parseContact;
  });
  const [searchValue, setSearchValue] = useState("");
  const handleSearchValue = (evt) => {
    setSearchValue(evt.target.value);
  };

  useEffect(() => {
    localStorage.setItem("addcontacts", JSON.stringify(contact));
  }, [contact]);

  const onAddContact = (formData) => {
    const newContact = { ...formData, id: nanoid() };

    setContact((prevContacts) => [...prevContacts, newContact]);
  };
  const filteredContacts = contact.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const onDeleteContact = (contactId) => {
    setContact((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  console.log(filteredContacts);
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox value={searchValue} onChange={handleSearchValue} />
      <ContactList contacts={filteredContacts} onDelete={onDeleteContact} />
    </div>
  );
}

export default App;
