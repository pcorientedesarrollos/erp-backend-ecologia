import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiposUnidadService } from './tipos-unidad.service';
import { CreateTiposUnidadDto } from './dto/create-tipos-unidad.dto';
import { UpdateTiposUnidadDto } from './dto/update-tipos-unidad.dto';

@Controller('tipos-unidad')
export class TiposUnidadController {
  constructor(private readonly tiposUnidadService: TiposUnidadService) {}

  @Post()
  create(@Body() createTiposUnidadDto: CreateTiposUnidadDto) {
    return this.tiposUnidadService.create(createTiposUnidadDto);
  }

  @Get()
  findAll() {
    return this.tiposUnidadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tiposUnidadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTiposUnidadDto: UpdateTiposUnidadDto) {
    return this.tiposUnidadService.update(+id, updateTiposUnidadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tiposUnidadService.remove(+id);
  }
}
