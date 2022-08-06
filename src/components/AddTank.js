import React, { useState, useEffect } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Divider, Button, Select, Input } from "antd";

function AddTank(props) {
  const invForm = props.stateInvForm;
  const [familyData, setFamilyData] = useState([{ female: "", male: "" }]);
  const [shellLengths, setShellLengths] = useState([]);

  const formUpdateInput = (event) => {
    invForm[event.target.name] = event.target.value;
    props.setInventoryForm(invForm);
    console.log(invForm);
  };

  const formatFamily = (event) => {
    let updatedFormat = { ...familyData };
    updatedFormat[event.target.name] = event.target.value.toUpperCase();
    setFamilyData(updatedFormat);
  };

  useEffect(() => {
    invForm["family"] = `${familyData.female} X ${familyData.male}`;
    props.setInventoryForm(invForm);
    // console.log(invForm);
  }, [familyData]);

  const test = (event) => {
    console.log(event.target);
  };

  return (
    <Form.List name="fields">
      {(fields, { add, remove }) => {
        return (
          <div>
            {fields.map((field, index) => (
              <div key={field.key}>
                <Form.Item
                  label="Tank"
                  rules={[{ required: true, message: "Required Field" }]}
                >
                  <Input
                    style={{ width: 200 }}
                    name="tank"
                    onChange={formUpdateInput}
                  />
                </Form.Item>
                <Form.Item
                  label="Family"
                  rules={[{ required: true, message: "Required Field" }]}
                >
                  <Input.Group compact name="family" onChange={test}>
                    <Input
                      placeholder="♀"
                      name="female"
                      style={{ width: 150, textAlign: "center" }}
                      onChange={formatFamily}
                    />
                    <Input
                      placeholder="x"
                      style={{
                        width: 30,
                        borderLeft: 0,
                        borderRight: 0,
                        pointerEvents: "none",
                      }}
                      disabled
                    />
                    <Input
                      placeholder="♂"
                      name="male"
                      style={{ width: 150, textAlign: "center" }}
                      onChange={formatFamily}
                    />
                  </Input.Group>
                </Form.Item>
                <Form.Item
                  label="Total Animals"
                  rules={[{ required: true, message: "Required Field" }]}
                >
                  <Input
                    style={{ width: 200 }}
                    name="total_animals"
                    onChange={formUpdateInput}
                  />
                </Form.Item>
                <Form.Item
                  // name="shell_lengths"
                  label="Shell Lengths"
                  rules={[{ required: true, message: "Required Field" }]}
                >
                  <Input style={{ width: 100 }} />
                  <Input style={{ width: 100 }} />
                  <Input style={{ width: 100 }} />
                  <Input style={{ width: 100 }} />
                  <Input style={{ width: 100 }} />
                  <Input style={{ width: 100 }} />
                  <Input style={{ width: 100 }} />
                  <Input style={{ width: 100 }} />
                  <Input style={{ width: 100 }} />
                  <Input style={{ width: 100 }} />
                </Form.Item>
                {fields.length > 0 ? (
                  <Button
                    type="danger"
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                    icon={<MinusCircleOutlined />}
                  >
                    Remove Above Field
                  </Button>
                ) : null}
                <Divider />
              </div>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: "60%" }}
              >
                <PlusOutlined /> Add Tank
              </Button>
            </Form.Item>
          </div>
        );
      }}
    </Form.List>
  );
}

export default AddTank;
