const database = require('../models');

class PeopleController {
    static async getAllPeople(req, res) {
        try {
            const allPeople = await database.People.findAll()
            return res.status(200).json(allPeople);
        } catch (error) {
            return res.status(500).json(error.message);
        }
        
    }

    static async getPersonById(req, res) {
        const { id } = req.params
        try {
            const person = await database.People.findOne( { where: { id: Number(id) }})
            res.status(200).json(person)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createPerson(req, res) {
        const newPerson = req.body
        try {
            const newPersonCreated = await database.People.create(newPerson);
            res.status(200).json(newPersonCreated)

        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async updatePerson(req, res) {
        const { id } = req.params
        const updateData = req.body
        try {
            await database.People.update(updateData, { where: { id: Number(id) } })
            const updatedPerson = await database.People.findOne( { where: { id: Number(id) } })
            res.status(201).json(updatedPerson);
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async deletePerson(req, res) {
        const { id } = req.params
        try {
            await database.People.destroy( { where: { id: Number(id) } });
            res.status(201).json({ message: "Person deleted!" })  
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}



module.exports = PeopleController;