import React from "react";
import { Link } from "react-router-dom";
import api from '../services/api';
import { useEffect, useState} from 'react';
import { toast } from "react-toastify";
import "./table.css"

export default function UserList() {
  let users = [];
  const [user, setUser] = useState([]);

  async function buscarUsuario(){
    const response = await api.get("/users").then((response) => {
      response.data.users.forEach(user => {
        users.push({
          id: user.id, name: user.name, email: user.email
        })
      })

      setUser(users);
  })
  .catch((error) => {
    console.log(error);
  })}

  //Toda vez que roda a aplica
  //consumindo API com axios
  useEffect(()=>{
    buscarUsuario();
      },[])

    async function excluirUser(id){
      const response = await api.delete(`/users/${id}`).then((response) => {
        //console.log(response);
        buscarUsuario()
    })
    
    toast.success("Usúario Deletado");    
  };    

  return (
    
    <div className="px-4 py-6 overflow-hidden">
      <h2 className="text-2xl font-bold mb-4">Usuários</h2>

      <table className="table text-black-400 border-separate space-y-3 text-sm">
        <thead className= "bg-blue-800 text-gray-100">
          <tr className="border border-slate-700">
            <th className="p-2">Nome</th>
            <th className="p-2">E-mail</th>
            <th className="p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.id} className = "bg-blue-300">
              <td className="p-2 text-black-800">{user.name}</td>
              <td className="p-2 text-black-800">{user.email}</td>
              <td className="p-2 text-black-800">
                <Link to ={`/RegisterUser/${user.id}`}
                  className="text-blue-600 hover:underline"
                >
                  Editar
                </Link>
                {" | "}
                <button className="text-red-600 hover:underline" onClick={() => excluirUser(user.id)}>Excluir</button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}