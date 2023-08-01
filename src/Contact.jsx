import { NavLink } from "react-router-dom";
const Contact = ({ contact }) => {
  return (
    <div className="contact">
      <NavLink to={`contact/${contact.id}`} className={"nav-link"}>
        <p>{contact.name}</p>
      </NavLink>
    </div>
  );
};
export default Contact;
