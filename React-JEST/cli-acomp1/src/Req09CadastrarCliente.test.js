import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App.js";  // Importa o componente a ser testado

test("ct01 - verifica se titulo esta na pagina", () => {
  // Renderiza o componente App
  render(<App />);
  const textElement = screen.getByText(/gestão de clientes/i);
  expect(textElement).toBeInTheDocument();
});

test("ct02 - ao clicar em cadastrar deve navegar para ClienteCadastrarView", () => {
  render(<App />);

  // Verifica se o botão "Cadastrar" está presente
  const cadastrarButton = screen.getByText("Cadastrar");
  expect(cadastrarButton).toBeInTheDocument();

  // Simula um clique no botão "Cadastrar"
  fireEvent.click(cadastrarButton);

  // Verifica se ClienteCadastrarView é renderizado
  expect(screen.getByText("Cadastrar Cliente")).toBeInTheDocument();
});
test("ct03 - preenche o formulário de cadastro de cliente e verifica se os valores foram incluidos", async () => {
  render(<App />);
  // Verifica se o botão "Cadastrar" está presente
  const cadastrarButton = screen.getByText("Cadastrar");
  expect(cadastrarButton).toBeInTheDocument();
  // Simula um clique no botão "Cadastrar"
  fireEvent.click(cadastrarButton);
  // Verifica se ClienteCadastrarView é renderizado
  expect(screen.getByText("Cadastrar Cliente")).toBeInTheDocument();
  // Verifica se ClienteCadastrarView é renderizado
  const cpfInput = await screen.findByTestId("cpf");
  const nomeInput = await screen.findByTestId("nome");
  const cepInput = await screen.findByTestId("cep");
  const emailInput = await screen.findByTestId("email");
  await userEvent.type(cpfInput, "123.456.789-00");
  await userEvent.type(nomeInput, "João da Silva");
  await userEvent.type(cepInput, "12345-678");
  await userEvent.type(emailInput, "joao.silva@example.com");
  expect(cpfInput).toHaveValue("123.456.789-00");
  expect(nomeInput).toHaveValue("João da Silva");
  expect(cepInput).toHaveValue("12345-678");
  expect(emailInput).toHaveValue("joao.silva@example.com");
  const confirmarButton = screen.getByText("Confirmar");
  userEvent.click(confirmarButton);
  });