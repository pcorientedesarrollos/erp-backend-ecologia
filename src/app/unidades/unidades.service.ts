import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Unidade } from './entities/unidade.entity'; // ✅ Importación correcta
import { CreateUnidadeDto } from './dto/create-unidade.dto';
import { UpdateUnidadeDto } from './dto/update-unidade.dto';

@Injectable()
export class UnidadesService {
  constructor(
    @InjectRepository(Unidade)
    private readonly unidadRepository: Repository<Unidade>,
  ) {}

  create(createUnidadeDto: CreateUnidadeDto) {
    const nuevaUnidad = this.unidadRepository.create(createUnidadeDto);
    return this.unidadRepository.save(nuevaUnidad);
  }

  findAll() {
    return this.unidadRepository.find();
  }

  findOne(id: number) {
    return this.unidadRepository.findOneBy({ idunidad: id });
  }

  update(id: number, updateUnidadeDto: UpdateUnidadeDto) {
    return this.unidadRepository.update({ idunidad: id }, updateUnidadeDto);
  }

  remove(id: number) {
    return this.unidadRepository.delete({ idunidad: id });
  }
}
