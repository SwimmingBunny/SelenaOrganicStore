import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Popover } from "antd";
library.add(faEye);

const QuickView = () => {
  return (
    <Popover content="Quick view">
      <div className="quickview__eye">
        <FontAwesomeIcon icon="eye" className="sell__eye-icon" />
      </div>
    </Popover>
  );
};

export default QuickView;
