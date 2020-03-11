import Sequelize, { Model } from 'sequelize';

class T2 extends Model {
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

export default T2;
