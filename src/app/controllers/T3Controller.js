import T3 from '../models/T3';

class T3Controller {
  async store(req, res) {
    const t3Exists = await T3.findOne({
      where: { text: req.body.text, id_t2: req.body.id_t2 },
    });

    if (t3Exists) {
      return res.status(400).json({ error: 'T3 already exists' });
    }

    const { id, text } = await T3.create(req.body);

    return res.json({
      id,
      text,
    });
  }
}

export default new T3Controller();
