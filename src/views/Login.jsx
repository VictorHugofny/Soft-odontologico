import React from 'react';
import { useEffect, useState} from 'react';
import { toast } from "react-toastify";
import api from '../services/api';
import { Link, useNavigate  } from 'react-router-dom';

function LoginForm() {
  const navigateTo  = useNavigate()
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [logado, setLogado] = useState("");

  useEffect(()=>{
    console.log(logado);
  },[logado])

  async function logar(){
    const response = await api.post("/login",{
      "username": login,
      "password": senha
  }).then((response) => {
      toast.success("Logado com sucesso");
      localStorage.setItem("authenticated",JSON.stringify(response.data.token))
      setLogado("true");
      navigateTo('/Home');
  })
  .catch((error) => {
    let mensagemErro = `${error.response.data.message}, faça os ajustes e tente novamente`;
    toast.error(mensagemErro);
  })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    logar()
  };

  return (
    <form className="flex flex-col p-14 px-20 bg-white shadow-md rounded-md" onSubmit={handleSubmit}>
      <label className="text-sm font-bold mb-3" htmlFor="username">
        Nome de usuário:
      </label>
      <input
        className="py-2 px-4 bg-gray-200 rounded-md"
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