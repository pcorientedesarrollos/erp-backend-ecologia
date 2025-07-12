import { Injectable } from '@nestjs/common';
import { CreateTiposUnidadDto } from './dto/create-tipos-unidad.dto';
import { UpdateTiposUnidadDto } from './dto/update-tipos-unidad.dto';

@Injectable()
export class TiposUnidadService {
  create(createTiposUnidadDto: CreateTiposUnidadDto) {
    return 'This action adds a new tiposUnidad';
  }

  findAll() {
    return `This action returns all tiposUnidad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tiposUnidad`;
  }

  update(id: number, updateTiposUnidadDto: UpdateTiposUnidadDto) {
    return `This action updates a #${id} tiposUnidad`;
  }

  remove(id: number) {
    return `This action removes a #${id} tiposUnidad`;
  }
}
