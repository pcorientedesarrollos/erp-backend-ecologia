// src/viajes/dto/create-viaje.dto.ts

import {
  IsNumber,
  IsNotEmpty,
  IsDateString,
  IsString,
  Matches,
  IsOptional,
  IsInt,
} from 'class-validator';

export class CreateViajeDto {
  @IsNumber()
  @IsNotEmpty()
  idRuta: number;

  @IsNumber()
  @IsNotEmpty()
  idUnidad: number;

  @IsNumber()
  @IsNotEmpty()
  idOperador: number;

  @IsDateString()
  @IsNotEmpty()
  fechaViaje: string; // Recibir como 'YYYY-MM-DD'

  @IsString()
  @IsNotEmpty()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, {
    message: 'La hora de salida debe tener el formato HH:MM:SS',
  })
  horaSalidaViaje: string;

  @IsNumber()
  @IsNotEmpty()
  idCliente: number;

  // Opcionales
  @IsOptional()
  @IsString()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, {
    message: 'La hora de llegada debe tener el formato HH:MM:SS',
  })
  horaLlegadaViaje?: string;

  @IsOptional()
  @IsString() // La firma se puede enviar como string en base64
  firmaViaje?: string;

  @IsOptional()
  @IsInt()
  viajeCompletado?: number;
}