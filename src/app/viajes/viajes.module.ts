import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Viaje } from './entities/viaje.entity';
import { ClientesModule } from '../clientes/clientes.module';
import { ViajesController } from './viajes.service';
import { ViajesService } from './viajes.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Viaje]),
      ClientesModule,
  ],
  controllers: [ViajesController],
  providers: [ViajesService],
})
export class ViajesModule {}
