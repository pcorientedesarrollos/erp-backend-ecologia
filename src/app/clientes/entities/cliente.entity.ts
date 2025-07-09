// src/clientes/entities/cliente.entity.ts

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clientes')
export class Cliente {
  // <-- CAMBIO CRÍTICO: Renombramos la propiedad de idcliente a 'id'
  @PrimaryGeneratedColumn()
  idCliente: number;

  @Column({type: 'varchar', length: 100 })
  nombreCliente: string;

  @Column({type: 'varchar', length: 20 })
  telefonoCliente: string;

  @Column({type: 'varchar', length: 100 })
  correoCliente: string;

  @Column({type: 'int' })
  idTipoCliente: number;

  @Column({type: 'smallint', default: 1 })
  clienteActivo: number;

  @Column({type: 'timestamp' })
  fechaRegistroCliente: Date;

  @Column({ type: 'numeric', nullable: true })
  latitud: number | null;

  @Column({ type: 'numeric', nullable: true })
  longitud: number | null;
}