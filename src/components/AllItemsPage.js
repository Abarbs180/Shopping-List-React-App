import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import Table from "react-bootstrap/Table";

function AllItemsPage({ dinnerItems, lunchItems, miscItems, deleteItem }) {
  return (
    <>
      <h2>Dinner</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Item</th>
            <th style={{ textAlign: "center" }}>Ingredients</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dinnerItems.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.ingredients}</td>
              <td style={{ width: 0, margin: 0 }}>
                <FaTimes
                  className="close-btn"
                  onClick={() => deleteItem(item.id)}
                />
              </td>
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {lunchItems.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.ingredients}</td>
              <td style={{ width: 0, margin: 0 }}>
                <FaTimes
                  className="close-btn"
                  onClick={() => deleteItem(item.id)}
                />
              </td>
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {miscItems.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.ingredients}</td>
              <td style={{ width: 0, margin: 0 }}>
                <FaTimes
                  className="close-btn"
                  onClick={() => deleteItem(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="link-row">
        <Link to="/">Go Back</Link>
        <Link to="/shopping-list">Shopping List</Link>
      </div>
    </>
  );
}

export default AllItemsPage;
