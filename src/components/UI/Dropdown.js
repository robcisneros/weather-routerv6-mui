import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";
import classes from "./Dropdown.module.css"

const MuiSelect = (props) => {
  const [selectedEstado, setSelectedEstado] = useState('');

  const onChangleHandler = (e) => {
    const selectedOptionEstado = e.target.value;
    setSelectedEstado(selectedOptionEstado)
    props.onSelectedEstado(selectedOptionEstado)
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

