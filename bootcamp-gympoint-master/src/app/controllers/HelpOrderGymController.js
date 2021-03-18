import * as Yup from 'yup';

import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

import HelpOrderAnswerEmail from '../jobs/HelpOrderAnswerEmail';
import Queue from '../../lib/Queue';

class HelpOrderGymController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const helpOrder = await HelpOrder.findAll({
      where: { answer_at: null },
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

  async update(req, res) {
    const schema = Yup.object().shape({
      answer: Yup.string()
        .min(6)
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { id } = req.params;
    const { answer } = req.body;

    const helpOrder = await HelpOrder.findByPk(id);

    if (!helpOrder) {
      return res.status(400).json({ error: 'help order not found' });
    }

    const answer_at = new Date();

    const { student_id, question, createdAt } = await helpOrder.update({
      answer,
      answer_at,
    });

    const { name, email } = await Student.findByPk(student_id);

    const data = {
      id,
      student: { id: student_id, name, email },
      question,
      answer,
      answer_at,
      createdAt,
    };

    // Send Mail
    await Queue.add(HelpOrderAnswerEmail.key, data);

    return res.json(data);
  }
}

export default new HelpOrderGymController();
