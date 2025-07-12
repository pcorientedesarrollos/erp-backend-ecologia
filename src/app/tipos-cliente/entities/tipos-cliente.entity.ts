import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tipos_cliente')
export class TiposCliente {
  @PrimaryGeneratedColumn()
  idTipoCliente: number;

  @Column({ type: 'varchar', length: 50 })
  nombreTipoCliente: string;
}
