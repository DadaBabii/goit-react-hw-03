const Contact = (contact) => {
  return (
    <li>
      <p> name: {contact.name}</p>
      <p> tel:{contact.number} </p>
      <button type="button">Delete</button>
    </li>
  );
};

export default Contact;
