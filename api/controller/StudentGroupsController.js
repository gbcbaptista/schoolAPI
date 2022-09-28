const database = require('../models');
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class StudentGroupsController {
    static async getAllStudentGroups(req, res) {
        const { start_date, end_date } = req.query
        const where = {}
        start_date || end_date ? where.start_date = {} : null
        start_date ? where.start_date[Op.gte] = start_date : null
        end_date ? where.start_date[Op.lte] = end_date : null
        console.log(where)
        try {
            const allStudentGroups = await database.StudentGroups.findAll({ where })
            return res.status(200).json(allStudentGroups);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    // static async getAllStudentGroups(req, res) {
    //     try {
    //         const allStudentGroups = await database.StudentGroups.findAll()
    //         return res.status(200).json(allStudentGroups);
    //     } catch (error) {
    //         return res.status(500).json(error.message);
    //     }
        
    // }

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

    static async updateStudentGroup(req, res) {
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

    static async restoreStudentGroup(req, res) {
        const { id } = req.params
        try {
            await database.StudentGroups.restore( { where: { id: Number(id) } })
            return res.status(200).json({ message: `Student Group id: ${id} restored!`})
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}



module.exports = StudentGroupsController;