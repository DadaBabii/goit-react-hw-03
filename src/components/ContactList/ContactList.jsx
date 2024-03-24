import Contact from "../Contact/Contact.jsx";

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
