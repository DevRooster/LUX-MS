import BotonExit from "./components/BotonExit";
import BotonNav from "./components/BotonNav";

export function Dash() {
    return (
      <article className="login-container">
        <nav className="nav">
            <BotonNav nombreNav={"Home"}/>
            <BotonExit exitNav={"Cerrar"} url={"/"}/>
        </nav>
      </article>
    );
  }
  