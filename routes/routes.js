const LivroController = require('../controllers/livroscontroller')
const AutorController = require('../controllers/autorcontroller')

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send("Bem vindo a api!");
})

// rotas de livros
router.get('/livros', LivroController.showAll);

router.get('/livros/:id', LivroController.show);

router.post('/livros', LivroController.create);

router.put('/livros/:id', LivroController.update);

router.delete('/livros/:id', LivroController.delete);

// rotas de autores
router.get('/autor', AutorController.showAll);

router.get('/autor/:id', AutorController.show);

router.post('/autor', AutorController.create);

router.put('/autor/:id', AutorController.update);

router.delete('/autor/:id', AutorController.delete);

module.exports = router