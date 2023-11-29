import { Module } from '@nestjs/common';
import { ItemModule } from 'src/item/item.module';
import { RootController } from './root/root.controller';
import { RootService } from './root/root.service';

@Module({
  imports: [ItemModule],
  controllers: [RootController],
  providers: [RootService],
})
export class AppModule {}
