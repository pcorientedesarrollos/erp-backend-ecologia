// src/viajes-detalles/viajes-detalles.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ViajeDetalle } from './entities/viajes-detalle.entity';
import { CreateViajeDetalleDto } from './dto/create-viajes-detalle.dto';
import { UpdateViajeDetalleDto } from './dto/update-viajes-detalle.dto';

@Injectable()
export class ViajesDetallesService {
  constructor(
    @InjectRepository(ViajeDetalle)
    private readonly viajeDetalleRepository: Repository<ViajeDetalle>,
  ) {}

  create(dto: CreateViajeDetalleDto) {
    const nuevoDetalle = this.viajeDetalleRepository.create(dto);
    return this.viajeDetalleRepository.save(nuevoDetalle);
  }

  findAll() {
    return this.viajeDetalleRepository.find();
  }

  async findOne(id: number) {
    const detalle = await this.viajeDetalleRepository.findOneBy({ idViajeDetalle: id });
    if (!detalle) {
      throw new NotFoundException(`El detalle de viaje con ID '${id}' no fue encontrado.`);
    }
    return detalle;
  }

  async update(id: number, dto: UpdateViajeDetalleDto) {
    const detalle = await this.findOne(id);
    Object.assign(detalle, dto);
    return this.viajeDetalleRepository.save(detalle);
  }

  async remove(id: number) {
    const detalle = await this.findOne(id);
    await this.viajeDetalleRepository.remove(detalle);
    return detalle;
  }
}