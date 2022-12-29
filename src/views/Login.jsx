import React from 'react';
import { useEffect, useState} from 'react';
import { toast } from "react-toastify";
import api from '../services/api';

function LoginForm() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  async function logar(){
    const response = await api.post("/login",{
      "username": login,
      "password": senha
  }).then((response) => {
      console.log(response);
      toast.success("Logado com sucesso");
  })
  .catch((error) => {
    console.log(error);
    let mensagemErro = `${error.response.data.message}, faça os ajustes e tente novamente`;
    toast.error(mensagemErro);
  })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    logar()
  };

  return (
    <form className="flex flex-col p-4 bg-white shadow-md rounded-md" onSubmit={handleSubmit}>
      <label className="text-sm font-bold mb-2" htmlFor="username">
        Nome de usuário:
      </label>
      <input
        className="py-2 px-3 bg-gray-200 rounded-md"
        type="text"
        id="username"
        required
        value={login}
        onChange={(event) => setLogin(event.target.value)}
      />
      <label className="text-sm font-bold mb-2 mt-4" htmlFor="password">
        Senha:
      </label>
      <input
        className="py-2 px-3 bg-gray-200 rounded-md"
        type="password"
        id="password"
        required
        value={senha}
        onChange={(event) => setSenha(event.target.value)}
      />
      <button
        className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Entrar
      </button>

      
    </form>
  );
}

export default LoginForm;