import { Route, Routes } from "react-router-dom";
import ContactApp from "./ContactApp";
import ContactDetails from "./ContactDetails";

const App = () => {
  return (
    <Routes>
      {/* Nesting routes */}
      <Route path="/" Component={ContactApp}>
        <Route path="contact/:id" Component={ContactDetails} />
      </Route>
    </Routes>
  );
};
export default App;
