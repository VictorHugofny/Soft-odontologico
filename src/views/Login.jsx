import React from 'react';

function LoginForm() {
  return (
    <form className="flex flex-col p-4 bg-white shadow-md rounded-md">
      <label className="text-sm font-bold mb-2" htmlFor="username">
        Nome de usuário:
      </label>
      <input
        className="py-2 px-3 bg-gray-200 rounded-md"
        type="text"
        id="username"
        required
      />
      <label className="text-sm font-bold mb-2 mt-4" htmlFor="password">
        Senha:
      </label>
      <input
        className="py-2 px-3 bg-gray-200 rounded-md"
        type="password"
        id="password"
        required
      />
      <button
        className="mt-4 py-2 px-4 bg-blue-500 rounded-md text-white font-bold"
        type="submit"
      >
        Entrar
      </button>
    </form>
  );
}

export default LoginForm;