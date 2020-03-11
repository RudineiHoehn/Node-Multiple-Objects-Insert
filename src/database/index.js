import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import T1 from '../app/models/T1';
import T2 from '../app/models/T2';
import T3 from '../app/models/T3';
import T4 from '../app/models/T4';
import T5 from '../app/models/T5';

const models = [T1, T2, T3, T4, T5];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
