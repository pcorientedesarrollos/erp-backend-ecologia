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

  /**
   * Crea un nuevo cliente en la base de datos.
   * Asigna la fecha de registro actual.
   */
  create(dto: CreateClienteDto) {
    const nuevoCliente = this.clienteRepository.create({
      ...dto,
      fechaRegistroCliente: new Date(), // El servidor debe controlar la fecha de creación
    });
    return this.clienteRepository.save(nuevoCliente);
  }

  /**
   * Devuelve todos los clientes.
   */
  findAll() {
    return this.clienteRepository.find();
  }

  /**
   * Busca un cliente por su ID.
   * Si no lo encuentra, lanza un error 404 Not Found.
   */
  async findOne(id: number) {
    const cliente = await this.clienteRepository.findOneBy({ id });
    if (!cliente) {
      throw new NotFoundException(`El cliente con el ID '${id}' no fue encontrado.`);
    }
    return cliente;
  }

  /**
   * Actualiza un cliente por su ID.
   * Devuelve el cliente actualizado.
   * Si no lo encuentra, lanza un error 404 Not Found.
   */
  async update(id: number, dto: UpdateClienteDto) {
    // preload busca por ID y fusiona el DTO, devolviendo la entidad lista para guardar.
    const cliente = await this.clienteRepository.preload({
      id: id,
      ...dto,
    });

    if (!cliente) {
      throw new NotFoundException(`No se pudo encontrar el cliente con ID '${id}' para actualizar.`);
    }

    // Guarda la entidad fusionada y la devuelve.
    return this.clienteRepository.save(cliente);
  }

  /**
   * Elimina un cliente por su ID.
   * Devuelve el cliente que fue eliminado.
   * Si no lo encuentra, lanza un error 404 Not Found.
   */
  async remove(id: number) {
    // Primero, encontramos el cliente para asegurarnos de que existe.
    // Reutilizamos nuestro propio método findOne que ya maneja el error 404.
    const cliente = await this.findOne(id);

    // Si existe, lo eliminamos. remove() es ideal porque opera sobre la entidad.
    await this.clienteRepository.remove(cliente);

    // Devolver el cliente eliminado puede ser útil para el frontend.
    return cliente;
  }
}