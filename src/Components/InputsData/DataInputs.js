import React, { useState, useEffect } from "react";
import "./DataInputs.css";
let initialForm = {
  nombre: "",
  edad: "",
  tratamiento: "",
  dias: "",
};
let arrayDatapacient = [];

const DataInputs = ({ i, updateData, isComplete }) => {
  const [dataPacient, setDataPacient] = useState(initialForm);

  const handleChangeDataPacients = e => {
    setDataPacient({
      ...dataPacient,
      [e.target.name]: e.target.value,
    });
  };
  console.log("re-renderizado");

  // console.log(dataPacient);
  arrayDatapacient.shift();
  if (isComplete) {
  }
  // console.log(arrayDatapacient);

  useEffect(() => {
    arrayDatapacient.push(dataPacient);

    updateData(arrayDatapacient);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isComplete]);

  // setDataFinal(dataPacient);
  const regexNumber = /^[1-9]$|^[1-9][0-9]$|^(100)$/;
  // const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

  return (
    <div className="data__inputs">
      <label htmlFor="nombre">Nombre del Paciente: {i + 1} </label>
      <input
        type="text"
        name="nombre"
        id="nombre"
        autoComplete="off"
        placeholder="Nombre del paciente"
        value={dataPacient.name}
        onChange={handleChangeDataPacients}
        required
      />
      {/* {!regexName.test(dataPacient.nombre.trim()) && (
        <div className="input-error">El campo 'Nombre' solo acepta letras</div>
      )} */}

      <label htmlFor="edad">Edad del Paciente: {i + 1}</label>
      <input
        type="text"
        name="edad"
        id="edad"
        autoComplete="off"
        placeholder="Edad del paciente"
        value={dataPacient.name}
        onChange={handleChangeDataPacients}
        required
      />

      {!regexNumber.test(dataPacient.edad.trim()) && (
        <div className="input-error">
          El campo 'Edad' solo acepta numeros del 1 al 100
        </div>
      )}

      <label htmlFor="tratamiento">Tratamiento</label>
      <select
        name="tratamiento"
        id="tratamiento"
        value={dataPacient.name}
        onChange={handleChangeDataPacients}
        required
      >
        <option value="">---</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <label htmlFor="dias">Dias de estancia</label>
      <select
        name="dias"
        id="dias"
        value={dataPacient.name}
        onChange={handleChangeDataPacients}
        required
      >
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
