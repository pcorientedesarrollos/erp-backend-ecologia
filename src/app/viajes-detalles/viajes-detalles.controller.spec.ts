import { Test, TestingModule } from '@nestjs/testing';
import { ViajesDetallesController } from './viajes-detalles.controller';
import { ViajesDetallesService } from './viajes-detalles.service';

describe('ViajesDetallesController', () => {
  let controller: ViajesDetallesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ViajesDetallesController],
      providers: [ViajesDetallesService],
    }).compile();

    controller = module.get<ViajesDetallesController>(ViajesDetallesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
