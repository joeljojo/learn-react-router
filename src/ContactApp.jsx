import { Outlet } from "react-router-dom";
import "./App.css";
import ContactList from "./ContactList";
import Form from "./Form";
import Search from "./Search";
import { useState } from "react";
const ContactApp = () => {
  const [query, setQuery] = useState("");
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="contact-app">
      <div className="sidebar">
        <Search>
          <Form query={query} handleSearch={handleSearch} />
        </Search>
        <ContactList query={query} />
      </div>
      <div className="detail">
        {/* Outlet element renders the child route elements of the parent element */}
        <Outlet />
      </div>
    </div>
  );
};

export default ContactApp;
