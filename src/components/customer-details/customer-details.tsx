import React from "react";
import { ICustomerDetailsInterface } from "./customer-details-interface";
import "./customer-details.scss";

const CustomerDetails = ({}: ICustomerDetailsInterface) => {
  return (
    <div className="customer-details">
      <div className="customer-details-title">Customer 1 Details here</div>
    </div>
  );
};

export default CustomerDetails;
