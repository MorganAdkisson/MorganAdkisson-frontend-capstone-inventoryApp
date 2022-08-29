import React, { useState, useEffect } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { DatePicker, Select, Divider, Form, Button, Input } from "antd";
const { Option } = Select;

const dateFormat = "MM/DD/YYYY";

const InventoryForm = (props) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [date, setDate] = useState(null);
  const [facility, setFacility] = useState("");
  const [taskId, setTaskId] = useState("");
  const defaultInventory = {
    inv_date: date,
    family: "",
    facility: facility,
    tank: "",
    task_id: taskId,
    total_animals: null,
    shell_lengths: ["", "", "", "", "", "", "", "", "", ""],
  };
  const [invList, setInvList] = useState([{ ...defaultInventory }]);

  // Tank specific changes
  const handleChange = (event, index, shellLengthIdx) => {
    const { name, value } = event.target;
    const newList = [...invList];
    if (name === "shell_lengths") {
      newList[index][name] = [...newList[index][name]];
      newList[index][name][shellLengthIdx] = value;
      setInvList(newList);
    } else if (name === "family") {
      newList[index]["family"] = value.toUpperCase();
    } else {
      newList[index][name] = value;
      setInvList(newList);
    }
  };

  const addShellLengths = (index) => {
    const additionalSL = ["", "", "", "", ""];
    const newList = [...invList];
    newList[index].shell_lengths = [...newList[index].shell_lengths];
    newList[index].shell_lengths.push(...additionalSL);
    setInvList(newList);
  };

  // Dynamic field - tank add or remove
  const handleTankAdd = () => {
    setInvList([...invList, { ...defaultInventory }]);
  };

  const handleTankRemove = (index) => {
    const newList = [...invList];
    newList.splice(index, 1);
    setInvList(newList);
  };

  // Update general info for every inventory
  const handleDateChange = (value) => {
    setDate(value);
  };

  const handleGeneralInvChange = (value, event) => {
    if (event.name === "facility") {
      setFacility(value);
    } else if (event.name === "task_id") {
      setTaskId(value);
    }
  };

  useEffect(() => {
    const updatedInvList = invList.map((inv) => {
      if (inv.facilty !== facility || inv.task_id !== taskId) {
        return {
          inv_date: date,
          family: inv.family,
          facility: facility,
          tank: inv.tank,
          task_id: taskId,
          total_animals: inv.total_animals,
          shell_lengths: inv.shell_lengths,
        };
      } else {
        return inv;
      }
    });
    setInvList(updatedInvList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [facility, taskId, date]);

  // Submit callback to axios call in App()
  const handleSubmit = (event) => {
    const formattedInvList = invList.map((inv) => {
      if (Array.isArray(inv.shell_lengths)) {
        inv.shell_lengths = inv.shell_lengths.filter(Boolean).join(", ");
        return inv;
      } else {
        return inv;
      }
    });
    console.log("Submit!");
    props.addInventory(formattedInvList);
    // form.resetFields();
    setFormSubmitted(true);
  };

  // Submitted page
  const toggleSubmit = () => {
    setFormSubmitted((current) => !current);
  };

  useEffect(() => {
    console.log("New Inventory");
  }, [formSubmitted]);

  return (
    <div>
      {formSubmitted === true && (
        <div>
          <Button onClick={toggleSubmit}>Click To Submit New Inventory</Button>
        </div>
      )}
      {formSubmitted === false && (
        <Form
          onFinish={handleSubmit}
          onSubmit={(e) => e.preventDefault()}
          autoComplete="off"
        >
          <div className="top-section">
            <Divider orientation="left">General Inventory Information</Divider>
            <Form.Item
              label="Facility"
              rules={[{ required: true, message: "Required Field" }]}
            >
              <Select
                status="warning"
                style={{ width: "20%" }}
                onSelect={(value, event) =>
                  handleGeneralInvChange(value, event)
                }
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
              rules={[{ required: true, message: "Required Field" }]}
            >
              <Select
                status="warning"
                style={{ width: "20%" }}
                name="task_id"
                onSelect={(value, event) =>
                  handleGeneralInvChange(value, event)
                }
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
                <Option value="Inventory_6" name="task_id">
                  Inventory 6
                </Option>
                <Option value="Inventory_7" name="task_id">
                  Inventory 7
                </Option>
                <Option value="Inventory_8" name="task_id">
                  Inventory 8
                </Option>
                <Option value="Inventory_9" name="task_id">
                  Inventory 9
                </Option>
                <Option value="Inventory_10" name="task_id">
                  Inventory 10
                </Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Inventory Date"
              rules={[{ required: true, message: "Required Field" }]}
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
            <div>
              {invList.map((singleTank, index) => (
                <div key={index}>
                  <Form.Item
                    label="Tank"
                    rules={[{ required: true, message: "Required Field" }]}
                  >
                    <Input
                      style={{ width: 200 }}
                      name="tank"
                      onChange={(e) => handleChange(e, index)}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Family"
                    rules={[{ required: true, message: "Required Field" }]}
                  >
                    <Input
                      placeholder="♀    x    ♂"
                      name="family"
                      style={{ width: 150, textAlign: "center" }}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Total Animals"
                    rules={[{ required: true, message: "Required Field" }]}
                  >
                    <Input
                      style={{ width: 200 }}
                      name="total_animals"
                      onChange={(e) => handleChange(e, index)}
                    />
                  </Form.Item>
                  <Form.Item label="Shell Lengths">
                    {singleTank.shell_lengths.map(
                      (singleLength, shellLengthIdx) => (
                        <Input
                          key={shellLengthIdx}
                          style={{ width: 100 }}
                          onChange={(e) =>
                            handleChange(e, index, shellLengthIdx)
                          }
                          name="shell_lengths"
                        />
                      )
                    )}
                  </Form.Item>
                  <Button onClick={() => addShellLengths(index)}>
                    {" "}
                    + 5 shell lengths{" "}
                  </Button>
                  <br></br>
                  {invList.length > 1 && (
                    <Button
                      type="danger"
                      className="dynamic-delete-button"
                      icon={<MinusCircleOutlined />}
                      onClick={() => handleTankRemove(index)}
                    >
                      Remove Above Tank
                    </Button>
                  )}
                  <Divider />
                  <Form.Item>
                    {invList.length - 1 === index && (
                      <Button
                        type="dashed"
                        style={{ width: "60%" }}
                        onClick={handleTankAdd}
                      >
                        <PlusOutlined /> Add Tank
                      </Button>
                    )}
                  </Form.Item>
                </div>
              ))}
            </div>
          </div>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default InventoryForm;
