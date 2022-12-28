import { Link } from "react-router-dom";

const Homepage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">Bem-vindo ao sistema de gerenciamento de pacientes e pagamentos</h1>
    <p className="mb-4">
      Neste sistema, você pode cadastrar os pacientes que atende em seu consultório odontológico, bem como os pagamentos realizados por eles.
    </p>
    <h2 className="text-2xl font-bold mb-2">Como cadastrar um paciente</h2>
    <ol className="list-decimal list-inside">
      <li className="mb-2">Clique no botão "Cadastrar paciente" no menu lateral</li>
      <li className="mb-2">Preencha o formulário com os dados do paciente</li>
      <li className="mb-2">Clique em "Salvar" para adicionar o paciente ao sistema</li>
    </ol>
    <p className="mb-4">
    Você também pode editar ou excluir pacientes e pagamentos já cadastrados clicando nos respectivos botões na listagem de pacientes e pagamentos.
    </p>
    <Link
    to="/RegisterUser"
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
    Cadastrar paciente
    </Link>
    <Link
    to="/RegisterPayment"
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
    >
    Cadastrar pagamento
    </Link>
</div>
);

export default Homepage;