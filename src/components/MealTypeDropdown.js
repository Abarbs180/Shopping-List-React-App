import Form from "react-bootstrap/Form";

const MealTypeDropdown = ({ onChange, value }) => {
  return (
    <div>
      <Form.Select
        onChange={onChange}
        value={value}
        aria-label="Default select example"
      >
        <option value="">Item Category</option>
        <option value="Dinner">Dinner</option>
        <option value="Lunch">Lunch</option>
        <option value="Misc">Misc</option>
      </Form.Select>
    </div>
  );
};

export default MealTypeDropdown;
