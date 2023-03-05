import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./globalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App /> <GlobalStyle />
  </>
);

//quando vc importar o globalStyle no index.js tem que colocar dentro de uma div pois no react
//nao pode ter nao pode ter dois elementos juntos e tipo sanduiche 
