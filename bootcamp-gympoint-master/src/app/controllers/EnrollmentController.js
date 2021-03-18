import * as Yup from 'yup';
import { isBefore, parseISO, addMonths } from 'date-fns';
import { Op } from 'sequelize';

import Enrollment from '../models/Enrollment';
import Plan from '../models/Plan';
import Student from '../models/Student';

import EnrollmentEmail from '../jobs/EnrollmentEmail';
import Queue from '../../lib/Queue';

class EnrollmentController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const enrollment = await Enrollment.findAll({
      order: ['created_at'],
      attributes: ['id', 'start_date', 'end_date', 'price'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email', 'age', 'weight', 'height'],
        },
        {
          model: Plan,
          as: 'plan',
          attributes: ['id', 'title', 'duration', 'price'],
        },
      ],
    });

    return res.json(enrollment);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number()
        .integer()
        .positive()
        .required(),
      plan_id: Yup.number()
        .integer()
        .positive()
        .required(),
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { student_id, plan_id, start_date } = req.body;

    const student = await Student.findByPk(student_id);
    const plan = await Plan.findByPk(plan_id);

    if (!student) {
      return res.status(400).json({ error: 'student not found' });
    }

    if (!plan) {
      return res.status(400).json({ error: 'Plan not found' });
    }

    // #region verify start_date

    // Check for past dates
    const start_date_parsed = parseISO(start_date);

    if (isBefore(start_date_parsed, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted' });
    }

    // Check if the date is in the period of an active enrollment
    const enrollments = await Enrollment.findOne({
      where: {
        student_id,
        start_date: { [Op.lte]: start_date_parsed },
        end_date: { [Op.gte]: start_date_parsed },
      },
    });

    if (enrollments) {
      return res.status(400).json({
        error: 'there is already an active enrollment on this date',
      });
    }

    // #endregion

    const end_date = addMonths(start_date_parsed, plan.duration);
    const total = plan.duration * plan.price;

    const { id } = await Enrollment.create({
      student_id,
      plan_id,
      start_date: start_date_parsed,
      end_date,
      price: total,
    });

    const { name, email, age, weight, height } = student;
    const { title, duration, price } = plan;

    // Send Email
    const send_email = { name, email, title, end_date, total };

    await Queue.add(EnrollmentEmail.key, {
      send_email,
    });

    return res.json({
      id,
      student: {
        id: student_id,
        name,
        email,
        age,
        weight,
        height,
      },
      plan: {
        id: plan_id,
        title,
        duration,
        price,
      },
      start_date: start_date_parsed,
      end_date,
      price: total,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      plan_id: Yup.number()
        .integer()
        .positive(),
      start_date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { id } = req.params;
    const { start_date, plan_id } = req.body;

    if (!start_date && !plan_id) {
      return res.status(400).json({ error: 'no data to update' });
    }

    const enrollment = await Enrollment.findByPk(id, {
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email', 'age', 'weight', 'height'],
        },
      ],
    });

    if (!enrollment) {
      return res.status(400).json({ error: 'Enrollment not found' });
    }

    let plan_update;
    let start_date_update;

    // #region Find Plan

    if (plan_id) {
      plan_update = await Plan.findByPk(plan_id);

      if (!plan_update) {
        return res.status(400).json({ error: 'Plan not found' });
      }
    } else {
      plan_update = await Plan.findByPk(enrollment.plan_id);
    }

    // #endregion

    // #region start_date

    if (start_date) {
      // Check for past dates
      start_date_update = parseISO(start_date);

      if (isBefore(start_date_update, new Date())) {
        return res.status(400).json({ error: 'Past dates are not permitted' });
      }

      // Check if the date is in the period of an other active enrollment
      const { student_id } = enrollment;

      const enrollments = await Enrollment.findOne({
        where: {
          id: { [Op.ne]: id },
          student_id,
          start_date: { [Op.lt]: start_date_update },
          end_date: { [Op.gt]: start_date_update },
        },
      });

      if (enrollments) {
        return res.status(400).json({
          error: 'there is already an active enrollment on this date',
        });
      }
    } else {
      start_date_update = enrollment.start_date;
    }

    // #endregion

    const end_date = addMonths(start_date_update, plan_update.duration);
    const total = plan_update.duration * plan_update.price;

    const { id: plan_id_update } = plan_update;

    await enrollment.update({
      plan_id: plan_id_update,
      start_date: start_date_update,
      end_date,
      price: total,
    });

    const {
      id: student_id,
      name,
      email,
      age,
      weight,
      height,
    } = enrollment.student;
    const { title, duration, price } = plan_update;

    return res.json({
      id,
      student: {
        id: student_id,
        name,
        email,
        age,
        weight,
        height,
      },
      plan: {
        id: plan_id_update,
        title,
        duration,
        price,
      },
      start_date: start_date_update,
      end_date,
      price: total,
    });
  }

  async delete(req, res) {
    const { id } = req.params;

    const enrollment = await Enrollment.findByPk(id);

    if (!enrollment) {
      return res.status(400).json({ error: 'Enrollment not found' });
    }

    await enrollment.destroy(id);

    return res.status(204).send();
  }
}

export default new EnrollmentController();
