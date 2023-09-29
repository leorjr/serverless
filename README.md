# SERVERLESS API

É uma aplicação que permite a execução de funções/endpoints na AWS (lambdas).

## ENDPOINTS

A seguir, são apresentados exemplos de endpoints da API e seus retornos:

### Listar todos os Employees cadastrados:

- **Endpoint:** `https://ssk4dqh8gi.execute-api.sa-east-1.amazonaws.com/employee`
- **Método:** GET
- **Parâmetros da URL:** Nenhum
- **Corpo da Requisição (JSON):**

```json
    sem corpo
```

-- **Resposta (JSON):**

```json
[
  {
    "id": "651466bce44acee168b9cf2a",
    "name": "teste",
    "age": 32,
    "office": "office test"
  }
]
```

### Criar um Employee:

- **Endpoint:** `https://ssk4dqh8gi.execute-api.sa-east-1.amazonaws.com/employee`
- **Método:** POST
- **Corpo da Requisição (JSON):**

```json
{
  "name": "teste",
  "age": 32,
  "office": "office test"
}
```

-- **Resposta (JSON):**

```json
{
  "id": "651466bce44acee168b9cf2a",
  "name": "teste",
  "age": 32,
  "office": "office test"
}
```

### Atualizar um Employee:

- **Endpoint:** `https://ssk4dqh8gi.execute-api.sa-east-1.amazonaws.com/employee/{id}`
- **Método:** PUT
- **Parâmetros da URL:** id do employee
- **Corpo da Requisição (JSON):**

```json
{
  "name": "test atualizado",
  "age": 32,
  "office": "office atualizado"
}
```

-- **Resposta (JSON):**

```json
{
  "id": "651466bce44acee168b9cf2a",
  "name": "test atualizado",
  "age": 32,
  "office": "office atualizado"
}
```

### Deletar um Employee:

- **Endpoint:** `https://ssk4dqh8gi.execute-api.sa-east-1.amazonaws.com/employee/{id}`
- **Método:** DELETE
- **Parâmetros da URL:** id do employee
- **Corpo da Requisição (JSON):**

```json
sem corpo
```

-- **Resposta (JSON):**

```json
{
  "message": "employee ID_EMPLOYEE has been deleted"
}
```

## Como Baixar e Rodar o Projeto Localmente?

Siga os passos abaixo para baixar e executar o projeto em seu ambiente local:

1. Clone o repositório do projeto para o seu ambiente local:

```
    git clone https://github.com/leorjr/serverless
```

2. Renomeie o arquivo `.env.example` para `.env` e preencha as variáveis necessárias para o funcionamento do projeto.

3. Instale as dependencias do projeto, com o comando:

```
    npm i
```

4. Rode o seguinte comando, em seu terminal:

```
    npm run dev
```

Após seguir esses passos, sua aplicação estará rodando em sua máquina local, no endereço ao qual aparece em seu terminal e estará pronta para receber requisições;

### Testes

Para os rodar os testes que foram implementados, basta rodar o seguinte comando:

```
  npm run test
```
