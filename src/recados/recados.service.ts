import { Injectable, NotFoundException } from '@nestjs/common';
import { Recado } from './entities/recado.entity';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RecadosService {
  constructor(
    @InjectRepository(Recado)
    private readonly recadoRepository: Repository<Recado>,
  ) {}

  async findAll() {
    const recados = await this.recadoRepository.find();
    return recados;
  }

  async findOne(id: number) {
    // const recado = this.recados.find((recado) => recado.id === +id);

    const recado = await this.recadoRepository.findOne({
      where: { id: id },
    });

    if (recado) return recado;

    if (!recado) {
      throw new NotFoundException('Recado not found');
    }
  }

  async create(createRecadoDto: CreateRecadoDto) {
    const newRecado = {
      ...createRecadoDto,
      readed: false,
      date: new Date(),
    };

    const recado = await this.recadoRepository.create(newRecado);
    return this.recadoRepository.save(recado);
  }

  async update(id: number, updateRecadoDto: UpdateRecadoDto) {
    const recado = await this.recadoRepository.preload({
      id,
      ...updateRecadoDto,
    });

    if (!recado) {
      throw new NotFoundException('Recado not found');
    }

    return this.recadoRepository.save(recado);
  }

  async remove(id: number) {
    const recado = await this.recadoRepository.findOneBy({
      id,
    });

    if (!recado) {
      throw new NotFoundException('Recado not found');
    }

    return this.recadoRepository.remove(recado);
  }
}
