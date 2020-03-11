import T1 from '../models/T1';

class T1Controller {
  async store(req, res) {
    const t1Exists = await T1.findOne({ where: { text: req.body.text } });
    if (t1Exists) {
      return res.status(400).json({ error: 'T1 already exists' });
    }

    const { id, text } = await T1.create(req.body);

    return res.json({
      id,
      text,
    });
  }
}

export default new T1Controller();
