import Contact from "./Contact";
import { contactList } from "./Contacts";

const ContactList = () => {
  return (
    <div className="contact-list">
      {contactList.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};
export default ContactList;
