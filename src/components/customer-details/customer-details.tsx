import React, { useCallback, useEffect, useRef, useState } from "react";
import { ICustomerDetailsInterface } from "./customer-details-interface";
import "./customer-details.scss";
import { Images } from "../../utils";

const CustomerDetails = ({ data }: ICustomerDetailsInterface) => {
  const [imgArr, setImgArr] = useState<Array<Array<string>>>(Images());
  const interval = useRef<any>(null);

  useEffect(() => {
    clearInterval(interval.current);
    setImgArr(Images());
    interval.current = setInterval(() => {
      setImgArr(Images());
    }, 10000);

    return () => {
      clearInterval(interval.current);
    };
  }, [data]);

  const renderImages = useCallback((row: Array<string>) => {
    return (
      <div className="image-row" key={row.toString()}>
        {row.map((col: string) => (
          <img src={col} alt="img" key={col} />
        ))}
      </div>
    );
  }, []);

  return (
    <div className="customer-details">
      <div className="customer-details-title">{data.detailsTitle}</div>
      <div className="customer-details-desc">{data.desc}</div>
      <div className="image-container">
        {imgArr.map((row) => renderImages(row))}
      </div>
    </div>
  );
};

export default CustomerDetails;
