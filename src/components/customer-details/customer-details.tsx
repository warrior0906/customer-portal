import React from "react";
import { ICustomerDetailsInterface } from "./customer-details-interface";
import "./customer-details.scss";
import { img } from "../../utils";

const CustomerDetails = ({ data }: ICustomerDetailsInterface) => {
  const renderImages = () => (
    <div className="image-row">
      <img src={img} alt="img" />
      <img src={img} alt="img" />
      <img src={img} alt="img" />
    </div>
  );
  return (
    <div className="customer-details">
      <div className="customer-details-title">{data.detailsTitle}</div>
      <div className="customer-details-desc">{data.desc}</div>
      <div className="image-container">
        {[1, 2, 3].map(() => renderImages())}
      </div>
    </div>
  );
};

export default CustomerDetails;
