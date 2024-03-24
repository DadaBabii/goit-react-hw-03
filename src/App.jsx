import { useState } from "react";
// import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import contacts from "./Contacts.json";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchValue = (evt) => {
    setSearchValue(evt.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  console.log(filteredContacts);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={searchValue} onChange={handleSearchValue} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;
