// src/clientes/entities/cliente.entity.ts

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clientes') // Especifica el nombre de la tabla en la BD
export class Cliente {
  @PrimaryGeneratedColumn({ name: 'idcliente' })
  id: number;

  @Column({ name: 'nombreCliente', type: 'varchar', length: 100 })
  nombreCliente: string;

  @Column({ name: 'telefonoCliente', type: 'varchar', length: 20 })
  telefonoCliente: string;

  @Column({ name: 'correoCliente', type: 'varchar', length: 100 })
  correoCliente: string;

  @Column({ name: 'idtipocliente', type: 'int' })
  idTipoCliente: number;

  @Column({ name: 'clienteActivo', type: 'smallint', default: 1 })
  clienteActivo: number; // Generalmente 1 para activo, 0 para inactivo

  @Column({ name: 'fechaRegistroCliente', type: 'timestamp' })
  fechaRegistroCliente: Date;

  @Column({ type: 'numeric', nullable: true })
  latitud: number;

  @Column({ type: 'numeric', nullable: true })
  longitud: number;
}