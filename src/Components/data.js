import React from "react";

function Data({ adicionarNaLista, lista }) {
  const [nome, setNome] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [email, setEmail] = React.useState("");

  function handleNome(event) {
    setNome(event.target.value);
  }

  function handleTelefone(evento) {
    setTelefone(evento.target.value);
  }

  function handleEmail(evento1) {
    setEmail(evento1.target.value);
  }

  function cliqueiNoBotao(e) {
    e.preventDefault();
    adicionarNaLista([
      ...lista,
      { nome: nome, telefone: telefone, email: email }
    ]);
    setNome("");
    setTelefone("");
    setEmail("");
  }

  return (
    <form onSubmit={cliqueiNoBotao}>
      <div className="py-4 flex justify-between gap-1 items-center">
        <label className="w-32 text-right" htmlFor="nome">
          NOME:
        </label>
        <input
          className="w-full px-2 py-1 rounded-sm"
          id="nome"
          value={nome || ""}
          type="text"
          onChange={handleNome}
          placeholder="Insira seu nome"
        />
      </div>

      <div className="py-4 flex justify-between gap-1 items-center">
        <label className="w-32 text-right" htmlFor="telefone">
          TELEFONE:
        </label>
        <input
          className="w-full px-2 py-1 rounded-sm"
          id="telefone"
          value={telefone || ""}
          type="text"
          onChange={handleTelefone}
          placeholder="Insira seu telefone"
        />
      </div>
      <div className="py-4 flex justify-between gap-1 items-center">
        <label className="w-32 text-right" htmlFor="email">
          EMAIL:
        </label>
        <input
          className="w-full px-2 py-1 rounded-sm"
          id="email"
          value={email || ""}
          type="email"
          onChange={handleEmail}
          placeholder="Insira seu email"
        />
      </div>

      <div className="py-4">
        <button
          className="w-full bg-violet-500 py-4 text-white rounded-lg"
          onClick={cliqueiNoBotao}
        >
          INSERIR
        </button>
      </div>
    </form>
  );
}

export default Data;
