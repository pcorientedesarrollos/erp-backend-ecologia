// src/clientes/dto/create-cliente.dto.ts

import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsEmail,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateClienteDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombreCliente: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  telefonoCliente: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(100)
  correoCliente: string;

  @IsNumber()
  @IsNotEmpty()
  idTipoCliente: number;

  @IsNumber()
  @IsOptional()
  clienteActivo?: number;

  @IsNumber()
  @IsOptional()
  latitud?: number;

  @IsNumber()
  @IsOptional()
  longitud?: number;
}