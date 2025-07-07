// src/clientes/clientes.module.ts

import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  controllers: [ClientesController],
  providers: [ClientesService],
  // Exportamos el TypeOrmModule para que otros módulos (como Viajes) puedan usar la entidad Cliente
  exports: [TypeOrmModule],
})
export class ClientesModule {}