import { Navigate, Route, Routes } from "react-router-dom";
import MainHeader from "./components/layout/MainHeader";
import MainTable from "./components/MainTable/MainTable";
import NewTable from "./components/NewTable/NewTable";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/weather-table" />} />
          <Route path="/weather-table" element={<MainTable />} />
          <Route path="/new-data-weather" element={<NewTable />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
