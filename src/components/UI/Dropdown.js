import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";
import classes from "./Dropdown.module.css"

const MuiSelect = (props) => {
  const [selectedEstado, setSelectedEstado] = useState('');

  // const DUMMY_DATA = [
  //   { id: 1, estado: "Jalisco", value: "JLSC" },
  //   { id: 2, estado: "Nuevo León", value: "NVLN" },
  //   { id: 3, estado: "CDMX", value: "CDMX" },
  // ];

  const onChangleHandler = (e) => {
    console.log(e.target.value)
    setSelectedEstado(e.target.value)
  }
  return (
    <Box width="250px" className={classes.container} >
      <TextField
        label="Selecciona estado"
        select
        fullWidth
        value={selectedEstado}
        onChange={onChangleHandler}
      >
        {props.estadosDB.map(({ id, estado, value }) => {
          return (
            <MenuItem key={id} value={value}>
              {estado}
            </MenuItem>
          );
        })}
      </TextField>
    </Box>
  );
};

export default MuiSelect;

// import { Form } from "react-bootstrap";

// const Dropdown = (props) => {
//   return (
//     <Form.Group className="mb-3">
//       <Form.Label>Busca el hospital</Form.Label>
//       <Form.Select defaultValue={"DEFAULT"} onChange={(e) => props.onChange(e)}>
//         <option value="DEFAULT" disabled>
//           Selecciona un hospital
//         </option>
//         {props.hospitals.map((item) => {
//           return (
//             <option key={item.id} value={item.id} name={item.name}>
//               {item.name}
//             </option>
//           );
//         })}
//       </Form.Select>
//     </Form.Group>
//   );
// };

// export default Dropdown;
