import classes from "./MuiTable.module.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import useHttp from "../../hooks/use-http";
import { useEffect, useState } from "react";

import {
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const MuiTable = () => {
  // const tableData = [
  //   {
  //     id: 1,
  //     municipio: "Madero",
  //     description: "descrip",
  //     temperatura: 35,
  //     acciones: "acciones",
  //   },
  //   {
  //     id: 2,
  //     municipio: "Jaumave",
  //     description: "descrip",
  //     temperatura: 35,
  //     acciones: "acciones",
  //   },
  //   {
  //     id: 3,
  //     municipio: "Tampico",
  //     description: "descrip",
  //     temperatura: 35,
  //     acciones: "acciones",
  //   },
  //   {
  //     id: 4,
  //     municipio: "Reynosa",
  //     description: "descrip",
  //     temperatura: 35,
  //     acciones: "acciones",
  //   },
  //   {
  //     id: 5,
  //     municipio: "Burgos",
  //     description: "descrip",
  //     temperatura: 35,
  //     acciones: "acciones",
  //   },
  //   {
  //     id: 6,
  //     municipio: "Gonzalez",
  //     description: "descrip",
  //     temperatura: 35,
  //     acciones: "acciones",
  //   },
  //   {
  //     id: 7,
  //     municipio: "Matamoros",
  //     description: "descrip",
  //     temperatura: 35,
  //     acciones: "acciones",
  //   },
  // ];

  const { sendRequest: fetchAPI } = useHttp();
  const [dataWeather, setDataWeather] = useState([]);

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

  return (
    <TableContainer component={Paper} sx={{ maxHeight: "500px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Municipio</TableCell>
            <TableCell>Descripción</TableCell>
            <TableCell>Temperatura</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataWeather.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell> {row.id} </TableCell>
              <TableCell> {row.municipio} </TableCell>
              <TableCell> {row.description} </TableCell>
              <TableCell> {row.temperatura} </TableCell>
              <TableCell>
                <div className={classes.actionsBtns}>
                  
                  <AiFillEdit className={classes.editBtn} />
                  <AiFillDelete className={classes.deleteBtn} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;
