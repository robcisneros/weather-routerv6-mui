import classes from "./MainTable.module.css";
import MuiTable from "../MUI/MuiTable";

const MainTable = () => {
  return (
    <div className={classes.container}>
      <h1>Clima</h1>
      <MuiTable />
    </div>
  );
  
};

export default MainTable;
