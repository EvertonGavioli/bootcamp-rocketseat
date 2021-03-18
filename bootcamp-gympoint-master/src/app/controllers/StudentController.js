import * as Yup from 'yup';
import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .min(6)
        .max(255)
        .required(),
      email: Yup.string()
        .email()
        .max(255)
        .required(),
      age: Yup.number()
        .integer()
        .positive()
        .max(300)
        .required(),
      weight: Yup.number()
        .integer()
        .positive()
        .max(300000)
        .required(),
      height: Yup.number()
        .integer()
        .positive()
        .max(300)
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails.' });
    }

    const { email } = req.body;

    const studentExists = await Student.findOne({ where: { email } });

    if (studentExists) {
      return res.status(400).json({ error: 'Student already exists.' });
    }

    const { id, name, age, weight, height } = await Student.create(req.body);

    return res.json({
      id,
      name,
      email,
      age,
      weight,
      height,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .min(6)
        .max(255),
      email: Yup.string()
        .email()
        .max(255),
      age: Yup.number()
        .integer()
        .positive()
        .max(300),
      weight: Yup.number()
        .integer()
        .positive()
        .max(30000),
      height: Yup.number()
        .integer()
        .positive()
        .max(300),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails.' });
    }

    const { id } = req.params;
    const newEmail = req.body.email;

    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(401).json({ error: 'Student not found.' });
    }

    if (newEmail && newEmail !== student.email) {
      const studentExists = await Student.findOne({
        where: { email: newEmail },
      });

      if (studentExists) {
        return res.status(400).json({ error: 'Student already exists.' });
      }
    }

    const { name, email, age, weight, height } = await student.update(req.body);

    return res.json({
      id,
      name,
      email,
      age,
      weight,
      height,
    });
  }
}

export default new StudentController();
