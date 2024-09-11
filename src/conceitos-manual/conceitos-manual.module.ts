import { Module } from '@nestjs/common';
import { ConceitosManaualController } from './conceitos-manual.controller';
import { ConceitosManualService } from './conceitos-manual.service';

@Module({
  controllers: [ConceitosManaualController],
  providers: [ConceitosManualService],
})
export class ConceitosManualModule {}
