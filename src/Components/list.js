import React from "react";

function List({ lista }) {
  const formatName = text => {
    let names = text.split(" ");
    let firstName = names[0];
    let lasttName = names[names.length - 1];

    return `${firstName[0]}${lasttName[0]}`;
  };

  return (
    <div>
      <ul className="to-do-list">
        {lista.map((item, indice) => (
          <li className="flex gap-4" key={indice}>
            <div className="flex justify-center items-center">
              <span className="w-16 h-16 bg-gray-400 rounded-full flex justify-center items-center text-white uppercase">
                {formatName(item.nome)}
              </span>
            </div>
            <div className="w-full flex flex-col py-2 border-b border-white">
              <div className="flex gap-1">
                <strong>Nome:</strong>
                <span>{item.nome}</span>
              </div>
              <div className="flex gap-1">
                <strong>Telefone:</strong>
                <span>{item.telefone}</span>
              </div>
              <div className="flex gap-1">
                <strong>Email:</strong>
                <span>{item.email}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
