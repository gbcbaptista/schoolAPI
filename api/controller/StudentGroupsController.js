const database = require('../models');

class StudentGroupsController {
    static async getAllStudentGroups(req, res) {
        try {
            allStudentGroups = await database.StudentGroups.findAll()
            return res.status(200).json(allStudentGroups);
        } catch (error) {
            return res.status(500).json(error.message);
        }
        
    }

    static async getStudentGroupById(req, res) {
        const { id } = req.params
        try {
            const StudentGroup = await database.StudentGroups.findOne( { where: { id: Number(id) }})
            res.status(200).json(StudentGroup)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createStudentGroup(req, res) {
        const newStudentGroup = req.body
        try {
            const newStudentGroupCreated = await database.StudentGroups.create(newStudentGroup);
            res.status(200).json(newStudentGroupCreated)

        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async updateCStudentGroup(req, res) {
        const { id } = req.params
        const updateData = req.body
        try {
            await database.StudentGroups.update(updateData, { where: { id: Number(id) } })
            const updatedStudentGroup = await database.StudentGroups.findOne( { where: { id: Number(id) } })
            res.status(201).json(updatedStudentGroup);
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async deleteStudentGroup(req, res) {
        const { id } = req.params
        try {
            await database.StudentGroups.destroy( { where: { id: Number(id) } });
            res.status(201).json({ message: "StudentGroup deleted!" })  
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}



module.exports = StudentGroupsController;