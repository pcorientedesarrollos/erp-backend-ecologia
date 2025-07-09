import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Viaje } from './entities/viaje.entity';
import { ClientesModule } from '../clientes/clientes.module';
import { ViajesController } from './viajes.controller';
import { ViajesService } from './viajes.service';

@Module({
    imports: [TypeOrmModule.forFeature([Viaje]),
      ClientesModule,
  ],
  controllers: [ViajesController],
  providers: [ViajesService],
})
export class ViajesModule {}
