import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosAutomaticoService {
  solucionaHomeAutomatico(): string {
    return 'Solucionando home pelo service automatico';
  }
}
