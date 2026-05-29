const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// --- MOCK DOS DADOS (Dados em Memória) ---
let petsDadosEmMemoria = [
    {
        id: 1,
        status: "Perdido",
        nome: "Fred",
        descricao: "Vira-lata caramelo, muito dócil.",
        local: "Bairro Jardim, São Paulo",
        contato: "11999999999",
        foto_url: ""
    },
    {
        id: 2,
        status: "Encontrado",
        nome: "Desconhecido",
        descricao: "Gato preto com coleira vermelha encontrado na praça.",
        local: "Centro, Bernardo",
        contato: "11888888888",
        foto_url: ""
    }
];

let proximoId = 3;

// --- CONTROLLER DA APLICAÇÃO (Métodos REST) ---
const PetController = {
    // GET - Listar todos os pets
    listar: (req, res) => {
        res.status(200).json(petsDadosEmMemoria);
    },

    // POST - Criar um novo pet
    criar: (req, res) => {
        const { status, nome, descricao, local, contato, foto_url } = req.body;

        if (!status || !descricao || !local || !contato) {
            return res.status(400).json({ erro: "Campos obrigatórios ausentes." });
        }

        const novoPet = {
            id: proximoId++,
            status,
            nome: nome || "Sem nome",
            descricao,
            local,
            contato,
            foto_url: foto_url || ""
        };

        petsDadosEmMemoria.push(novoPet);
        res.status(201).json(novoPet);
    },

    // PUT - Atualizar um pet existente pelo ID
    atualizar: (req, res) => {
        const idParam = parseInt(req.params.id);
        const { status, nome, descricao, local, contato, foto_url } = req.body;

        const petIndex = petsDadosEmMemoria.findIndex(p => p.id === idParam);

        if (petIndex === -1) {
            return res.status(404).json({ erro: "Pet não encontrado." });
        }

        petsDadosEmMemoria[petIndex] = {
            ...petsDadosEmMemoria[petIndex],
            status: status || petsDadosEmMemoria[petIndex].status,
            nome: nome || petsDadosEmMemoria[petIndex].nome,
            descricao: descricao || petsDadosEmMemoria[petIndex].descricao,
            local: local || petsDadosEmMemoria[petIndex].local,
            contato: contato || petsDadosEmMemoria[petIndex].contato,
            foto_url: foto_url || petsDadosEmMemoria[petIndex].foto_url
        };

        res.status(200).json(petsDadosEmMemoria[petIndex]);
    },

    // DELETE - Remover um pet pelo ID
    deletar: (req, res) => {
        const idParam = parseInt(req.params.id);
        const petIndex = petsDadosEmMemoria.findIndex(p => p.id === idParam);

        if (petIndex === -1) {
            return res.status(404).json({ erro: "Pet não encontrado." });
        }

        petsDadosEmMemoria.splice(petIndex, 1);
        res.status(200).json({ mensagem: "Anúncio do pet removido com sucesso." });
    }
};

// --- ROTAS DA API ---
app.get('/api/pets', PetController.listar);
app.post('/api/pets', PetController.criar);
app.put('/api/pets/:id', PetController.atualizar);
app.delete('/api/pets/:id', PetController.deletar);

app.listen(PORT, () => {
    console.log(`Servidor simulando API REST rodando em http://localhost:${PORT}`);
});