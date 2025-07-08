// src/operadores/dto/create-operador.dto.ts

import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateOperadorDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombreOperador: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  licenciaOperador: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  telefonoOperador: string;

  @IsNumber()
  @IsNotEmpty()
  idUnidad: number;

  @IsNumber()
  @IsOptional()
  operadorActivo?: number;
}