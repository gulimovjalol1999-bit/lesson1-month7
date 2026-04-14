import { Module } from '@nestjs/common';
import { ItemModule } from './item/item.module';

@Module({
  imports: [ItemModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
