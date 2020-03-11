import Sequelize, { Model } from 'sequelize';

class T1 extends Model {
  static init(sequelize) {
    super.init(
      {
        text: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default T1;
