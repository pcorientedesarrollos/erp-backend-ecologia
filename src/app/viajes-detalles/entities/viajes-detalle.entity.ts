// src/viajes-detalles/entities/viaje-detalle.entity.ts

import { Cliente } from 'src/app/clientes/entities/cliente.entity';
import { Viaje } from 'src/app/viajes/entities/viaje.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('viajes_detalles')
export class ViajeDetalle {
  // Se define la propiedad de la llave primaria como 'id' en la clase.
  @PrimaryGeneratedColumn()
  idViajeDetalle: number;

  @Column({type: 'int' })
  idViaje: number;

  @Column({type: 'int' })
  idCliente: number;

  @Column({ type: 'varchar', length: 50 })
  latitud: string;

  @Column({ type: 'varchar', length: 50 })
  longitud: string;

  // --- Relaciones Corregidas ---
  @ManyToOne(() => Viaje)
  // Apunta a la propiedad 'id' de la entidad Viaje.
  @JoinColumn({ name: 'idViaje', referencedColumnName: 'idViaje' })
  viaje: Viaje;

  @ManyToOne(() => Cliente)
  // Apunta a la propiedad 'id' de la entidad Cliente.
  @JoinColumn({ name: 'idCliente', referencedColumnName: 'idCliente' })
  cliente: Cliente;
}