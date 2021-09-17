import React from "react";
import "./ShowData.css";

const ShowData = ({ dataFinal }) => {
  const { nombre, edad, tratamiento, dias } = dataFinal;
  return (
    <div className="showData">
      <h2>Paciente: {nombre}</h2>
      <div className="showData__container">
        <p>Edad: {edad} </p>
        <p>Tratamiento: {tratamiento}</p>
        <p>Días de estancia: {dias} </p>
        <p>Total: </p>
      </div>
    </div>
  );
};

export default ShowData;
