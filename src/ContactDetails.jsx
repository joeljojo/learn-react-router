import { useNavigate, useParams } from "react-router-dom";
import Button from "./Button";
import { deleteContact, getContactById } from "./Utils";
import { contactList } from "./Contacts";

const ContactDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const contact = getContactById(id);

  const handleEdit = (contactId) => {
    navigate(`/contact/${contactId}/edit`);
  };
  const handleDelete = (contactId) => {
    deleteContact(contactList, contactId);
    navigate(-1);
  };

  return (
    <div className="contact-details">
      <div className="contact-image">
        <img src={contact.imageURL} alt="Profile" />
      </div>
      <div className="details">
        <h3>{contact.name}</h3>
        <p>{contact.profession}</p>
      </div>
      <div className="buttons">
        <Button
          label="Edit"
          className="button"
          onClick={() => handleEdit(contact.id)}
        />
        <Button
          label="Delete"
          className="button-delete"
          onClick={() => handleDelete(contact.id)}
        />
      </div>
    </div>
  );
};
export default ContactDetails;
