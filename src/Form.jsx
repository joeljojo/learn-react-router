import Button from "./Button";
const Form = () => {
  const handleOnChange = () => {};
  const handleAddContact = () => {};
  return (
    <div className="form">
      <div className="controls">
        <form>
          <input type="text" placeholder="Seach" onChange={handleOnChange} />
        </form>
        <Button label="New" onClick={handleAddContact} />
      </div>
    </div>
  );
};
export default Form;
