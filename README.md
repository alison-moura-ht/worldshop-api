# Wordshop API

## Requisitos

- Cadastro de usuário
- Login de usuário
- Cadastro de cliente
- Cadastro de produto
- Cadastro de venda
- Relatórios de vendas semanais

## Entidades

### Usuário

| Campo       | Tipo        | Obrigatório |
| ----------- | ----------- | ----------- |
| Nome        | String      | Sim         |
| Email       | String      | Sim         |
| Senha       | String      | Sim         |

### Cliente

| Campo       | Tipo        | Obrigatório |
| ----------- | ----------- | ----------- |
| Nome        | String      | Sim         |
| Email       | String      | Sim         |
| CPF         | String      | Sim         |
| CEP         | String      | Sim         |

### Produto

| Campo       | Tipo        | Obrigatório |
| ----------- | ----------- | ----------- |
| Descrição   | String      | Sim         |
| Detalhes    | String      | Não         |
| Valor Un.   | Number      | Sim         |

### Venda

| Campo       | Tipo            | Obrigatório |
| ----------- | -----------     | ----------- |
| Cliente     | Cliente         | Sim         |
| Produtos    | Array<Produto>  | Sim         |
| Valor Total | Number          | Sim         |
| Data        | Date            | Sim         |