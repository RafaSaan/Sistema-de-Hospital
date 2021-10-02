import React from "react";
import { Treatment } from "../InputsData/Treatment";
import "./ShowData.css";

const ShowData = ({ dataFinal, i }) => {
  // const { nombre, edad, tratamiento, dias } = dataFinal;
  // console.log(dataFinal[i]);
  // console.log(i);
  let numberTreatment = parseInt(dataFinal[i].tratamiento);
  let daysStance = parseInt(dataFinal[i].dias);
  let totalPrice = Treatment[numberTreatment].price * daysStance;
  let treatmentName = Treatment[numberTreatment].name;

  // console.log(Treatment[2]);
  // console.log(typeof dataFinal[i].tratamiento);

  return (
    <div className="showData">
      <h2>Paciente: {dataFinal[i].nombre}</h2>
      <div className="showData__container">
        <p>Edad: {dataFinal[i].edad} </p>
        <p>Tratamiento: {treatmentName}</p>
        <p>Días de estancia: {dataFinal[i].dias} </p>
        <p>Total: {totalPrice} </p>
      </div>
    </div>
  );
};

export default ShowData;
