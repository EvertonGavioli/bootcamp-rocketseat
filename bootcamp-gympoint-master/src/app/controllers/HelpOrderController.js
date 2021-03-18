import * as Yup from 'yup';

import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

class HelpOrderController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const { id: student_id } = req.params;

    const helpOrder = await HelpOrder.findAll({
      where: { student_id },
      order: ['created_at'],
      attributes: ['id', 'question', 'answer', 'answer_at', 'created_at'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });

    return res.json(helpOrder);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      question: Yup.string()
        .min(6)
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { id } = req.params;
    const { question } = req.body;

    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(400).json({ error: 'Student not found' });
    }

    const { id: id_help_order } = await HelpOrder.create({
      student_id: id,
      question,
    });

    const { name, email } = student;

    return res.json({
      id: id_help_order,
      question,
      student: {
        id,
        name,
        email,
      },
    });
  }
}

export default new HelpOrderController();
