import BasicForm from "../NewTable/BasicForm";
import classes from "./NewTable.module.css";
import useHttp from "../../hooks/use-http";
import { useEffect, useState } from "react";

const NewTable = () => {
  const { sendRequest: fetchAPI } = useHttp();
  const [estados, setEstados] = useState([]);

  useEffect(() => {
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
        url: "https://react-http-5cc8c-default-rtdb.firebaseio.com/estados.json/",
      },
      transformData
    );
  }, [fetchAPI]);

  const onChangeHandler = (e) => {
    console.log(e.target.value);
  }

  return (
    <div className={classes.container}>
      <h1>Add new weather data</h1>
      
      <BasicForm onChange={onChangeHandler} estadosAPI={estados}/>
    </div>
  );
};

export default NewTable;
