import { useParams } from "react-router-dom";
import Button from "./Button";
import { getContactById } from "./Utils";

const ContactDetails = () => {
  const { id } = useParams();
  const contact = getContactById(id);
  const handleEdit = () => {};
  const handleDelete = () => {};
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
        <Button label="Edit" onClick={handleEdit} className="button" />
        <Button
          label="Delete"
          onClick={handleDelete}
          className="button-delete"
        />
      </div>
    </div>
  );
};
export default ContactDetails;
