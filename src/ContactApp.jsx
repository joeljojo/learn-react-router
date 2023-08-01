import { Outlet } from "react-router-dom";
import "./App.css";
import ContactList from "./ContactList";
import Form from "./Form";
import Search from "./Search";

const ContactApp = () => {
  return (
    <div className="contact-app">
      <div className="sidebar">
        <Search>
          <Form />
        </Search>
        <ContactList />
      </div>
      <div className="detail">
        {/* Outlet element renders the child route elements of the parent element */}
        <Outlet />
      </div>
    </div>
  );
};

export default ContactApp;
