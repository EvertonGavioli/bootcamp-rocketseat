class UserController {
  async store(req, res) {
    return res.json({ rota: 'POST' });
  }

  async update(req, res) {
    return res.json({ rota: 'PUT' });
  }
}

export default new UserController();
