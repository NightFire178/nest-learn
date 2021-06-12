import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/users.model';

export const postgres = SequelizeModule.forRoot({
  dialect: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'nest-learn',
  models: [User],
  autoLoadModels: true,
});
