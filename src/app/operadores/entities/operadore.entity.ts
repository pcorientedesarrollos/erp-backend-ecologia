// src/operadores/entities/operador.entity.ts

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('operadores')
export class Operador {
  @PrimaryGeneratedColumn()
  idOperador: number;

  @Column({type: 'varchar', length: 100 })
  nombreOperador: string;

  @Column({type: 'varchar', length: 50 })
  licenciaOperador: string;

  @Column({type: 'varchar', length: 20 })
  telefonoOperador: string;

  @Column({type: 'int' })
  idUnidad: number;

  @Column({type: 'smallint', default: 1 })
  operadorActivo: number;

  @Column({type: 'timestamp' })
  fechaRegistroOperador: Date;
}