// src/viajes/entities/viaje.entity.ts

import { Cliente } from 'src/app/clientes/entities/cliente.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'viajes' })
export class Viaje {
  @PrimaryGeneratedColumn({ name: 'idViaje' })
  id: number;

  @Column({ name: 'idruta', type: 'int' })
  idRuta: number;

  @Column({ name: 'idunidad', type: 'int' })
  idUnidad: number;

  @Column({ name: 'idoperador', type: 'int' })
  idOperador: number;

  @Column({ name: 'fechaViaje', type: 'date' })
  fechaViaje: Date;

  @Column({ name: 'horaSalidaViaje', type: 'time' })
  horaSalidaViaje: string;

  @Column({ name: 'horaLlegadaViaje', type: 'time', nullable: true })
  horaLlegadaViaje: string | null;

  @Column({ name: 'firmaViaje', type: 'bytea', nullable: true })
  firmaViaje: Buffer | null;
  // ===================================================================

  @Column({ name: 'fechaRegistroViaje', type: 'timestamp' })
  fechaRegistroViaje: Date;

  @Column({ name: 'viajeCompletado', type: 'smallint', default: 0 })
  viajeCompletado: number;

  @Column({ name: 'idcliente', type: 'int' })
  idCliente: number;

  @ManyToOne(() => Cliente, { eager: true })
  @JoinColumn({ name: 'idcliente', referencedColumnName: 'id' })
  cliente: Cliente;
}