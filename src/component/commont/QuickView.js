import React from "react";
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Popover } from "antd";
library.add(faEye);

const QuickView = () => {
  const history = useHistory();
  function goDetail() {
    history.push("/shop-product-detail");
  }
  return (
    <Popover content="Quick view">
      <div className="quickview__eye" onClick={goDetail}>
        <FontAwesomeIcon icon="eye" className="sell__eye-icon" />
      </div>
    </Popover>
  );
};

export default QuickView;
