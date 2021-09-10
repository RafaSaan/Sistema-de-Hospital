import { useState, useEffect } from "react";
import "./FormGetData.css";
import NamesInput from "./NamesInput";
/*Use el use effect para renderizar inputs nombres de pacientes, meter estos nombres en un variable de estado y con esa variable usar un map para renderizar inputos de datos y actulizar estos datos en el estado para pintarlos despues */

const FormGetData = () => {
  const [initalPacient, setInitalPacient] = useState({});
  const [numberPacients, setNumberPacients] = useState([]);
  const handleChange = e => {
    setInitalPacient({
      ...initalPacient,
      [e.target.name]: e.target.value,
    });
  };

  console.log(`numero de pacientes ${initalPacient.number}`);

  useEffect(() => {
    for (let i = 1; i <= parseInt(initalPacient.number); i++) {
      numberPacients.push.apply([i]);
      // console.log(initalPacient);
      return numberPacients;
    }
  }, [initalPacient]);

  // console.log(numberPacients.push());
  console.log(numberPacients);
  console.log(numberPacients.length);

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
          >
            <option value="">---</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        {/* {numberPacients.length === 0 ? (
          <div> Ingresa el numero de pacientes</div>
        ) : (
          numberPacients.map(() => <NamesInput />)
        )} */}
      </form>
    </div>
  );
};

export default FormGetData;
