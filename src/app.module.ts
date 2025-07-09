import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsuariosModule } from './app/usuarios/usuarios.module';
import { UnidadesModule } from './app/unidades/unidades.module';
import { ClientesModule } from './app/clientes/clientes.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViajesModule } from './app/viajes/viajes.module';
import { ViajesDetallesModule } from './app/viajes-detalles/viajes-detalles.module';
import { OperadoresModule } from './app/operadores/operadores.module';
import { RutasModule } from './app/rutas/rutas.module';

@Module({
  imports: [
    // 1. Cargar .env globalmente
    ConfigModule.forRoot({ isGlobal: true }),

    // 2. Conexión asíncrona usando ConfigService
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST'),
        port: parseInt(config.get<string>('DB_PORT') || '5432', 10),
        username: config.get<string>('DB_USER'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true, // ⚠️ Solo usar en desarrollo
      }),
    }),

    // Módulos
    UsuariosModule,
    UnidadesModule,
    ClientesModule,
    ViajesModule,
    ViajesDetallesModule,
    OperadoresModule,
    RutasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
