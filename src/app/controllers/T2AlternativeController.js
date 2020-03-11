import T2 from '../models/T2';
import T3 from '../models/T3';
import T4 from '../models/T4';
import T5 from '../models/T5';

class T2Controller {
  async store(req, res) {
    const list = req.body.t2;
    const errorList = [];
    const insertedList = [];

    list.map(item => {
      const t2Exists = false;
      //const t2Exists = await T2.findOne({ where: { text: item.text } });

      if (t2Exists) {
        //item.id = t1Exists.id;
        item.message = 'T2 already exists';
        errorList.push({ item });
      } else {
        const id = 0;
        //const { id, text } = await T2.create(item);
        item.id = id;

        const listT3 = item.t3;
        listT3.map(itemT3 => {
          itemT3.id_T2 = id;
          console.log(itemT3);
          //const { idT3, textT3 } = await T3.create(itemT3);

          const listT4 = itemT3.t4;
          listT4.map(itemT4 => {
            itemT4.id_T3 = itemT3.id;
            console.log(itemT4);
            //const { idT4, textT4 } = await T4.create(itemT4);
          });
        });

        const listT5 = item.t5;
        listT5.map(itemT5 => {
          itemT5.id_T2 = id;
          console.log(itemT5);
          //const { idT3, textT5 } = await T5.create(itemT5);
        });

        insertedList.push(item);
      }

      console.log(item.text);
    });

    const localStatus = errorList.length > 0 ? 400 : 200;
    return res
      .status(localStatus)
      .json({ errors: errorList, inserted: insertedList });
  }
}

export default new T2Controller();
