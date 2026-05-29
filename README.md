# 🐾 Acha-Pet API — Sistema de Alertas de Animais Perdidos e Encontrados

Esta é uma API REST desenvolvida em Node.js com o framework Express para gerenciar o cadastro, atualização, listagem e remoção de alertas de animais sumidos ou localizados. A aplicação adota a arquitetura MVC (Model-View-Controller) e manipula um modelo de dados estruturado com armazenamento temporário de dados em memória volátil.

---

## 🛠️ Pré-requisitos para Execução

Antes de iniciar a aplicação, certifique-se de possuir instalado em seu sistema operacional:
1. **Node.js** (versão 18.x ou superior recomendada)
2. **NPM** (gerenciador de pacotes integrado ao Node.js)
3. Um cliente HTTP para testes de rotas (**Postman** ou **Insomnia**)

---

## 🚀 Como Executar a API Localmente

Siga o passo a passo abaixo para extrair, configurar e rodar o servidor:

### 1. Extração do Projeto
Extraia o conteúdo do arquivo compactado (`.zip`) em um diretório de sua preferência no computador.

### 2. Instalação das Dependências
Abra o terminal do seu sistema operacional (ou o terminal integrado do VS Code) apontando para a pasta raiz do projeto extraído (`/acha-pet-api`) e execute o comando abaixo para baixar as bibliotecas necessárias (`express` e `cors`): Com as dependências devidamente baixadas, execute o comando de inicialização do script principal:Bashnode server.js
```bash
npm install
```

### 3. Inicialização do servidor
O terminal exibirá a mensagem de confirmação de que os endpoints estão ativos:Servidor simulando API REST rodando em http://localhost:3000Nota: Mantenha esta janela de terminal aberta enquanto realiza os testes de requisições.

### 🧭 Estrutura de Endpoints Disponíveis (API REST)
A API expõe o recurso /api/pets aceitando operações através dos verbos HTTP padrões do protocolo REST:

*Método*: GET	Endpoint: /api/pets  Descrição: Recupera a lista completa de pets cadastrados em memória.	 Corpo da Requisição(JSON): Nenhum

Método: POST	Endpoint: /api/pets  Descrição:Cria um novo registro de alerta de pet no sistema.	 Corpo da Requisição(JSON): Objeto com propriedades do pet.

Método: PUT	Endpoint: /api/pets/:id  Descrição:	Altera dados de um pet existente localizando-o pelo ID na URL.  Corpo da Requisição(JSON): Campos a serem atualizados.

Método: DELETE	Endpoint: /api/pets/:id  Descrição:	Remove permanentemente o registro de um pet através do ID. Corpo da Requisição(JSON): Nenhum


---

### Part 2: Arquivo da Coleção de Endpoints (`Acha-Pet_API.postman_collection.json`)
*Para garantir o requisito da coleção importável, crie um novo arquivo chamado `Acha-Pet_API.json` dentro da pasta do projeto, copie o código estruturado abaixo na íntegra e salve-o. Ele pode ser importado diretamente indo em **Import** tanto no Postman quanto no Insomnia:*

```json
{
	"info": {
		"_postman_id": "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d",
		"name": "Acha-Pet API",
		"description": "Coleção de requests HTTP para validação dos controllers da aplicação Acha-Pet em memória.",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "Listar Pets",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/pets",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"pets"
					]
				},
				"description": "Retorna o array JSON contendo o mock e os dados de animais persistidos em memória."
			},
			"response": []
		},
		{
			"name": "Criar Anúncio",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"status\": \"Perdido\",\n  \"nome\": \"Pipoca\",\n  \"descricao\": \"Poodle branco bem pequeno, sumiu no centro.\",\n  \"local\": \"Bairro Centro\",\n  \"contato\": \"49999999999\",\n  \"foto_url\": \"\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/pets",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"pets"
					]
				},
				"description": "Injeta um novo objeto Pet coerente com o modelo de dados na lista em memória."
			},
			"response": []
		},
		{
			"name": "Atualizar Pet",
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"nome\": \"Fred Caramelo\",\n  \"descricao\": \"Vira-lata caramelo muito dócil. Usa coleira vermelha agora.\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/pets/1",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"pets",
						"1"
					]
				},
				"description": "Modifica parcialmente as propriedades do pet informado por parâmetro de rota (ID: 1)."
			},
			"response": []
		},
		{
			"name": "Deletar Anúncio",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/pets/2",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"pets",
						"2"
					]
				},
				"description": "Apaga da memória o objeto pet cujo ID corresponda ao enviado no parâmetro da URL (ID: 2)."
			},
			"response": []
		}
	]
}
