import { useNavigate } from "react-router-dom";
import Button from "./Button";
const Form = ({ query, handleSearch }) => {
  const navigate = useNavigate();
  return (
    <div className="form">
      <div className="controls">
        <form>
          <input
            type="text"
            value={query}
            placeholder="Seach..."
            onChange={handleSearch}
          />
        </form>
        <Button
          label="New"
          onClick={() => {
            navigate("add-contact");
          }}
        />
      </div>
    </div>
  );
};
export default Form;
