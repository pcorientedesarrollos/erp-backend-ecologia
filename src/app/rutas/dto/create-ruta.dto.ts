// src/app/rutas/dto/create-ruta.dto.ts
import { IsNotEmpty, IsString, IsNumber, Matches } from 'class-validator';

export class CreateRutaDto {
  @IsString()
  @IsNotEmpty()
  origenRuta: string;

  @IsString()
  @IsNotEmpty()
  destinoRuta: string;

  @IsString()
  @Matches(/^([0-9]{2}):([0-9]{2}):([0-9]{2})$/, {
    message: 'Debe tener formato HH:MM:SS',
  })
  duracionAproxRuta: string;

  @IsNumber()
  latitudOrigen: number;

  @IsNumber()
  longitudOrigen: number;

  @IsNumber()
  latitudDestino: number;

  @IsNumber()
  longitudDestino: number;
}
