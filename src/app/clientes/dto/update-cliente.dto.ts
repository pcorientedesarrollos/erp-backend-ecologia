// src/clientes/dto/update-cliente.dto.ts

import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';

// PartialType hace que todas las propiedades de CreateClienteDto sean opcionales
export class UpdateClienteDto extends PartialType(CreateClienteDto) {}