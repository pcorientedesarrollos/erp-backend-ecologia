import { PartialType } from '@nestjs/mapped-types';
import { CreateTiposClienteDto } from './create-tipos-cliente.dto';

export class UpdateTiposClienteDto extends PartialType(CreateTiposClienteDto) {}
