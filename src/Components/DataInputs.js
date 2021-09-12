import React from "react";
import "./DataInputs.css";

const DataInputs = ({ i, handleChange, dataPacients }) => {
  return (
    <div className="data__inputs">
      <label htmlFor="nombre">Nombre del Paciente: {i + 1} </label>
      <input
        type="text"
        name="nombre"
        id="nombre"
        autoComplete="off"
        placeholder="Nombre del paciente"
      />

      <label htmlFor="edad">Edad del Paciente: {i + 1}</label>
      <input
        type="text"
        name="edad"
        id="edad"
        autoComplete="off"
        placeholder="Edad del paciente"
      />

      <label htmlFor="tratamiento">Tratamiento</label>
      <select name="tratamiento" id="tratamiento">
        <option value="">---</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <label htmlFor="dias">Dias de estancia</label>
      <select name="dias" id="dias">
        <option value="">---</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="otro">Otro</option>
      </select>
    </div>
  );
};

export default DataInputs;
