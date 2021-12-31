import MealTypeDropdown from "./MealTypeDropdown";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

const AddCategoryForm = ({ onAdd }) => {
  const [mealType, setMealType] = useState("");
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleMealTypeSelect = (e) => {
    setMealType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !mealType) {
      alert("Please select meal type or add item name");
      return;
    }

    onAdd({ mealType, name, ingredients });

    setMealType("");
    setName("");
    setIngredients("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <MealTypeDropdown onChange={handleMealTypeSelect} value={mealType} />
      <Form.Group>
        <FloatingLabel controlId="item-name" label="Item Name">
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Item Name"
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group>
        <FloatingLabel controlId="ingredients" label="Ingredients">
          <Form.Control
            as="textarea"
            rows={5}
            style={{ height: "200px" }}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Ingredients"
          />
        </FloatingLabel>
      </Form.Group>
      <div className="link-row">
        <Button type="submit">Add Item</Button>
        <Link to="/items">Show All Items</Link>
      </div>
    </Form>
  );
};

export default AddCategoryForm;
