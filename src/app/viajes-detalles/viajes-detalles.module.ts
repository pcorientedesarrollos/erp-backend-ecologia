// src/viajes-detalles/viajes-detalles.module.ts

import { Module } from '@nestjs/common';
import { ViajesDetallesService } from './viajes-detalles.service';
import { ViajesDetallesController } from './viajes-detalles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ViajeDetalle } from './entities/viajes-detalle.entity';
import { ViajesModule } from '../viajes/viajes.module';
import { ClientesModule } from '../clientes/clientes.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ViajeDetalle]),
    ViajesModule,
    ClientesModule,
  ],
  controllers: [ViajesDetallesController],
  providers: [ViajesDetallesService],
})
export class ViajesDetallesModule {}