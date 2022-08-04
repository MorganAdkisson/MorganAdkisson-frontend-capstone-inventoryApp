import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Divider, Button, Select, Input } from "antd";

function AddTank(props) {
  return (
    <Form.List name="fields">
      {(fields, { add, remove }) => {
        return (
          <div>
            {fields.map((field, index) => (
              <div key={field.key}>
                <Form.Item
                  name="tank"
                  label="Tank"
                  rules={[{ required: true, message: "Missing area" }]}
                  onChange={props.onChange}
                >
                  <Input style={{ width: 200 }} />
                </Form.Item>
                <Form.Item
                  name="family"
                  label="Family"
                  rules={[{ required: true, message: "Missing area" }]}
                  onChange={props.onChange}
                >
                  <Input.Group compact>
                    <Input
                      placeholder="♀"
                      style={{ width: 150, textAlign: "center" }}
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
                      style={{ width: 150, textAlign: "center" }}
                    />
                  </Input.Group>
                </Form.Item>
                <Form.Item
                  name="total_animals"
                  label="Total Animals"
                  rules={[{ required: true, message: "Missing area" }]}
                  onChange={props.onChange}
                >
                  <Input style={{ width: 200 }} />
                </Form.Item>
                <Form.Item
                  name="shell_lengths"
                  label="Shell Lengths"
                  rules={[{ required: true, message: "Missing area" }]}
                  onChange={props.onChange}
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
