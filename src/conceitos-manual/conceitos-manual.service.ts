import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosManualService {
  solucionaHome(): string {
    return 'Solucionando home pelo service';
  }
}
