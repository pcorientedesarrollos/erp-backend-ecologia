// src/viajes-detalles/dto/update-viaje-detalle.dto.ts

import { PartialType } from '@nestjs/mapped-types';
import { CreateViajeDetalleDto } from './create-viajes-detalle.dto';

export class UpdateViajeDetalleDto extends PartialType(CreateViajeDetalleDto) {}