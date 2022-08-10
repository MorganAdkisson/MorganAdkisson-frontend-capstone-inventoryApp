import React, { useState, useEffect } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Divider, Button, Select, Input } from "antd";

const defaultTank = {
  tank: "",
  family: "",
  total_animals: null,
  shell_lengths: ["", "", "", "", "", "", "", "", "", ""],
};

function AddTank(props) {
  const [invList, setInvList] = useState([{ ...defaultTank }]);

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
  console.log(invList);

  const addShellLengths = (index) => {
    const additionalSL = ["", "", "", "", ""];
    const newList = [...invList];
    console.log(newList[index].shell_lengths);
    newList[index].shell_lengths = [...newList[index].shell_lengths];
    newList[index].shell_lengths.push(...additionalSL);
    setInvList(newList);
  };

  const handleTankAdd = () => {
    setInvList([...invList, { ...defaultTank }]);
  };

  const handleTankRemove = (index) => {
    const newList = [...invList];
    newList.splice(index, 1);
    setInvList(newList);
  };

  return (
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
            {/* <Input.Group compact name="family"> */}
            <Input
              placeholder="♀ x ♂"
              name="family"
              style={{ width: 150, textAlign: "center" }}
              onChange={(e) => handleChange(e, index)}
            />
            {/* <Input
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
                onChange={(e) => handleChange(e, index)}
              />
            </Input.Group> */}
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
            {singleTank.shell_lengths.map((singleLength, shellLengthIdx) => (
              <Input
                style={{ width: 100 }}
                onChange={(e) => handleChange(e, index, shellLengthIdx)}
                name="shell_lengths"
              />
            ))}
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
  );
}

export default AddTank;
