import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import MainHeader from "./components/layout/MainHeader";
import MainTable from "./components/MainTable/MainTable";
import NewTable from "./components/NewTable/NewTable";
import Welcome from "./components/Welcome/Welcome";
import AuthContext from "./store/auth-context";
import LogIn from "./components/Auth/LogIn";

function App() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Welcome /> } />
          {!isLoggedIn && ( <Route path="/auth" element={<LogIn />} /> )}
          {isLoggedIn && ( <Route path="/weather-table" element={<MainTable />} /> )}
          {isLoggedIn && ( <Route path="/new-data-weather" element={<NewTable />} /> )}
          <Route path="*" element={<Navigate replace to="/" /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
