import React from "react";
import { ICustomerInterface } from "./customer-interface";
import { randomTxt } from "../../utils";
import "./customer.scss";

const Customer = ({
  title,
  desc = randomTxt,
  selected = false,
  onPress,
}: ICustomerInterface) => {
  return (
    <div
      className={selected ? "selected-customer" : "customer"}
      onClick={() => {
        if (onPress) onPress();
      }}
      key={title}
    >
      <p className="title">{title}</p>
      <p className="truncate-desc">{desc}</p>
    </div>
  );
};

export default Customer;
