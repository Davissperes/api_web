const { Autor } = require('../models');


module.exports = class AutorController {
    static async showAll(req, res) {
        try {
            const autor = await Autor.findAll();
            res.status(200).json({
                data: autor
            })
        } catch(error) {
            res.status(500).json({
                error: error.message
            })
        }
    }

    static async show(req, res) {
        try {
            const autor = await Autor.findByPk(req.params.id);
            res.status(200).json({
                data: autor
            });
        } catch(error) {
            res.status(500).json({
                error: error.message
            });
        }
    }

    static async create(req, res) {
        try {
            const novo_autor = await Autor.create({
                nome_autor: req.body.nome_autor,
                data_nascimento: req.body.data_nascimento
            })
            res.status(200).json({
                data: "autor criado com sucesso!"
            })
        } catch(error) {
            res.status(500).json({
                error: error.message
            })
        }
    }

    static async update(req, res) {
        try {
            const autor = await Autor.findByPk(req.params.id);
            const atualizacao = await autor.update({
                nome_autor: req.body.nome_autor,
                data_nascimento: req.body.data_nascimento
            })
            res.status(200).json({
                data: "autor atualizado com sucesso!"
            })
        } catch(error) {
            res.status(500).json({
                error: error.message
            })
        }
    }

    static async delete(req, res) {
        try {
            const autor = await Autor.findByPk(req.params.id);
            const exclusao = await autor.destroy();
            res.status(200).json({
                data: "autor excluido com sucesso!"
            })
        } catch(error) {
            res.status(500).json({
                error: error.message
            })
        }
    }

}