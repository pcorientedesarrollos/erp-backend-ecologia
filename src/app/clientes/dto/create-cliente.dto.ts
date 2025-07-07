import {  IsString, IsNotEmpty, MaxLength, IsEmail, IsNumber, IsOptional,
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
  @IsOptional() // clienteActivo puede ser opcional, el servicio puede asignarle 1 por defecto
  clienteActivo?: number;

  @IsNumber()
  @IsOptional() // Latitud es opcional porque la BD permite nulos
  latitud?: number;

  @IsNumber()
  @IsOptional() // Longitud es opcional porque la BD permite nulos
  longitud?: number;
}