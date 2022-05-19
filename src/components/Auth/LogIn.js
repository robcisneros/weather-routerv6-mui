import AuthForm from "./AuthForm";
import useHttp from "../../hooks/use-http";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";

const LogIn = () => {
  const { sendRequest: fetchAPI } = useHttp();
  const EstadosCtx = useContext(AuthContext);

  const getInitialStatesHandler = () => {
    const url =
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

      EstadosCtx.getAllEstados(loadedData);
    };

    fetchAPI(
      {
        url: url,
      },
      transformData
    );
    console.log("a ver si funciona");
    console.log(EstadosCtx.estados);
  };

  return <AuthForm getInitialStates={getInitialStatesHandler} />;
};
export default LogIn;
