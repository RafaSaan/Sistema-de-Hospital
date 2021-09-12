import { useState } from "react";
import DataInputs from "./DataInputs";
import "./FormGetData.css";
// import NamesInput from "./NamesInput";
/*Use el use effect para renderizar inputs nombres de pacientes, meter estos nombres en un variable de estado y con esa variable usar un map para renderizar inputos de datos y actulizar estos datos en el estado para pintarlos despues */
let numberPacients = [];
const FormGetData = () => {
  const [initalPacient, setInitalPacient] = useState({});
  const [dataPacient, setDataPacient] = useState({});

  const handleChange = e => {
    setInitalPacient({
      ...initalPacient,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeDataPacients = e => {
    setDataPacient({
      ...dataPacient,
      [e.target.name]: e.target.value,
    });
  };

  let numPacientP = parseInt(initalPacient.number);

  if (isNaN(numPacientP)) {
  } else {
    numberPacients = Array(numPacientP).fill(1);
  }

  return (
    <div className="hospital__form">
      <form className="data__form">
        <div>
          <label htmlFor="number">N° de pacientes</label>
          <select
            name="number"
            id="number"
            value={initalPacient.name}
            className="data_select"
            onChange={handleChange}
            disabled={numberPacients.length === 0 ? false : true}
          >
            <option value={0}>---</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        {/* {numberPacients.length >= 1 && <div>DATAAAAAAAAAAAAAA</div>} */}
        {numberPacients.length === 0 ? (
          <div className="messge-empty"> Ingresa el numero de pacientes</div>
        ) : (
          numberPacients.map((el, i) => (
            <DataInputs
              key={i + 0.26}
              i={i}
              handleChangeDataPacients={handleChangeDataPacients}
              dataPacient={dataPacient}
            />
          ))
        )}
      </form>
    </div>
  );
};

export default FormGetData;
