import { Module } from '@nestjs/common';
import { postgres } from './postgres';

@Module({
  imports: [postgres],
})
export class DatabaseModule {}
