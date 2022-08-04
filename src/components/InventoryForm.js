import { DatePicker, Select, Divider, Form, Button } from "antd";
import { useState } from "react";
import AddTank from "./AddTank";
const { Option } = Select;

const defaultInventory = {
  inv_date: null,
  family: "",
  facility: "",
  tank: "",
  task_id: "",
  total_animals: null,
  shell_lengths: "",
};
const dateFormat = "MM/DD/YYYY";

const InventoryForm = (props) => {
  // const [form] = Form.useForm();
  const [inventoryForm, setInventoryForm] = useState(defaultInventory);

  const onChange = (event) => {
    // event.preventDefault();
    console.log(event.target);
    console.log(event.target.value);

    const stateName = event.target.name;
    const inputValue = event.target.value;

    const newInventory = { ...inventoryForm };
    newInventory[stateName] = inputValue;

    setInventoryForm(newInventory);
    console.log(inventoryForm);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.addInvCallback(inventoryForm);
  };

  return (
    <Form onSubmit={onSubmit} autoComplete="off">
      <div className="top-section">
        <Divider orientation="left">General Inventory Information</Divider>
        <Form.Item
          label="Facility"
          rules={[{ required: true, message: "Missing area" }]}
        >
          <Select
            status="warning"
            style={{ width: "20%" }}
            name="facilty"
            onChange={onChange}
          >
            <Option value="PTMSC">Port Townsend Marine Science Center</Option>
            <Option value="SA">Seattle Aquarium</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="task_id"
          label="Inventory ID"
          rules={[{ required: true, message: "Missing area" }]}
        >
          <Select status="warning" style={{ width: "20%" }} onChange={onChange}>
            <Option value="Inventory_0">Inventory 0</Option>
            <Option value="Inventory_1">Inventory 1</Option>
            <Option value="Inventory_2">Inventory 2</Option>
            <Option value="Inventory_3">Inventory 3</Option>
            <Option value="Inventory_4">Inventory 4</Option>
            <Option value="Inventory_5">Inventory 5</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="inv_date"
          label="Inventory Date"
          rules={[{ required: true, message: "Missing area" }]}
          onChange={onChange}
        >
          <DatePicker onChange={onChange} format={dateFormat} size="large" />
        </Form.Item>
      </div>
      <div className="bottom-section">
        <Divider orientation="left">Tank Counts and Shell Lengths</Divider>
        <AddTank onChange={onChange} />
      </div>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default InventoryForm;
