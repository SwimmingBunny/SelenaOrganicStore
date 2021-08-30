import React from "react";
import { Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
const Count = () => {
  const [count, setCount] = React.useState(0);
  const [check, setCheck] = React.useState(true);
  const countStyle = {
    padding: "0 1rem",
  };
  const btnStyle = {
    border: "none",
  };
  const borderStyle = {
    border: "1px solid #e5e5e5",
    margin: "0 1rem",
    padding: ".5rem 0",
  };
  const Plus = () => {
    if (count === 0) {
      setCheck(true);
    }
    setCount(count + 1);
  };
  const Minus = () => {
    if (count === 0) {
      setCheck(!check);
    }
    if (count > 0) {
      setCheck(true);
      setCount(count - 1);
    }
  };
  return (
    <div style={borderStyle}>
      {check ? (
        <Button onClick={Minus} size="small" style={btnStyle}>
          <MinusOutlined />
        </Button>
      ) : (
        <Button onClick={Minus} disabled size="small" style={btnStyle}>
          <MinusOutlined />
        </Button>
      )}

      <span style={countStyle}>{count}</span>
      <Button onClick={Plus} size="small" style={btnStyle}>
        <PlusOutlined />
      </Button>
    </div>
  );
};
export default Count;
