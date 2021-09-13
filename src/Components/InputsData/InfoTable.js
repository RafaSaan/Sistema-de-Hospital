import React from "react";
import "./InfoTable.css";
import { Treatment } from "./Treatment";

const InfoTable = () => {
  //   console.log(Treatment);
  return (
    <div className="info__table">
      {Treatment.map((el, i) => (
        <div className="info__row" key={i + 0.5681}>
          <div className="">{el.name}</div>
          <div className="">{el.price}</div>
        </div>
      ))}
    </div>
  );
};

export default InfoTable;
