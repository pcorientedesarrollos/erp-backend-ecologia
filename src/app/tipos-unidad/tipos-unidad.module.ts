import { Module } from '@nestjs/common';
import { TiposUnidadService } from './tipos-unidad.service';
import { TiposUnidadController } from './tipos-unidad.controller';

@Module({
  controllers: [TiposUnidadController],
  providers: [TiposUnidadService],
})
export class TiposUnidadModule {}
