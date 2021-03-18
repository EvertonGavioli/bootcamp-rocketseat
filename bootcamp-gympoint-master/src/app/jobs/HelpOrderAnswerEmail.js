import Mail from '../../lib/Mail';

class HelpOrderAnswerMail {
  get key() {
    return 'helpOrderAnswerMail';
  }

  async handle({ data }) {
    const { name, email } = data.student;
    const { question, answer } = data;

    await Mail.sendMail({
      to: `${name} <${email}`,
      subject: 'Resposta Gympoint',
      template: 'helporderanswer',
      context: {
        student: name,
        question,
        answer,
      },
    });
  }
}

export default new HelpOrderAnswerMail();
