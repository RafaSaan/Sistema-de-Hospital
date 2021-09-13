import React from "react";
import "./NamesInput.css";

const NamesInput = () => {
  return (
    <div>
      <label htmlFor="nombres">Nombres del paciente</label>
      <input
        type="text"
        className="names-inputs"
        name="nombre"
        id="nombre"
        placeholder="Nombre del paciente"
      />
    </div>
  );
};

export default NamesInput;
