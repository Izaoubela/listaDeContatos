import React, { useState, useEffect } from "react";
import "./App.css";
import Data from "./Components/data";
import List from "./Components/list";

function App() {
  const [listaDeContatos, setListaDeContatos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("listaDeContatos")) {
      setListaDeContatos(
        JSON.parse(localStorage.getItem("listaDeContatos"))[0]
      );
    }
  }, []);

  function adicionar(list) {
    setListaDeContatos(list);
    localStorage.setItem("listaDeContatos", JSON.stringify([list]));
  }

  return (
    <div className="w-full flex justify-center">
      <div className="w-[500px] bg-gray-300 p-5 mt-4 rounded-lg">
        <h1 className="text-center text-xl mb-2">LISTA DE CONTATOS</h1>
        <Data adicionarNaLista={adicionar} lista={listaDeContatos} />
        <hr className="my-4" />
        <List lista={listaDeContatos} />
      </div>
    </div>
  );
}

export default App;
