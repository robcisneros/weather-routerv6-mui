import BasicForm from "../NewTable/BasicForm";
import classes from "./NewTable.module.css";
import useHttp from "../../hooks/use-http";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewTable = () => {
  const { sendRequest: fetchAPI } = useHttp();
  const [estados, setEstados] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const url =
      "https://react-http-5cc8c-default-rtdb.firebaseio.com/estados.json/";
    const transformData = (dataObj) => {
      const loadedData = [];
      for (const key in dataObj) {
        loadedData.push({
          id: key,
          estado: dataObj[key].name,
          value: dataObj[key].value,
        });
      }

      setEstados(loadedData);
    };

    fetchAPI(
      {
        url: url,
      },
      transformData
    );
  }, [fetchAPI]);

  const onConfirmHandler = (enteredData) => {
    const url =
      "https://react-http-5cc8c-default-rtdb.firebaseio.com/weatherBmore.json/";
    console.log(enteredData);
    fetchAPI({
      url: url,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: enteredData,
    }, () => {} );
    navigate("/");
  };

  return (
    <div className={classes.container}>
      <h1>Add new weather data</h1>

      <BasicForm onConfirm={onConfirmHandler} estadosAPI={estados} />
    </div>
  );
};

export default NewTable;
