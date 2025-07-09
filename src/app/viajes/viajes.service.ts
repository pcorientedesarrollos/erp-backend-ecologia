import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Viaje } from './entities/viaje.entity';
import { CreateViajeDto } from './dto/create-viaje.dto';
import { UpdateViajeDto } from './dto/update-viaje.dto';

@Injectable()
export class ViajesService {
  constructor(
    @InjectRepository(Viaje)
    private readonly viajeRepository: Repository<Viaje>,
  ) {}

  create(dto: CreateViajeDto) {
    const { fechaViaje, firmaViaje, ...restOfDto } = dto;

    // Convertimos explícitamente el string a Date y manejamos el Buffer
    const nuevoViaje = this.viajeRepository.create({
      ...restOfDto,
      // CORRECCIÓN 1: Convertir la fecha de string a Date
      fechaViaje: new Date(fechaViaje),
      fechaRegistroViaje: new Date(),
      viajeCompletado: dto.viajeCompletado ?? 0,
      firmaViaje: firmaViaje ? Buffer.from(firmaViaje, 'base64') : undefined,
    });
    return this.viajeRepository.save(nuevoViaje);
  }

  findAll() {
    return this.viajeRepository.find();
  }

  async findOne(id: number) {
    const viaje = await this.viajeRepository.findOneBy({ idViaje: id });
    if (!viaje) {
      throw new NotFoundException(`El viaje con el ID '${id}' no fue encontrado.`);
    }
    return viaje;
  }

  async update(id: number, dto: UpdateViajeDto) {
    // CORRECCIÓN 2: Refactorización completa del método update
    // 1. Buscamos la entidad existente. findOne ya maneja el error 404.
    const viaje = await this.findOne(id);

    // 2. Extraemos las propiedades que necesitan tratamiento especial
    const { fechaViaje, firmaViaje, ...restOfDto } = dto;

    // 3. Fusionamos las propiedades simples del DTO en la entidad encontrada
    Object.assign(viaje, restOfDto);

    // 4. Manejamos las conversiones de tipo explícitamente
    if (fechaViaje) {
      viaje.fechaViaje = new Date(fechaViaje);
    }
    
    // Si 'firmaViaje' viene en el DTO (puede ser un string o null)
    if (firmaViaje !== undefined) {
      // Si es un string (base64), lo convertimos a Buffer. Si es null, lo asignamos para borrar la firma.
      viaje.firmaViaje = firmaViaje ? Buffer.from(firmaViaje, 'base64') : null;
    }

    // 5. Guardamos la entidad actualizada
    return this.viajeRepository.save(viaje);
  }

  async remove(id: number) {
    const viaje = await this.findOne(id);
    await this.viajeRepository.remove(viaje);
    return viaje;
  }
}