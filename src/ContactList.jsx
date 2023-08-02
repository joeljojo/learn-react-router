import Contact from "./Contact";
import { filterContactsBySearchQuery } from "./Utils";

const ContactList = ({ query }) => {
  const filteredContactList = filterContactsBySearchQuery(query);

  return (
    <div className="contact-list">
      {filteredContactList.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};
export default ContactList;
