import AddCategoryForm from "./AddCategoryForm";

function IndexPage({ addItem }) {
  return (
    <>
      <h1 style={{ color: "black", textAlign: "center", marginBottom: "25px" }}>
        Shopping List
      </h1>
      <AddCategoryForm onAdd={addItem} />
    </>
  );
}

export default IndexPage;
