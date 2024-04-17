# PassIn

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/alexjuniorarruda/Accounts/blob/main/LICENSE)

 Nessa aplicação é possivel fazer o cadastro de eventos, participantes e o check-in dos participantes. Esse projeto foi feito a partir do NLW Unite promovido pela [Rocketseat](https://www.rocketseat.com.br/).
 Nesse projeto usamos [TypeScript](https://www.typescriptlang.org/), [Fastify](https://fastify.dev/) para rotas, [Zod](https://zod.dev/) para a validação de entrada de dados e [Prisma](https://www.prisma.io/) para a comunicação e interação com o banco de dados([SQLite](https://www.sqlite.org/)). Usamos também a extensão [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) do VSCode para o teste de rotas.
 
 ### Tecnologias Utilizadas
 
 * [Nodejs](https://nodejs.org/en)
 * [SQLite](https://www.sqlite.org/)
 * [Insomnia](https://insomnia.rest/)

## Dependências e Versões Necessárias

* @fastify/cors: ^9.0.1
* @fastify/swagger: ^8.14.0
* @fastify/swagger-ui: ^3.0.0
* @prisma/client: ^5.11.0
* fastify: ^4.26.2
* fastify-type-provider-zod: ^1.1.9
* zod: ^3.22.4

## Como rodar o projeto ✅

- Fazer download do repositório
- Abrir o projeto no terminal
- Instalar as dependencias com o comando
  
```
npm install
```

- Renomear o arquivo .env.example para .env, dentro do arquivo .env deve conter a linha abaixo
  
```
DATABASE_URL="file:./dev.db"
```

- Criar o banco de dados com o comando
  
```
npx prisma migrate dev
```

- Executar o projeto
  
```
npm start
```

## 📌 Rotas

- Visão geral de toda a [documentação](http://localhost:3333/docs/), para gerar essa documentação eu usei o [Swagger UI](https://swagger.io/).

![Documentação Geral](https://github.com/alexjuniorarruda/passIn/assets/112874423/b631f9c7-261c-422f-9a8d-0292b8e6aaa4)

A aplicação possui três rotas, **events(eventos)**, **attendees(participantes)** e **check-ins**. Em events nos cadastramos os eventos, depois podemos cadastrar os participantes na rota attendees, e para verificar a presença do participante no eventos nós utilizamos a rota check-ins. Em todas as rotas utilizamos o Zod para fazer a validação da entrada de dados e as respostas que cada rota deve gerar.

# Autor

Alex Junior Arruda

https://www.linkedin.com/in/alex-jr-arruda/

