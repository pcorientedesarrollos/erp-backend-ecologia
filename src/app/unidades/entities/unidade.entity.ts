import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('unidades')
export class Unidade {
  @PrimaryGeneratedColumn()
  idunidad: number;

  @Column()
  idtipounidad: number;

  @Column({ length: 20 })
  placaUnidad: string;

  @Column({ length: 20 })
  nivUnidad: string;

  @Column({ length: 50 })
  marcaUnidad: string;

  @Column({ length: 50 })
  modeloUnidad: string;

  @Column({ type: 'smallint', default: 1 })
  unidadActiva: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaRegistroUnidad: Date;
}
