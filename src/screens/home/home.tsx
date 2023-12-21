import React, { RefObject, useRef, useState } from "react";
import { Customer, CustomerDetails } from "../../components";
import { customerList } from "../../utils";
import "./home.scss";

const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const scrollRef: RefObject<HTMLDivElement> = useRef(null);

  const onScroll = () => {
    if (scrollRef?.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        // This will be triggered after hitting the last element.
        // API call should be made here while implementing pagination.
      }
    }
  };
  return (
    <div className="home">
      <div className="list" onScroll={onScroll} ref={scrollRef}>
        {customerList()?.map((item: any, index: number) => (
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
