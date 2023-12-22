import React, { RefObject, useEffect, useRef, useState } from "react";
import { Customer, CustomerDetails, ICustomerData } from "../../components";
import { customerList } from "../../utils";
import "./home.scss";

const Home = () => {
  const [list, setList] = useState<Array<ICustomerData>>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const scrollRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    setList(customerList().slice(0, 10));
  }, []);

  //On Scroll function that enables pagination for customer list
  const onScroll = () => {
    if (scrollRef?.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      if (scrollTop === 0) {
        setList(customerList().slice(0, 10));
      } else if (scrollTop + clientHeight === scrollHeight) {
        setList(customerList().slice(0, list.length + 10)); 
        // we can also modify this state update as per requirements
        // we can call the API here, to fetch the customer list
      }
    }
  };
  return (
    <div className="home">
      <div className="list" onScroll={onScroll} ref={scrollRef}>
        {list?.map((item: any, index: number) => (
          <Customer
            title={item.title}
            selected={selectedIndex === index}
            key={item.title}
            onPress={() => setSelectedIndex(index)}
          />
        ))}
      </div>
      {selectedIndex !== -1 && (
        <div className="desc">
          <CustomerDetails data={customerList()[selectedIndex]} />
        </div>
      )}
    </div>
  );
};

export default Home;
