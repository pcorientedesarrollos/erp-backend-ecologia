import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rutas')
export class Ruta {
  @PrimaryGeneratedColumn()
  idRuta: number;

  @Column({ length: 100 })
  origenRuta: string;

  @Column({ length: 100 })
  destinoRuta: string;

  @Column({ type: 'interval' })
  duracionAproxRuta: string;

  @Column({ type: 'numeric', precision: 10, scale: 6 })
  latitudOrigen: number;

  @Column({ type: 'numeric', precision: 10, scale: 6 })
  longitudOrigen: number;

  @Column({ type: 'numeric', precision: 10, scale: 6 })
  latitudDestino: number;

  @Column({ type: 'numeric', precision: 10, scale: 6 })
  longitudDestino: number;
}
