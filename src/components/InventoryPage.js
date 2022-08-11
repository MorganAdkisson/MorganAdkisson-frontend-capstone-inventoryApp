import InventoryForm from "./InventoryForm";

function Inventory(props) {
  return (
    <div>
      <h1>Inventory Page</h1>
      <InventoryForm addInventory={props.addInventory} />
    </div>
  );
}

export default Inventory;
