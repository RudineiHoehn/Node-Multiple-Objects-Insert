import Sequelize, { Model } from 'sequelize';

class T4 extends Model {
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
    this.belongsTo(models.T3, { foreignKey: 'id_t3' });
  }
}

export default T4;
