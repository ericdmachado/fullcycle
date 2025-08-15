# Desafio Nginx com Node

Criar uma imagem com o **Nginx como proxy reverso** acessando o **Node** e imprimindo os registros no **MySQL** da tabela people.

Foi adicionado o Dockerize no app node e no nginx para que o node espere o banco de dados inicializar e o nginx inicie após o node.
Também foi criado um arquivo de inicialização do mysql para que ao criar o container, ele crie a tabela people no banco de dados.

## Exec

`docker compose up -d`
