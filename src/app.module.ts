import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PruductsController } from './pruducts/pruducts.controller';

@Module({
  imports: [],
  controllers: [AppController, PruductsController],
  providers: [AppService],
})
export class AppModule {}
