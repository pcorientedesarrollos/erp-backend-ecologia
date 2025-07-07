// src/viajes-detalles/dto/create-viaje-detalle.dto.ts

import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateViajeDetalleDto {
  @IsNumber()
  @IsNotEmpty()
  idViaje: number;

  @IsNumber()
  @IsNotEmpty()
  idCliente: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  latitud: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  longitud: string;
}