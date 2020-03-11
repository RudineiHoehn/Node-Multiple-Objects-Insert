import T5 from '../models/T5';

class T5Controller {
  async store(req, res) {
    const t5Exists = await T5.findOne({
      where: { text: req.body.text, id_t2: req.body.id_t2 },
    });

    if (t5Exists) {
      return res.status(400).json({ error: 'T5 already exists' });
    }

    const { id, text } = await T5.create(req.body);

    return res.json({
      id,
      text,
    });
  }
}

export default new T5Controller();
