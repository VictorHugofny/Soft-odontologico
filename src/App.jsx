import React from 'react';
import Routes from "./routes";
import { ToastContainer } from "react-toastify"; // Importamos o Toastify
import "react-toastify/dist/ReactToastify.css"; // O estilo do Toastify

function App() {

  return (
    <div>
      <ToastContainer autoClose={8000} />
      <Routes/>
    </div>
  )
}

export default App
