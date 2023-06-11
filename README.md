# App

GymPass styled app.

# RF (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de usuário logado;
- [x] Deve ser possível obter o número de check-ins realizado pelo usuário logado;
- [x] Dever ser possivel o usuário obter seu histórico de check-ins;
- [] Deve ser possível o usuário buscar academias mais próximas;
- [] Deve ser possivel o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia;

# RNs (Regras de Negocios)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-in no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [] O check-in só pode ser validado até em 20 minutos após criado;
- [] O check-in só pode ser validado por administradores;
- [] A academia só pode ser cadastrada por administradores;

# RNFs (Requisitos Não Funcionais) 

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas as listas de dados precisam estar paginadas com 20 items por página;
- [] O usuário deve ser identificado por um JWT (JSON web token);