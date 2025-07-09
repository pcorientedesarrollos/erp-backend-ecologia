// src/viajes/entities/viaje.entity.ts

import { Cliente } from 'src/app/clientes/entities/cliente.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('viajes')
export class Viaje {
  @PrimaryGeneratedColumn()
  idViaje: number;

  @Column({type: 'int' })
  idRuta: number;

  @Column({type: 'int' })
  idUnidad: number;

  @Column({type: 'int' })
  idOperador: number;

  @Column({type: 'date' })
  fechaViaje: Date;

  @Column({type: 'time' })
  horaSalidaViaje: string;

  @Column({type: 'time', nullable: true })
  horaLlegadaViaje: string | null;

  @Column({type: 'bytea', nullable: true })
  firmaViaje: Buffer | null;
  // ===================================================================

  @Column({type: 'timestamp' })
  fechaRegistroViaje: Date;

  @Column({type: 'smallint', default: 0 })
  viajeCompletado: number;

  @Column({type: 'int' })
  idCliente: number;

  @ManyToOne(() => Cliente, { eager: true })
  @JoinColumn({ name: 'idcliente', referencedColumnName: 'idCliente' })
  cliente: Cliente;
}