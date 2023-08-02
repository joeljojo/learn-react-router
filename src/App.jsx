import { Route, Routes } from "react-router-dom";
import ContactApp from "./ContactApp";
import ContactDetails from "./ContactDetails";
import AddContactForm from "./AddContact";
import NotFound from "./NotFound";
import EditContact from "./EditContact";
import { useState } from "react";
import { contactList } from "./Contacts";

const App = () => {
  const [contacts, setContacts] = useState(contactList);
  return (
    <Routes>
      {/* Nesting routes */}
      <Route path="/" Component={ContactApp}>
        <Route exact path="/contact/:id" Component={ContactDetails} />
        <Route exact path="/add-contact" Component={AddContactForm} />
        {/* Not found route */}
        <Route path="*" Component={NotFound} />
      </Route>
      <Route
        exact
        path="/contact/:id/edit"
        element={<EditContact contacts={contacts} setContacts={setContacts} />}
      />
    </Routes>
  );
};
export default App;
