import React, { useEffect, useState, useCallback } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  estados: [],
  login: (token) => {},
  logout: () => {},
  getAllEstados: (estadosAPI) => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remainingDuration = adjExpirationTime - currentTime;
  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");
  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

// const retrieveInitialStates = () => {
//   const url =
//     "https://react-http-5cc8c-default-rtdb.firebaseio.com/estados.json/";
//   const transformData = (dataObj) => {
//     const loadedData = [];
//     for (const key in dataObj) {
//       loadedData.push({
//         id: key,
//         estado: dataObj[key].name,
//         value: dataObj[key].value,
//       });
//     }

//     // EstadosCtx.getAllEstados(loadedData);
//     console.log("presssss");
//     return {retrieveStates:loadedData};
    
//   };
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => transformData(data));
// };

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token; //de true/false value a true/false boolean

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  let initialEstados;
  const [estados, setEstados] = useState(initialEstados);
  const getAllEstadosHandler = (estadosAPI) => {
    setEstados(estadosAPI);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    estados: estados,
    getAllEstados: getAllEstadosHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
