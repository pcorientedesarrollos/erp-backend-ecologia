import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateTiposClienteDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  nombreTipoCliente: string;
}
