import React from 'react';

const ContatoForm = () => {
  return (
    <div>
      <form className="flex flex-col gap-10">
        <input
          type="text"
          name=""
          id=""
          placeholder="Digite o seu nome"
          className="h-14 w-[592px] bg-dark-300 px-6"
        />
        <input
          type="email"
          name=""
          id=""
          placeholder="Digite o seu e-mail"
          className="h-14 w-[592px] bg-dark-300 px-6"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Sobre o que você quer falar?"
          className="h-14 w-[592px] bg-dark-300 px-6"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Escolha qual departamento você quer conversar"
          className="h-14 w-[592px] bg-dark-300 px-6"
        />
        <input
          type="text"
          name=""
          id=""
          className="h-14 w-[592px] bg-dark-300 px-6"
        />
      </form>
    </div>
  );
};

export default ContatoForm;
