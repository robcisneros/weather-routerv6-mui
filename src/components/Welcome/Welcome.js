import AuthContext from "../../store/auth-context";
import { useContext } from "react";
const Welcome = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <section>
      <h1> {isLoggedIn ? "Ya puedes empezar a realizar tus búsquedas!" : "Bienvenido, logeate para comenzar!"} </h1>
    </section>
  );
};
export default Welcome;
