import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsuariosModule } from './app/usuarios/usuarios.module';
import { UnidadesModule } from './app/unidades/unidades.module';
import { ClientesModule } from './app/clientes/clientes.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataSourceOptions } from './data-source';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    // Usa la configuración centralizada. ¡Mucho más limpio y seguro!
    TypeOrmModule.forRoot(dataSourceOptions),

    UsuariosModule,
    UnidadesModule,
    ClientesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}