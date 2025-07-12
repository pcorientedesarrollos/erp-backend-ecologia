import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { TiposClienteService } from './tipos-cliente.service';
import { CreateTiposClienteDto } from './dto/create-tipos-cliente.dto';

@Controller('tipos-cliente')
export class TiposClienteController {
  constructor(private readonly service: TiposClienteService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() dto: CreateTiposClienteDto) {
    return this.service.create(dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
