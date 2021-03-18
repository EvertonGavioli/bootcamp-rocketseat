import { subDays } from 'date-fns';
import { Op } from 'sequelize';

import Checkin from '../models/Checkin';
import Student from '../models/Student';

class CheckinController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const { id: student_id } = req.params;

    const checkins = await Checkin.findAll({
      where: { student_id },
      order: ['created_at'],
      attributes: ['id', 'created_at'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email', 'age', 'weight', 'height'],
        },
      ],
    });

    return res.json(checkins);
  }

  async store(req, res) {
    const { id } = req.params;

    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(400).json({ error: 'Student not found' });
    }

    const period_end = new Date();
    const period_start = subDays(period_end, 7);

    const qtde_checkins = await Checkin.count({
      where: {
        student_id: id,
        created_at: {
          [Op.and]: [{ [Op.gte]: period_start }, { [Op.lte]: period_end }],
        },
      },
    });

    if (qtde_checkins >= 5) {
      return res.status(400).json({
        error: 'Can only do 5 checkins within 7 calendar days',
      });
    }

    const checkin = await Checkin.create({ student_id: id });

    return res.json(checkin);
  }
}

export default new CheckinController();
