import { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { addContact } from "./Utils";

let nextid = 5;
const AddContactForm = () => {
  const navigate = useNavigate();

  // Handling Multiple input state
  const [formState, setFormState] = useState({
    name: "",
    profession: "",
    imageURL: "",
  });

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    setFormState((prev) => ({
      ...prev,
      [target.name]: value,
    }));
  };

  const handleCancel = () => {
    setFormState({ name: "", profession: "", imageURL: "" });
    // Move one step back in the history stack
    navigate("/");
  };
  const handleSave = (e) => {
    e.preventDefault();
    addContact(
      nextid++,
      formState.name,
      formState.profession,
      formState.imageURL
    );
    navigate(-1);
  };
  return (
    <form className="add-contact-form" onSubmit={handleSave}>
      <div className="form-group">
        <h2>Add New Contact</h2>
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
          className="input-field"
          placeholder="Joel Pamphyl"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="profession">Profession</label>
        <input
          type="text"
          id="profession"
          name="profession"
          value={formState.profession}
          onChange={handleInputChange}
          className="input-field"
          placeholder="Senior Accountant"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="imageURL">imageURL</label>
        <input
          type="url"
          id="url"
          name="imageURL"
          onChange={handleInputChange}
          value={formState.imageURL}
          className="input-field"
          placeholder="https://myImage.com"
          required
        />
      </div>
      <div className="button-group">
        <Button
          label="Cancel"
          className="cancel-button"
          onClick={handleCancel}
        />
        <Button type="submit" label="Save" className="save-button" />
      </div>
    </form>
  );
};

export default AddContactForm;
