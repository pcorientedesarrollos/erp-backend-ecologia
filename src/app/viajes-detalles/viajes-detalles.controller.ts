// src/viajes-detalles/viajes-detalles.controller.ts

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ViajesDetallesService } from './viajes-detalles.service';
import { CreateViajeDetalleDto } from './dto/create-viajes-detalle.dto';
import { UpdateViajeDetalleDto } from './dto/update-viajes-detalle.dto';

@Controller('viajes-detalles')
export class ViajesDetallesController {
  constructor(private readonly viajesDetallesService: ViajesDetallesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateViajeDetalleDto) {
    return this.viajesDetallesService.create(dto);
  }

  @Get()
  findAll() {
    return this.viajesDetallesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.viajesDetallesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateViajeDetalleDto,
  ) {
    return this.viajesDetallesService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.viajesDetallesService.remove(id);
  }
}