const database = require('../models');

class PeopleController {
    static async getAllActivePeople(req, res) {
        try {
            const allActivePeople = await database.People.findAll()
            return res.status(200).json(allActivePeople);
        } catch (error) {
            return res.status(500).json(error.message);
        }
        
    }

    static async getAllPeople(req, res) {
        try {
            const allPeople = await database.People.scope('all').findAll()
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
    static async restorePerson( req, res ) {
        const { id } = req.params
        try {
            await database.People.restore( { where: { id: Number(id) } });
            return res.status(200).json({ message: `Person id: ${id} was restored!` })
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async getARegistration(req, res) {
        const { studentId, registrationId } = req.params
        try {
            const registration = await database.Registrations.findOne( {
                 where: { 
                    id: Number(registrationId),
                    student_id: Number(studentId)
                },
                })
            res.status(200).json(registration)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createRegistration(req, res) {
        const { studentId } = req.params
        const newRegistration = { ...req.body, student_id: Number(studentId)}
        try {
            const newRegistrationCreated = await database.Registrations.create(newRegistration);
            res.status(200).json(newRegistrationCreated)

        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async updateRegistration(req, res) {
        const { studentId, registrationId } = req.params
        const newData = req.body
        try {
            await database.Registrations.update(newData, { 
                where: { 
                    id: Number(registrationId),
                    student_id: Number(studentId)
                } })
            const updatedRegistration = await database.Registrations.findOne( { where: { id: Number(registrationId) } })
            res.status(201).json(updatedRegistration);
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async deleteRegistration(req, res) {
        const { studentId, registrationId } = req.params
        try {
            await database.Registrations.destroy( { where: { id: Number(registrationId) } });
            res.status(201).json({ message: `registration ${registrationId} deleted` })  
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async restoreRegistration( req, res ) {
        const { studentId, registrationId } = req.params
        try {
            await database.Registrations.restore( { where: {
                id: Number(registrationId),
            student_id: Number(studentId) } });
            return res.status(200).json({ message: `Registration id: ${registrationId} was restored!` })
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async getRegistrations( req, res ) {
        const { studentId } = req.params
        try {
            const person = await database.People.findOne({ where: { id: Number(studentId)}})
            const registrations = await person.getConfirmedRegistrations()
            return res.status(200).json(registrations)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

module.exports = PeopleController;