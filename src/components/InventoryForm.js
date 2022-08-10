import React from "react";
import { DatePicker, Select, Divider, Form, Button } from "antd";
import { useState } from "react";
import AddTank from "./AddTank";
const { Option } = Select;

const dateFormat = "MM/DD/YYYY";

const defaultInventory = {
  inv_date: null,
  family: "",
  facility: "",
  tank: "",
  task_id: "",
  total_animals: null,
  shell_lengths: ["", ""],
};

const InventoryForm = (props) => {
  const [inventoryForm, setInventoryForm] = useState(defaultInventory);

  const handleDateChange = (value) => {
    inventoryForm["inv_date"] = value;
    setInventoryForm(inventoryForm);
  };

  const handleSelectChange = (value, event) => {
    inventoryForm[event.name] = value;
    setInventoryForm(inventoryForm);
    console.log(inventoryForm);
  };
  // console.log(inventoryForm);
  const handleSubmit = (event) => {
    console.log("Submit!");
    // event.preventDefault();
    // console.log(inventoryForm);
    // props.addInvCallback(inventoryForm);
  };
  // console.log(inventoryForm);
  return (
    <Form onFinish={handleSubmit} autoComplete="off">
      <div className="top-section">
        <Divider orientation="left">General Inventory Information</Divider>
        <Form.Item
          label="Facility"
          rules={[{ required: true, message: "Missing area" }]}
        >
          <Select
            status="warning"
            style={{ width: "20%" }}
            onSelect={(value, event) => handleSelectChange(value, event)}
          >
            <Option name="facility" value="PTMSC">
              Port Townsend Marine Science Center
            </Option>
            <Option name="facility" value="SA">
              Seattle Aquarium
            </Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Inventory ID"
          rules={[{ required: true, message: "Missing area" }]}
        >
          <Select
            status="warning"
            style={{ width: "20%" }}
            name="task_id"
            onSelect={(value, event) => handleSelectChange(value, event)}
          >
            <Option value="Inventory_0" name="task_id">
              Inventory 0
            </Option>
            <Option value="Inventory_1" name="task_id">
              Inventory 1
            </Option>
            <Option value="Inventory_2" name="task_id">
              Inventory 2
            </Option>
            <Option value="Inventory_3" name="task_id">
              Inventory 3
            </Option>
            <Option value="Inventory_4" name="task_id">
              Inventory 4
            </Option>
            <Option value="Inventory_5" name="task_id">
              Inventory 5
            </Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Inventory Date"
          rules={[{ required: true, message: "Missing area" }]}
        >
          <DatePicker
            name="inv_date"
            format={dateFormat}
            size="large"
            onChange={(value, dateString) => handleDateChange(dateString)}
          />
        </Form.Item>
      </div>
      <div className="bottom-section">
        <Divider orientation="left">Tank Counts and Shell Lengths</Divider>
        <AddTank invForm={inventoryForm} setInventoryForm={setInventoryForm} />
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
