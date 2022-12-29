import { useEffect, useState } from "react";
import './style.css'
import api from '../services/api';
import { toast } from "react-toastify";
import {useParams, useNavigate} from 'react-router-dom';

const FormCadastroPagamento = () => {
  const {id} = useParams();
  const [valorTotal, setValorTotal] = useState("");
  const [entrada, setEntrada] = useState("");
  const [qtdParcelas, setQtdParcelas] = useState("");
  const [dataVencimento, setDataVencimento] = useState("");
  const [cliente, setCliente] = useState("");
  const [situacao, setSituacao] = useState("");
  const [user, setUser] = useState([]);
  const [bloqueado, setBlock] = useState(null);

  async function buscarPagamentos(){
    if(id){
      const response = await api.get(`/payments/${id}`).then((response) => {
        let dados = response.data.paymentData;
        let usuario = dados.user;

        //convertendo o formato da data para Americano
        let dataFormatada = dados.expireAt.substring(0,dados.expireAt.indexOf("T")).split("-");
        let dataFinal = dataFormatada[0]+"-"+dataFormatada[1]+"-"+dataFormatada[2];

        setValorTotal(dados.totalValue);
        setEntrada(dados.entryValue);
        setQtdParcelas(dados.installments);
        setDataVencimento(dataFinal);
        setCliente(dados.userId);
        setSituacao(dados.status);
        setUser([{id: dados.userId, nome: usuario.name}]);
    })

  .catch((error) => {
    //console.log(error);
  })}

}

  useEffect(()=>{
    if(valorTotal && qtdParcelas){
      calcularEntrada(valorTotal, qtdParcelas);
    }
    
  },[valorTotal, qtdParcelas])

  useEffect(()=>{
    buscarPagamentos()
    if(bloqueado == null){
      setBlock(id ? true : false)
    }
    
  },[])

  async function buscarUsuario(){
    const response = await api.get("/users").then((response) => {
      let users = [];

      response.data.users.forEach(user => {
        users.push({
          id: user.id, nome: user.name
        })
      })

      setUser(users);
  })
  .catch((error) => {
    //console.log(error);
  })}

  function calcularEntrada(total, parcelas){
    let calculo = total / parcelas
    setEntrada(calculo.toFixed(2));
  }

  async function criarPagamento(user){
     
    if(!id){
    console.log(valorTotal, entrada, qtdParcelas, user, dataVencimento)
    
    const response = await api.post("/payments",
    {
      "totalValue": parseInt(valorTotal),
      "entryValue":  parseInt(entrada),
      "status": situacao == "true" ? true : false,
      "installments":  parseInt(qtdParcelas),
      "userId": user,
      "expireAt": dataVencimento
  }).then((response) => {
      //console.log(response);
      toast.success(response.data.message);
  })
  .catch((error) => {
    
    //console.log(error);
    let mensagemErro = `${error.response.data.message}, faça os ajustes e tente novamente`;
    toast.error(mensagemErro);
  })
  }
  else if(id){
    const response = await api.patch(`/payments/${id}`,{
        "totalValue": parseInt(valorTotal),
        "entryValue":  parseInt(entrada),
        "status": situacao == "true" ? true : false,
        "installments":  parseInt(qtdParcelas),
        "userId": user,
        //"expireAt": dataVencimento
    }).then((response) => {
        //console.log(response);
        toast.success(response.data.message);
    })
    .catch((error) => {
      
      //console.log(error);
      let mensagemErro = `${error.response.data.message}, faça os ajustes e tente novamente`;
      toast.error(mensagemErro);
    })
  }
}

  const handleSubmit = (event) => {
    event.preventDefault();
    criarPagamento(cliente);
    // envia o formulário e salva os dados do pagamento
  };

  return (
    <form className="mx-20 my-10 w-full max-w-sm flex-col align-items: flex-start" onSubmit={handleSubmit}>
      <label
        className="block text-black-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
        for="cliente"
      >
        Cliente
      </label>
      <select
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="cliente"
        value={cliente}
        disabled={bloqueado}
        onClick={() => buscarUsuario()}
        onChange={
          (event) => {
            setCliente(event.target.value)
          }
        }
      >
      <option value="">Selecione o cliente</option>
      {user.map((c) => (
        <option key={c.id} value={c.id}>
          {c.nome}
        </option>
      ))}
      </select>

      <label
        className="block text-black-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
        for="valor-total">
        Valor total
      </label>
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="valor-total"
        type="number"
        min="0"
        value={valorTotal}
        disabled={bloqueado}
        onChange={(event) => {
          setValorTotal(event.target.value)
          
        }}
      />
      <label
        className="block text-black-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
        for="qtd-parcelas">
        Quantidade de parcelas
      </label>
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="qtd-parcelas"
        type="number"
        min="1"
        max="12"
        disabled={bloqueado}
        value={qtdParcelas}
        onChange={(event) => setQtdParcelas(event.target.value)}
      />
  
      <label
        className="block text-black-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
        for="entrada">
        Entrada
      </label>
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="entrada"
        type="number"
        min="0"
        max="99999"
        step="0.0000000000001"
        disabled={bloqueado}
        value={entrada}
        onChange={(event) => setEntrada(event.target.value)}
      />

      <label
        className="block text-black-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
        for="data-vencimento"
      >
        Data de vencimento
      </label>
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="data-vencimento"
        type="date"
        value={dataVencimento}
        disabled={bloqueado}
        onChange={(event) => {
          setDataVencimento(event.target.value)
          alert(dataVencimento)
        } }
      />

      <label
        className="block text-black-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
        for="cliente"
      >
        Situação
      </label>
      <select
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="cliente"
        value={situacao}
        onChange={
          (event) => {
            setSituacao(event.target.value)
          }
        }
      >
        <option value="">Selecione o cliente</option>
      
        <option key="pago" value="false">
          Pago
        </option>
        <option key="aberto" value="true">
          Em aberto
        </option>
          
      </select>

      <button
        className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit">
        Enviar
      </button>
    </form>
  )}
      
export default FormCadastroPagamento