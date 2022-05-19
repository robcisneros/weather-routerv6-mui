import classes from "./MainTable.module.css";
import MuiTable from "../MUI/MuiTable";
import Dropdown from "../UI/Dropdown";
import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";

const MainTable = () => {
  const { sendRequest: fetchAPI } = useHttp();
  const [estados, setEstados] = useState([]);
  const [dataWeather, setDataWeather] = useState([]);
  const [selectedEstado, setSelectedEstado] = useState('');

  useEffect(() => {
    const url1 =
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
        url: url1,
      },
      transformData
    );
  }, [fetchAPI]);

  useEffect(() => {
    const url =
      "https://react-http-5cc8c-default-rtdb.firebaseio.com/weatherBmore.json/";
    const transformData = (dataObj) => {
      const loadedData = [];

      
      for (const key in dataObj) {
        
        loadedData.push({
          id: key,
          estado: dataObj[key].estado,
          municipio: dataObj[key].municipio,
          description: dataObj[key].descripcion,
          temperatura: dataObj[key].temperatura,
        });

        
        
      }

      setDataWeather(loadedData);
      
    };

    fetchAPI(
      {
        url: url,
      },
      transformData
    );
  }, [fetchAPI]);

  const onSelectedHandler = (estado) => {
    setSelectedEstado(estado);
  }
  let filteredData = dataWeather;

  const onClickHandler = () => {
    dataWeather.filter((dataItem) => {
      if (selectedEstado === ""){
        return filteredData;
      }else if (dataItem.estado.toLowerCase().includes(selectedEstado.toLowerCase())){
        
        filteredData = dataItem
        console.log(filteredData)
        return dataItem
      
      }
      
    });
    // console.log(selectedEstado)
  }

  return (
    <div className={classes.container}>
      <h1> With Material UI</h1>
      <div className={classes.searchSection}>
        <Dropdown onSelectedEstado={onSelectedHandler} estadosDB={estados} />
        <button onClick={onClickHandler}>Buscar</button>
      </div>
      <MuiTable dataWeatherEsp={filteredData} />
    </div>
  );
};

export default MainTable;
