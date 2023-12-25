import React, { useCallback, useEffect, useRef, useState } from "react";
import { ICustomerDetailsInterface } from "./customer-details-interface";
import "./customer-details.scss";
import { Images, time } from "../../utils";

const CustomerDetails = ({ data }: ICustomerDetailsInterface) => {
  const [imgArr, setImgArr] = useState<Array<Array<string>>>(Images());
  const interval = useRef<any>(null);

  useEffect(() => {
    /**
     * It will clear the interval and display new set of images when customers is changed
     */
    clearInterval(interval.current);
    setImgArr(Images());

    /**
     * To change the pictures in photo grid every 10 secs
     */
    interval.current = setInterval(() => {
      setImgArr(Images());
    }, time * 1000);

    return () => {
      /**
       * It will clear the interval on component unmount
       */
      clearInterval(interval.current);
    };
  }, [data]);

  const renderImages = useCallback((row: Array<string>) => {
    return (
      <div className="image-row" key={row.toString()}>
        {row.map((col: string) => (
          <img className="skeleton" src={col} alt="img" key={col} />
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
