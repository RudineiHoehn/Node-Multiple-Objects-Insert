import T4 from '../models/T4';

class T4Controller {
  async store(req, res) {
    const t4Exists = await T4.findOne({
      where: { text: req.body.text, id_t3: req.body.id_t3 },
    });

    if (t4Exists) {
      return res.status(400).json({ error: 'T4 already exists' });
    }

    const { id, text } = await T4.create(req.body);

    return res.json({
      id,
      text,
    });
  }
}

export default new T4Controller();
