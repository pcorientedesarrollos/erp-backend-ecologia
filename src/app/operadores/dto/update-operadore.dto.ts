// src/operadores/dto/update-operador.dto.ts

import { PartialType } from '@nestjs/mapped-types';
import { CreateOperadorDto } from './create-operadore.dto';

export class UpdateOperadorDto extends PartialType(CreateOperadorDto) {}