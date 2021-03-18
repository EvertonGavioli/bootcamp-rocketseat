import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class EnrollmentMail {
  get key() {
    return 'enrollmentMail';
  }

  async handle({ data }) {
    const { name, email, title, end_date, total } = data.send_email;

    await Mail.sendMail({
      to: `${name} <${email}`,
      subject: 'Matrícula Efetuada',
      template: 'enrollment',
      context: {
        student: name,
        plan: title,
        end_date: format(parseISO(end_date), "dd 'de' MMMM 'de' yyyy", {
          locale: pt,
        }),
        price: (total / 100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
      },
    });
  }
}

export default new EnrollmentMail();
