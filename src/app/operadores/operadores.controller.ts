// src/operadores/operadores.controller.ts

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
import { OperadoresService } from './operadores.service';
import { CreateOperadorDto } from './dto/create-operadore.dto';
import { UpdateOperadorDto } from './dto/update-operadore.dto';

@Controller('operadores')
export class OperadoresController {
  constructor(private readonly operadoresService: OperadoresService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateOperadorDto) {
    return this.operadoresService.create(dto);
  }

  @Get()
  findAll() {
    return this.operadoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.operadoresService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateOperadorDto) {
    return this.operadoresService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.operadoresService.remove(id);
  }
}