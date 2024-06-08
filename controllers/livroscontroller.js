const { Livros } = require('../models');


module.exports = class UserController {
    static async showAll(req, res) {
        try {
            const livros = await Livros.findAll();
            res.status(200).json({
                data: livros
            })
        } catch(error) {
            res.status(500).json({
                error: error.message
            })
        }
    }

    static async show(req, res) {
        try {
            const livro = await Livros.findByPk(req.params.id);
            res.status(200).json({
                data: livro
            });
        } catch(error) {
            res.status(500).json({
                error: error.message
            });
        }
    }

    static async create(req, res) {
        try {
            const novo_livro = await Livros.create({
                nome_livro: req.body.nome_livro,
                lancamento_livro: req.body.lancamento_livro
            })
            res.status(200).json({
                data: "Livro criado com sucesso!"
            })
        } catch(error) {
            res.status(500).json({
                error: error.message
            })
        }
    }

    static async update(req, res) {
        try {
            const livro = await Livros.findByPk(req.params.id);
            const atualizacao = await livro.update({
                nome_livro: req.body.nome_livro,
                lancamento_livro: req.body.lancamento_livro
            })
            res.status(200).json({
                data: "Livro atualizado com sucesso!"
            })
        } catch(error) {
            res.status(500).json({
                error: error.message
            })
        }
    }

    static async delete(req, res) {
        try {
            const livro = await Livros.findByPk(req.params.id);
            const exclusao = await livro.destroy();
            res.status(200).json({
                data: "Livro excluido com sucesso!"
            })
        } catch(error) {
            res.status(500).json({
                error: error.message
            })
        }
    }

}