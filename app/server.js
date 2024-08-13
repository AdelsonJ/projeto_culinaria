const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

// Configura o middleware CORS
app.use(cors());
app.use(express.json());

// Endpoint para obter e salvar tags
app.get('/tags', (req, res) => {
    const filePath = path.join(__dirname, '../public/json/tags.json'); // Corrigido para tags.json
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Erro ao ler o arquivo JSON');
        }
        res.send(data);
    });
});

app.post('/saveTags', (req, res) => {
    const newTags = req.body;
    const filePath = path.join(__dirname, '../public/json/tags.json'); // Corrigido para tags.json

    fs.writeFile(filePath, JSON.stringify(newTags, null, 2), 'utf8', (err) => {
        if (err) {
            return res.status(500).send('Erro ao salvar o arquivo JSON');
        }
        res.send('Dados das tags salvos com sucesso');
    });
});

// Endpoint para obter e salvar ingredientes
app.get('/ingredientes', (req, res) => {
    const filePath = path.join(__dirname, '../public/json/ingredientes.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Erro ao ler o arquivo JSON');
        }
        res.send(data);
    });
});

app.post('/saveIngredientes', (req, res) => {
    const newIngrediente = req.body;
    const filePath = path.join(__dirname, '../public/json/ingredientes.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') { // ENOENT significa que o arquivo não existe
            return res.status(500).send('Erro ao ler o arquivo JSON');
        }

        fs.writeFile(filePath, JSON.stringify(newIngrediente, null, 2), 'utf8', (err) => {
            if (err) {
                return res.status(500).send('Erro ao salvar o arquivo JSON');
            }
            res.send('Dados do ingrediente salvos com sucesso');
        });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
