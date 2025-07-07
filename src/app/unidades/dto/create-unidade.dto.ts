import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateUnidadeDto {
  @IsInt() //tipo de la columna
  idtipounidad: number;

  @IsString()
  placaUnidad: string;

  @IsString()
  nivUnidad: string;

  @IsString()
  marcaUnidad: string;

  @IsString()
  modeloUnidad: string;

  @IsOptional()
  @IsInt()
  unidadActiva?: number;
}
