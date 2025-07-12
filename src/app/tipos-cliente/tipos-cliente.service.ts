import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TiposCliente } from './entities/tipos-cliente.entity';
import { CreateTiposClienteDto } from './dto/create-tipos-cliente.dto';

@Injectable()
export class TiposClienteService {
  constructor(
    @InjectRepository(TiposCliente)
    private readonly repo: Repository<TiposCliente>,
  ) {}

  findAll() {
    return this.repo.find();
  }

  create(data: CreateTiposClienteDto) {
    const nuevo = this.repo.create(data);
    return this.repo.save(nuevo);
  }

  async remove(id: number) {
    await this.repo.delete(id);
  }
}
