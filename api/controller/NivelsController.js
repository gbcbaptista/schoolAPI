const database = require('../models');

class NivelsController {
    static async getAllNivels(req, res) {
        try {
            const allNivels = await database.Nivels.findAll()
            return res.status(200).json(allNivels);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getNivelById(req, res) {
        const { id } = req.params
        try {
            const nivel = await database.Nivels.findOne( { where: { id: Number(id) }})
            res.status(200).json(nivel)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createNivel(req, res) {
        const newNivel = req.body
        try {
            const newNivelCreated = await database.Nivels.create(newNivel);
            res.status(200).json(newNivelCreated)

        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async updateNivel(req, res) {
        const { id } = req.params
        const updateData = req.body
        try {
            await database.Nivels.update(updateData, { where: { id: Number(id) } })
            const updatedNivel = await database.Nivels.findOne( { where: { id: Number(id) } })
            res.status(201).json(updatedNivel);
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async deleteNivel(req, res) {
        const { id } = req.params
        try {
            await database.Nivels.destroy( { where: { id: Number(id) } });
            res.status(201).json({ message: "Nivel deleted!" })  
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async restoreNivel(req, res) {
        const { id } = req.params
        try {
            await database.Nivels.restore({ where: { id: Number(id) } })
            return res.status(200).json({ message: `Nivel id: ${id} restored!`})
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}



module.exports = NivelsController;