import Sequelize, { Model } from 'sequelize';

class T3 extends Model {
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

  static associate(models) {
    this.belongsTo(models.T2, { foreignKey: 'id_t2' });
  }
}

export default T3;
