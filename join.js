import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  var [nombre, setNome] = useState("");
  var [Apellido, setApellido] = useState("");
  var [User, setUser] = useState("");

  function enviar(evt) {
    console.log("Nombre:", nombre);
    console.log("Apellido:", Apellido);
    console.log("User :", User);
  }

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <font face="Franklin Gothic Heavy">
        <h4>Inicia sesión o regístrate ahora</h4>
      </font>

      <p>
        Nombre:
        <input
          placeholder="Nombre"
          onChange={(evt) => setNome(evt.target.value)}
        />
      </p>
      <p>
        Apellido:
        <input
          placeholder="Apellido"
          onChange={(evt) => setApellido(evt.target.value)}
        />
      </p>
      <p>
        User:
        <input
          placeholder="User name"
          onChange={(evt) => setUser(evt.target.value)}
        />
      </p>
      <p>
        contraseña:
        <input
          type="mínimo de 8 caracteres"
          onChange={(evt) => setUser(evt.target.value)}
        />
      </p>
      <a href="https://google.com" target="_blank">
        <button onClick={enviar}>Iniciar sesión</button>
      </a>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
