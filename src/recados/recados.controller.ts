import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { RecadosService } from './recados.service';
import { Recado } from './entities/recado.entity';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}
  @HttpCode(HttpStatus.OK) // using the enum HttpStatus
  @Get()
  findAll() {
    return this.recadosService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): Recado {
    return this.recadosService.findOne(id);
  }
  @Post()
  create(@Body() createRecadoBody: CreateRecadoDto) {
    return this.recadosService.create(createRecadoBody);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRecadoDto: UpdateRecadoDto,
  ): Recado {
    return this.recadosService.update(id, updateRecadoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.recadosService.remove(id);
  }
}
