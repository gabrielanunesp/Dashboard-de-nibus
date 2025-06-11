const express = require('express');
const cors = require('cors'); // IMPORTANTE
const app = express();
const port = 3001;

// Permitir requisições do frontend
app.use(cors());

const dadosOnibus = [
  {
    id: 1,
    linha: '875C-10',
    sentido: 'Centro',
    localizacao: {
      lat: -23.561684,
      lng: -46.655981
    }
  },
  {
    id: 2,
    linha: '875C-10',
    sentido: 'Bairro',
    localizacao: {
      lat: -23.565982,
      lng: -46.658123
    }
  }
];

// Rota simples pra teste
app.get('/', (req, res) => {
  res.send('Servidor backend está rodando 🎉');
});

// Rota de dados de ônibus
app.get('/onibus', (req, res) => {
  console.log('Rota /onibus chamada');
  res.json(dadosOnibus);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
