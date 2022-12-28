import api from '../services/api';
import { useState } from "react";
import axios from 'axios';
import TextMask from 'react-text-mask';
import { toast } from "react-toastify";
import './style.css';

const FormCadastroCliente = () => {
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  const [nome, setNome] = useState("");
  const [contato, setcontato] = useState("");
  const [cpf, setCpf] = useState("");

  //endereço
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');

  async function criarUsuario(){
    
    const response = await api.post("/users",{
      "user": {
           "name": nome,
           "email": email,
           "cpf": cpf,
           "phone": contato,
           "birthDate": data
       },
       "address": {
           "zipCode": cep,
           "city": cidade,
           "state": estado,
           "street": rua,
           "numberHome": parseInt(numero)
       }
   }).then((response) => {
      console.log(response);
      toast.success(response.data.message);
  })
  .catch((error) => {
    
    console.log(error);
    let mensagemErro = `${error.response.data.message}, faça os ajustes e tente novamente`;
    toast.error(mensagemErro);
  })
  
  }
  

  const handleSubmit = (event) => {
    event.preventDefault();
    
    criarUsuario()
    
    // envia o formulário
  };

  const handleChangeCidade = (event) => {
    setCidade(event.target.value);
  };

  const handleChangeEstado = (event) => {
    setEstado(event.target.value);
  };

  const handleChangeRua = (event) => {
    setRua(event.target.value);
  };

  const handleChangeNumero = (event) => {
    setNumero(event.target.value);
  };

  const handleChangeCep = async (event) => {
    setCep(event.target.value);
    
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setCidade(response.data.localidade);
      setEstado(response.data.uf);
      setRua(response.data.logradouro);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <form className="w-full max-w-sm flex-col align-items: flex-start" onSubmit={handleSubmit}>
        
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="nome"
          >
            Nome completo
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="nome"
            type="text"
            placeholder="João da Silva"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            
          />
      
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="cpf"
          >
            CPF
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="cpf"
            type="text"
            placeholder="123.456.789-01"
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
          />
      
    <label
      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
      for="data-nascimento"
      
    >
      Data de nascimento
    </label>
    <input
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      id="data-nascimento"
      type="date"
      value={data}
      onChange={(event) => setData(event.target.value)}
    />
    
    <label
      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
      for="contato"
    >
      Contato
    </label>
    <input
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      id="contato"
      type="text"
      placeholder="(11) 91234-5678"
      value={contato}
      onChange={(event) => setcontato(event.target.value)}
    />

    <label
      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
      for="email"
    >
      E-mail
    </label>

    <input
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      id="email"
      type="email"
      placeholder="joao@exemplo.com"
      value={email}
      onChange={(event) => setEmail(event.target.value)}
    />

    <div> 
    <br/>
    <label
      className="block text-black-400 font-bold md:text-left md:mb-2 pr-6">
      Endereço
    </label>
    <label className="text-gray-700 font-bold" htmlFor="cep">
        CEP:
      </label>
      <TextMask
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        type="text"
        id="cep"
        name="cep"
        placeholder="44790-000"
        value={cep}
        onChange={handleChangeCep}
        mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
        guide={true}
        placeholderChar={'\u2000'}
      />
  
      <label className="text-gray-700 font-bold" htmlFor="cidade">
        Cidade:
      </label>
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        type="text"
        id="cidade"
        name="cidade"
        placeholder="Campo Formoso"
        value={cidade}
        onChange={handleChangeCidade}
      />
      <label className="text-gray-700 font-bold" htmlFor="estado">
      Estado:
      </label>

      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        type="text"
        id="estado"
        name="estado"
        value={estado}
        placeholder="Bahia"
        onChange={handleChangeEstado}
      />
      <label className="text-gray-700 font-bold" htmlFor="rua">
        Rua:
      </label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          id="rua"
          name="rua"
          value={rua}
          onChange={handleChangeRua}
          placeholder="Rua dos bobos"
      />
      <label className="text-gray-700 font-bold" htmlFor="numero">
        Número da casa:
      </label>
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        type="text"
        id="numero"
        name="numero"
        placeholder="0"
        value={numero}
        onChange={handleChangeNumero}
    />
    </div>

   

    <button
      className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit">
      Enviar
    </button>
    



</form>
)}
export default FormCadastroCliente;