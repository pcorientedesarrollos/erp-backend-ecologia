import { Module } from '@nestjs/common';
import { TiposClienteService } from './tipos-cliente.service';
import { TiposClienteController } from './tipos-cliente.controller';

@Module({
  controllers: [TiposClienteController],
  providers: [TiposClienteService],
})
export class TiposClienteModule {}
