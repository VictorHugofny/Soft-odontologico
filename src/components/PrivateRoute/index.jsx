import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ isAuthenticated, children }) {
  let [logado, setLogado] = useState({});

  setTimeout(() => {
    setLogado(localStorage.getItem('authenticated'));
  }, 1000);
  
  if (!logado) {
    return <Navigate to="/" replace />
  }
  return children
}

export default PrivateRoute