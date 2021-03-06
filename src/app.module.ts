import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { ConfigurationsModule } from './configurations.module';

@Module({
  imports: [ConfigurationsModule, DatabaseModule, UsersModule],
})
export class AppModule {}
