// src/operadores/entities/operador.entity.ts

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('operadores')
export class Operador {
  @PrimaryGeneratedColumn({ name: 'idoperador' })
  id: number;

  @Column({ name: 'nombreOperador', type: 'varchar', length: 100 })
  nombreOperador: string;

  @Column({ name: 'licenciaOperador', type: 'varchar', length: 50 })
  licenciaOperador: string;

  @Column({ name: 'telefonoOperador', type: 'varchar', length: 20 })
  telefonoOperador: string;

  @Column({ name: 'idunidad', type: 'int' })
  idUnidad: number;

  @Column({ name: 'operadorActivo', type: 'smallint', default: 1 })
  operadorActivo: number;

  @Column({ name: 'fecharegistroOperador', type: 'timestamp' })
  fechaRegistroOperador: Date;
}