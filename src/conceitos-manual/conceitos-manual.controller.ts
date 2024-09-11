import { Controller, Get } from '@nestjs/common';
import { ConceitosManualService } from './conceitos-manual.service';

@Controller('conceitos-manual')
export class ConceitosManaualController {
  constructor(
    private readonly conceitosManualService: ConceitosManualService,
  ) {}

  @Get('conceitos-manuais')
  home(): string {
    return this.conceitosManualService.solucionaHome();
  }
}
