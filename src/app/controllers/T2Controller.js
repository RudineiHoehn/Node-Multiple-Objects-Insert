import T2 from '../models/T2';

class T2Controller {
  async store(req, res) {
    const t2Exists = await T2.findOne({ where: { text: req.body.text } });

    if (t2Exists) {
      return res.status(400).json({ error: 'T2 already exists' });
    }

    const { id, text } = await T2.create(req.body);

    return res.json({
      id,
      text,
    });
  }
}

export default new T2Controller();
