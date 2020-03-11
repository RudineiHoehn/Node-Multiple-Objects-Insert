import T1 from '../models/T1';

class T1AlternativeController {
  async store(req, res) {
    const list = req.body.t1;
    const errorList = [];
    const insertedList = [];

    list.map(item => {
      console.log(item.text);

      const t1Exists = false;
      // const t1Exists = await T1.findOne({ where: { text: item.text } });
      if (t1Exists) {
        //item.id = t1Exists.id;
        item.message = 'T1 already exists';
        errorList.push({ item });
      } else {
        const id = 0;
        //const { id, text } = await T1.create(item);
        item.id = id;
        insertedList.push(item);
      }
    });

    const localStatus = errorList.length > 0 ? 400 : 200;
    return res
      .status(localStatus)
      .json({ errors: errorList, inserted: insertedList });
  }
}

export default new T1AlternativeController();
