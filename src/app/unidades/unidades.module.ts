import { Module } from '@nestjs/common';
import { UnidadesService } from './unidades.service';
import { UnidadesController } from './unidades.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unidade } from './entities/unidade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Unidade])],
  controllers: [UnidadesController],
  providers: [UnidadesService],
})
export class UnidadesModule {}
