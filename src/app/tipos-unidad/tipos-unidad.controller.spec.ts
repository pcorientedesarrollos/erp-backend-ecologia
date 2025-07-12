import { Test, TestingModule } from '@nestjs/testing';
import { TiposUnidadController } from './tipos-unidad.controller';
import { TiposUnidadService } from './tipos-unidad.service';

describe('TiposUnidadController', () => {
  let controller: TiposUnidadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposUnidadController],
      providers: [TiposUnidadService],
    }).compile();

    controller = module.get<TiposUnidadController>(TiposUnidadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
