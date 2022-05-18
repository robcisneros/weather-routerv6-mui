import useInput from "../../hooks/use-input";
import classes from "./BasicForm.module.css";
import Dropdown from "../UI/Dropdown";
import { useState } from "react";

const BasicForm = (props) => {

  const [enteredEstado, setEnteredEstado] = useState('');

  const {
    value: enteredMunicipio,
    valueIsValid: enteredMunicipioIsValid,
    hasError: municipioInputHasError,
    valueChangeHandler: municipioChangeHandler,
    inputBlurChangeHandler: onBlurMunicipioInputChangeHandler,
    reset: resetMunicipioInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredDescription,
    valueIsValid: enteredDescriptionIsValid,
    hasError: descriptionInputHasError,
    valueChangeHandler: descriptionInputChangeHandler,
    inputBlurChangeHandler: onBlurDescriptionInputChangeHandler,
    reset: resetDescriptionInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredTemperatura,
    valueIsValid: enteredTemperaturaIsValid,
    hasError: temperaturaInputHasError,
    valueChangeHandler: temperaturaInputChangeHandler,
    inputBlurChangeHandler: onBlurTemperaturaInputChangeHandler,
    reset: resetTemperaturaInput,
  } = useInput((value) => value < 100 && value.trim() !== "");

  let formIsValid = false;

  if (
    enteredMunicipioIsValid &&
    enteredDescriptionIsValid &&
    enteredTemperaturaIsValid &&
    enteredEstado
  ) {
    formIsValid = true;
  }

  const onSelectedHandler = (estado) => {
    setEnteredEstado(estado)
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    
    props.onConfirm({
      estado: enteredEstado,
      municipio: enteredMunicipio,
      temperatura: enteredTemperatura,
      descripcion: enteredDescription
    });
    resetMunicipioInput();
    resetDescriptionInput();
    resetTemperaturaInput();
  };


  // className={`${classes["form-control"]} ${classes.invalid}`}

  const municipioInputClasses = municipioInputHasError
    ? `${classes["form-control"]} ${classes.invalid}`
    : classes["form-control"];
  const descriptionInputClasses = descriptionInputHasError
  ? `${classes["form-control"]} ${classes.invalid}`
  : classes["form-control"];
  const temperaturaInputClasses = temperaturaInputHasError
  ? `${classes["form-control"]} ${classes.invalid}`
  : classes["form-control"];

  return (
    <form onSubmit={formSubmissionHandler} className={classes["form-control"]}>

      <Dropdown onSelectedEstado={onSelectedHandler} estadosDB={props.estadosAPI} />

      <div className={classes["control-group"]}>
        <div className={municipioInputClasses}>
          <label htmlFor="municipio">Municipio</label>
          <input
            value={enteredMunicipio}
            type="text"
            id="municipio"
            onChange={municipioChangeHandler}
            onBlur={onBlurMunicipioInputChangeHandler}
          />
          {municipioInputHasError && (
            <p className={classes["error-text"]}>Nombre del municipio no debe estar vacío.</p>
          )}
        </div>
        <div className={descriptionInputClasses}>
          <label htmlFor="description">Descripción</label>
          <input
            value={enteredDescription}
            type="text"
            id="description"
            onChange={descriptionInputChangeHandler}
            onBlur={onBlurDescriptionInputChangeHandler}
          />
          {descriptionInputHasError && (
            <p className={classes["error-text"]}>
              La descripción no debe estar vacía.
            </p>
          )}
        </div>
        <div className={temperaturaInputClasses}>
          <label htmlFor="temperatura">Temperatura ° C</label>
          <input
            value={enteredTemperatura}
            type="number"
            id="temperatura"
            onChange={temperaturaInputChangeHandler}
            onBlur={onBlurTemperaturaInputChangeHandler}
          />
          {temperaturaInputHasError && (
            <p className={classes["error-text"]}>
              Temperatura debe ser menor a 100 y no estar vacío.
            </p>
          )}
        </div>

      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
