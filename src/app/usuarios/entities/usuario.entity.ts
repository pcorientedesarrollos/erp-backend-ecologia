import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class Usuario {
  @PrimaryGeneratedColumn()
  idUsers: number;

  @Column({ length: 50,  nullable: true })
  username: string;

  @Column({ length: 100,  nullable: true })
  password: string;

  @Column({length: 100, nullable: true })
  nombreCompleto: string;

  @Column({ length: 50, nullable: true })
  perfil: string;

  @Column({ type: 'smallint', default: 1 })
  status: number;
}
