import InventoryForm from "./InventoryForm";

function Inventory(props) {
  return (
    <div>
      <h1 style={{ fontSize: 30 }}>Inventory Page</h1>
      <div style={{ background: "#fff", padding: 24, minHeight: 580 }}>
        <InventoryForm addInventory={props.addInventory} />
      </div>
    </div>
  );
}

export default Inventory;
