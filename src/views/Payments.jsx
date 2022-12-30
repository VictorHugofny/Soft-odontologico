import React from "react";
import { Link } from "react-router-dom";
import api from '../services/api';
import { useEffect, useState} from 'react';
import { toast } from "react-toastify";
import "./table.css"
export default function UserList() {
  const [payments, setPayments] = useState([]);

  async function buscarPagamentos(){
    const response = await api.get("/payments").then((response) => {
      //console.log(response.data)
      let paymentArray = [];

      response.data.paymentData.forEach(payment => {
        paymentArray.push({
          id: payment.id, 
          name: payment.user.name, 
          totalValue: payment.totalValue,
          entryValue: payment.entryValue,
          installments: payment.installments,
          userId: payment.userId,
          status: payment.status ? "Aberto" : "Fechado"
        })
      })

      setPayments(paymentArray);
  })
  .catch((error) => {
    //console.log(error);
  })}

  //Toda vez que roda a aplica
  //consumindo API com axios
  useEffect(()=>{
    buscarPagamentos();
      },[])

 

    async function excluirPagamento(id){
      const response = await api.delete(`/payment/${id}`).then((response) => {
        //console.log(response);
        buscarPagamentos()
    })
    
    toast.success("Pagamento Deletado");    
  };    

  return (
    
    <div className="px-4 py-6 overflow-hidden overflow-auto lg:overflow-visible">
      <h2 className="text-2xl font-bold mb-4 mx-4">Pagamentos</h2>

      <table className="table text-black-400 border-separate space-y-3 text-sm" >
        <thead className = "bg-blue-800 text-gray-100">
          <tr className="border border-slate-700">
            <th className="p-2">Nome</th>
            <th className="p-2">Valor Total</th>
            <th className="p-2">Valor de Entrada</th>
            <th className="p-2">N: Parcelas</th>
            <th className="p-2">Situação</th>
            <th className="p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id} className = "bg-blue-300">
              <td className="p-2 text-black-800">{payment.name}</td>
              <td className="p-2 text-black-100">{payment.totalValue}</td>
              <td className="p-2 text-black-100">{payment.entryValue}</td>
              <td className="p-2 text-black-100">{payment.installments}</td>
              <td className="p-2 text-black-100">{payment.status}</td>
              <td className="p-2 text-black-100">
                <Link
                  to={`/RegisterPayment/${payment.id}`}
                  className="text-blue-600 hover:underline"
                >
                  Editar
                </Link>
                {" | "}
                <button className="text-red-600 hover:underline" onClick={() => excluirPagamento(payment.id)}>Excluir</button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}