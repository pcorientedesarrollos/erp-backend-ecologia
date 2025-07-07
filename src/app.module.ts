import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsuariosModule } from './app/usuarios/usuarios.module';
import { UnidadesModule } from './app/unidades/unidades.module';
import { ClientesModule } from './app/clientes/clientes.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataSourceOptions } from './data-source';
import { ViajesModule } from './app/viajes/viajes.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRoot(dataSourceOptions),

    UsuariosModule,
    UnidadesModule,
    ClientesModule,
    ViajesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}