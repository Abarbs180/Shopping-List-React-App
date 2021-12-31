import IndexPage from "./components/IndexPage";
import AllItemsPage from "./components/AllItemsPage";
import ShoppingListPage from "./components/ShoppingListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useLocalStorageState from "./hooks/useLocalStorageState";

function App() {
  const [listItems, setListItems] = useLocalStorageState("items", []);

  const dinnerItems = listItems.filter((item) => item.mealType === "Dinner");
  const lunchItems = listItems.filter((item) => item.mealType === "Lunch");
  const miscItems = listItems.filter((item) => item.mealType === "Misc");

  const addItem = (item) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newItem = { id, ...item };
    const newList = [...listItems, newItem];

    setListItems(newList);
  };

  const deleteItem = (id) => {
    setListItems(listItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage addItem={addItem} />} />
          <Route
            path="/items"
            element={
              <AllItemsPage
                dinnerItems={dinnerItems}
                lunchItems={lunchItems}
                miscItems={miscItems}
                deleteItem={deleteItem}
              />
            }
          />
          <Route
            path="/shopping-list"
            element={
              <ShoppingListPage
                dinnerItems={dinnerItems}
                lunchItems={lunchItems}
                miscItems={miscItems}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
