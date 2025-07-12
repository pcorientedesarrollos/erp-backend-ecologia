import { PartialType } from '@nestjs/mapped-types';
import { CreateTiposUnidadDto } from './create-tipos-unidad.dto';

export class UpdateTiposUnidadDto extends PartialType(CreateTiposUnidadDto) {}
