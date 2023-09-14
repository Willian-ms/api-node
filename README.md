# api-node

API construída em parelelo ao curso "Criando APIs com Node" do balta.io.
Foi utilizado também o Postman para verificar todas as requisições presentes nesta API, em formato JSON.

*projeto em andamento

## Tecnologias Utilizadas
- Node.js
- Docker
- MongoDB
- Postman

## Rodar Aplicação Local

### Docker
Com Docker instalado, abrir cmd e rodar:
```
docker pull mongo
```
```
	docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=[usuário] -e MONGO_INITDB_ROOT_PASSWORD=[senha] mongo
```
Substituir "[usuário]" e "[senha]" pelos respectivos dados necessários.

Feito isso, poderá utilizar o studio 3T ou o MongoDB Compass como SGBDs.

### Aplicação
```
npm install
```
```
npm start
```
