import classes from "./MainTable.module.css";
import MuiTable from "../MUI/MuiTable";

const MainTable = () => {
  

  return (
    <div className={classes.container}>
      <h1> With Material UI</h1>
      <MuiTable />
    </div>
  );
};

export default MainTable;
