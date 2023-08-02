import { useNavigate, useParams } from "react-router-dom";
import Button from "./Button";
import { getContactById } from "./Utils";
import { useState } from "react";

const EditContact = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const contact = getContactById(id);
  const [state, setstate] = useState({
    name: contact.name,
    profession: contact.profession,
    imageURL: contact.imageURL,
  });

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    setstate((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleCancel = () => {
    setstate({
      name: "",
      profession: "",
      imageURL: "",
    });
    navigate(-1);
  };
  const handleSave = (e) => {
    // Not fully implemented
    navigate(-1);
  };

  return (
    <form className="edit-contact-form">
      <div className="form-group">
        <p style={{ color: "red" }}>Form functionality not fully implemented</p>
        <h2>Edit Contact</h2>
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="input-field"
          placeholder="Joel Pamphyl"
          value={state.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="profession">Profession</label>
        <input
          type="text"
          id="profession"
          name="profession"
          className="input-field"
          placeholder="Senior Accountant"
          value={state.profession}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="imageURL">imageURL</label>
        <input
          type="url"
          id="url"
          name="imageURL"
          className="input-field"
          placeholder="https://myImage.com"
          value={state.imageURL}
          onChange={handleChange}
          required
        />
      </div>
      <div className="button-group">
        <Button
          label="Cancel"
          className="cancel-button"
          onClick={handleCancel}
        />
        <Button
          type="submit"
          label="Save"
          className="save-button"
          onClick={handleSave}
        />
      </div>
    </form>
  );
};

export default EditContact;
