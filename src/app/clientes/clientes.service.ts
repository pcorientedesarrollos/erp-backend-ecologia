// src/clientes/clientes.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
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
    const nuevoCliente = this.clienteRepository.create({
      ...dto,
      fechaRegistroCliente: new Date(),
    });
    return this.clienteRepository.save(nuevoCliente);
  }

  findAll() {
    return this.clienteRepository.find();
  }

  async findOne(id: number) {
    // Se busca por la propiedad 'idCliente' de la clase.
    const cliente = await this.clienteRepository.findOneBy({ idCliente: id });
    if (!cliente) {
      throw new NotFoundException(`El cliente con el ID '${id}' no fue encontrado.`);
    }
    return cliente;
  }

  async update(id: number, dto: UpdateClienteDto) {
    const cliente = await this.findOne(id);
    Object.assign(cliente, dto);
    return this.clienteRepository.save(cliente);
  }

  async remove(id: number) {
    const cliente = await this.findOne(id);
    await this.clienteRepository.remove(cliente);
    return cliente;
  }
}