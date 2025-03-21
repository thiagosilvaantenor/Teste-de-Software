
import React, { useState } from "react";
import ClienteCadastrarView from "./componentes/cliente_cadastrar/ClienteCadastrarView";
import ClienteConsultaView from "./componentes/cliente_consulta/ClienteConsultaView";
import "./AppStyles.css";

function App() {
  const [paginaAtual, setPaginaAtual] = useState(null);
  const [clientes, setClientes] = useState([
    {
      id: 1,
      cpf: "123.456.789-00",
      nome: "João Silva",
      cep: "12345-678",
      endereco: "Rua A, 123",
      email: "joao@example.com",
      dataCadastro: "2023-01-01",
    },
  ]);

  const adicionarCliente = (novoCliente) => {
    setClientes([...clientes, novoCliente]);
  };

  const voltarParaHome = () => {
    setPaginaAtual(null);
  };

  const renderizarPagina = () => {
    switch (paginaAtual) {
      case "cadastrar":
        return (
          <ClienteCadastrarView
            adicionarCliente={adicionarCliente}
            onCancelar={voltarParaHome}
          />
        );
      case "consultar":
        return <ClienteConsultaView clientes={clientes} onCancelar={voltarParaHome} />;
      default:
        return (
          <div className="info-box">
            <button onClick={() => setPaginaAtual("cadastrar")}>Cadastrar</button>
            <button onClick={() => setPaginaAtual("consultar")}>Consultar</button>
            <button onClick={() => setPaginaAtual("alterar")}>Alterar</button>
            <button onClick={() => setPaginaAtual("excluir")}>Excluir</button>
            
          </div>
        );
    }
  };

  return (
    <div className="container">
      <h3>Gestão de Clientes</h3>
      {renderizarPagina()}
    </div>
  );
}

export default App;
