import { Injectable, NotFoundException } from '@nestjs/common';
import { Recado } from './entities/recado.entity';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';

@Injectable()
export class RecadosService {
  private lastId = 1;
  private recados: Recado[] = [
    {
      id: this.lastId,
      text: 'Hello',
      from: 'John',
      to: 'Doe',
      readed: false,
      date: new Date(),
    },
  ];
  findAll() {
    return this.recados;
  }

  findOne(id: string) {
    const recado = this.recados.find((recado) => recado.id === +id);

    if (recado) return recado;

    if (!recado) {
      throw new NotFoundException('Recado not found');
    }
  }

  create(createRecadoDto: CreateRecadoDto) {
    this.lastId++;
    const id = this.lastId;
    const newRecado = {
      id,
      ...createRecadoDto,
      readed: false,
      date: new Date(),
    };
    this.recados.push(newRecado);
    return newRecado;
  }

  update(id: string, updateRecadoDto: UpdateRecadoDto) {
    const index = this.recados.findIndex((recado) => recado.id === +id);

    if (index < 0) {
      throw new NotFoundException('Recado not found');
    }

    const existingRecado = this.recados[index];
    this.recados[index] = { ...existingRecado, ...updateRecadoDto };

    return this.recados[index];
  }

  remove(id: number) {
    const index = this.recados.findIndex((recado) => recado.id === id);
    if (index < 0) {
      throw new NotFoundException('Recado not found');
    }

    this.recados.splice(index, 1);
  }
}
