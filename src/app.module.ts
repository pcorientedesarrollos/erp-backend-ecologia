import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './app/usuarios/usuarios.module';
import { UnidadesModule } from './app/unidades/unidades.module';
@Module({
  imports: [UsuariosModule, UnidadesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
