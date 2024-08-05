const express = require('express');
const cors = require('cors'); // Importa o pacote CORS
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

// Configura o middleware CORS
app.use(cors());
app.use(express.json());

// Endpoint para obter dados
app.get('/tags', (req, res) => {
    const filePath = path.join(__dirname, '../public/json/tags.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Erro ao ler o arquivo JSON');
        }
        res.send(data);
    });
});

// Endpoint para salvar dados
app.post('/saveTags', (req, res) => {
    const newTags = req.body;
    const filePath = path.join(__dirname, '../public/json/tags.json');

    fs.writeFile(filePath, JSON.stringify(newTags, null, 2), 'utf8', (err) => {
        if (err) {
            return res.status(500).send('Erro ao salvar o arquivo JSON');
        }
        res.send('Dados salvos com sucesso');
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
