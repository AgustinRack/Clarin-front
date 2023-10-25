import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";

function Home() {
  return (
    <div className="App">
      <div className="title">
        <h1>CLARÍN</h1>
      </div>
      <div className="subtitle">
        <h2>CONTROL DE EMPLEADOS</h2>
      </div>
      <div className="button-cont">
        <Link to={"/signup"} id="link">
          {" "}
          <button value="registrarse" type="submit" className="ui-btn">
            <span>Registrate</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
