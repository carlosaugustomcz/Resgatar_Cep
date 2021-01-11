# API CEP
Projeto API CEP

Criação de uma Api para resgatar o CEP.

# Tecnologias :

*	Node 12.16.3.
* axios: 0.21.1
*	Express 4.17.1
*	Nodemon 2.0.6
*	Sucrase 3.16.0
* yarn

# Como Executar
* clonar o projeto do repositório (GitHub)

# Como executar a API:
na pasta do projeto no command prompt execute:

* yarn Build

depois execute 

* yarn prod

# Documentação das Rotas:
GET Retorna CEP:  

http://localhost:3333/cep?cep=57010240

PARAMS
  
  cep: 57010240

GEt Retorna Endereço:
http://localhost:3333/endereco?uf=al&cidade=maceio&logradouro=monte castelo

PARAMS
uf: AL

cidade: Maceio

logradouro: monte castelo
