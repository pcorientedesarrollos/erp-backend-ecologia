import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ruta } from './entities/ruta.entity';
import { CreateRutaDto } from './dto/create-ruta.dto';
import { UpdateRutaDto } from './dto/update-ruta.dto';

@Injectable()
export class RutasService {
  constructor(
    @InjectRepository(Ruta)
    private readonly rutaRepository: Repository<Ruta>,
  ) {}

  create(dto: CreateRutaDto) {
    const nueva = this.rutaRepository.create(dto);
    return this.rutaRepository.save(nueva);
  }

  findAll() {
    return this.rutaRepository.find();
  }

  findOne(id: number) {
    return this.rutaRepository.findOneBy({ idRuta: id });
  }

  update(id: number, dto: UpdateRutaDto) {
    return this.rutaRepository.update({ idRuta: id }, dto);
  }

  remove(id: number) {
    return this.rutaRepository.delete({ idRuta: id });
  }
}
