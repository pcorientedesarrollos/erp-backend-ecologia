// src/clientes/entities/cliente.entity.ts

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clientes' })
export class Cliente {
  // <-- CAMBIO CRÍTICO: Renombramos la propiedad de idcliente a 'id'
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
  clienteActivo: number;

  @Column({ name: 'fechaRegistroCliente', type: 'timestamp' })
  fechaRegistroCliente: Date;

  @Column({ type: 'numeric', nullable: true })
  latitud: number | null;

  @Column({ type: 'numeric', nullable: true })
  longitud: number | null;
}