import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import useLocalStorageState from "../hooks/useLocalStorageState";

const generateItems = (itemCategory) => {
  if (itemCategory.length < 7) {
    return [];
  }

  const generatedItems = [];
  const availableItems = [...itemCategory];

  for (let i = 0; i < 7; i++) {
    const randomIndex = Math.floor(Math.random() * availableItems.length);

    generatedItems.push(availableItems[randomIndex]);
    availableItems.splice(randomIndex, 1);
  }

  return generatedItems;
};

function ShoppingListPage({ dinnerItems, lunchItems, miscItems }) {
  const [randomDinnerItems, setRandomDinnerItems] = useLocalStorageState(
    "dinnerItems",
    () => generateItems(dinnerItems)
  );

  const [randomLunchItems, setrandomLunchItems] = useLocalStorageState(
    "lunchItems",
    () => generateItems(lunchItems)
  );

  const handleClick = () => {
    setRandomDinnerItems(generateItems(dinnerItems));
    setrandomLunchItems(generateItems(lunchItems));
  };

  return (
    <>
      <div className="d-grid gap-2">
        <Button onClick={handleClick} type="button" size="lg">
          Regenerate List
        </Button>
      </div>
      <div style={{ marginTop: "25px" }}>
        <h2>Dinner</h2>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>Item</th>
              <th style={{ textAlign: "center" }}>Ingredients</th>
            </tr>
          </thead>
          <tbody>
            {randomDinnerItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.ingredients}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h2>Lunch</h2>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>Item</th>
              <th style={{ textAlign: "center" }}>Ingredients</th>
            </tr>
          </thead>
          <tbody>
            {randomLunchItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.ingredients}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h2>Misc</h2>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>Item</th>
              <th style={{ textAlign: "center" }}>Ingredients</th>
            </tr>
          </thead>
          <tbody>
            {miscItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.ingredients}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Link to="/items">Go Back</Link>
      </div>
    </>
  );
}

export default ShoppingListPage;
