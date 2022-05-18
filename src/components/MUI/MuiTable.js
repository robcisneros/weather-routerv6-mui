import classes from "./MuiTable.module.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
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
  const tableData = [
    {
      id: 1,
      municipio: "Madero",
      description: "descrip",
      temperatura: 35,
      acciones: "acciones",
    },
    {
      id: 2,
      municipio: "Jaumave",
      description: "descrip",
      temperatura: 35,
      acciones: "acciones",
    },
    {
      id: 3,
      municipio: "Tampico",
      description: "descrip",
      temperatura: 35,
      acciones: "acciones",
    },
    {
      id: 4,
      municipio: "Reynosa",
      description: "descrip",
      temperatura: 35,
      acciones: "acciones",
    },
    {
      id: 5,
      municipio: "Burgos",
      description: "descrip",
      temperatura: 35,
      acciones: "acciones",
    },
    {
      id: 6,
      municipio: "Gonzalez",
      description: "descrip",
      temperatura: 35,
      acciones: "acciones",
    },
    {
      id: 7,
      municipio: "Matamoros",
      description: "descrip",
      temperatura: 35,
      acciones: "acciones",
    },
  ];

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
          {tableData.map((row) => (
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
