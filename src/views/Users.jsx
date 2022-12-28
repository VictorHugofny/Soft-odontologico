import React from "react";
import { Link } from "react-router-dom";
import api from '../services/api';
import { useEffect, useState} from 'react';
import { toast } from "react-toastify";

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
        console.log(response);
        buscarUsuario()
    })
    
    toast.success("Usúario Deletado");    
  };    

  return (
    
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Usuários</h2>

      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="text-left font-bold p-2">Nome</th>
            <th className="text-left font-bold p-2">E-mail</th>
            <th className="text-left font-bold p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.id}>
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">
                <Link
                  to={`/users/${user.id}/edit`}
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