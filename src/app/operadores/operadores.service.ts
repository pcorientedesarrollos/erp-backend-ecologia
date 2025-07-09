// src/operadores/operadores.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Operador } from './entities/operadore.entity';
import { CreateOperadorDto } from './dto/create-operadore.dto';
import { UpdateOperadorDto } from './dto/update-operadore.dto';

@Injectable()
export class OperadoresService {
  constructor(
    @InjectRepository(Operador)
    private readonly operadorRepository: Repository<Operador>,
  ) {}

  create(dto: CreateOperadorDto) {
    const nuevoOperador = this.operadorRepository.create({
      ...dto,
      fechaRegistroOperador: new Date(),
    });
    return this.operadorRepository.save(nuevoOperador);
  }

  findAll() {
    return this.operadorRepository.find();
  }

  async findOne(id: number) {
    const operador = await this.operadorRepository.findOneBy({ idOperador: id });
    if (!operador) {
      throw new NotFoundException(`El operador con el ID '${id}' no fue encontrado.`);
    }
    return operador;
  }

  async update(id: number, dto: UpdateOperadorDto) {
    const operador = await this.findOne(id);
    Object.assign(operador, dto);
    return this.operadorRepository.save(operador);
  }

  async remove(id: number) {
    const operador = await this.findOne(id);
    await this.operadorRepository.remove(operador);
    return operador;
  }
}