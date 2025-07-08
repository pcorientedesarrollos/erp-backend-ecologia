// src/operadores/operadores.module.ts

import { Module } from '@nestjs/common';
import { OperadoresService } from './operadores.service';
import { OperadoresController } from './operadores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Operador } from './entities/operadore.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Operador])],
  controllers: [OperadoresController],
  providers: [OperadoresService],
  exports: [TypeOrmModule], // Exportamos para que otros módulos puedan usar la entidad Operador
})
export class OperadoresModule {}