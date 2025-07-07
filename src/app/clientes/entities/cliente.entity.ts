import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  idCliente: number;

  @Column()
  nombreCliente: string;

  @Column()
  telefonoCliente: string;

  @Column()
  correoCliente: string;

  @Column()
  idTipoCliente: number;

  @Column()
  latitud: string;

  @Column()
  longitud: string;
}
