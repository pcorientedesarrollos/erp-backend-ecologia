import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class Usuario {
  @PrimaryGeneratedColumn()
  idUsers: number;

  @Column({ length: 50 })
  username: string;

  @Column({ length: 100 })
  password: string;

  @Column()
  nombreCompleto: string;

  @Column({ length: 50 })
  perfil: string;

  @Column({ type: 'smallint', default: 1 })
  status: number;
}
