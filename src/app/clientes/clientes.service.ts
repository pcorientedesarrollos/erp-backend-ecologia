import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  create(dto: CreateClienteDto) {
    const nuevo = this.clienteRepository.create(dto);
    return this.clienteRepository.save(nuevo);
  }

  findAll() {
    return this.clienteRepository.find();
  }

  findOne(id: number) {
    return this.clienteRepository.findOneBy({ idCliente: id });
  }

  update(id: number, dto: UpdateClienteDto) {
    return this.clienteRepository.update({ idCliente: id }, dto);
  }

  remove(id: number) {
    return this.clienteRepository.delete({ idCliente: id });
  }
}
