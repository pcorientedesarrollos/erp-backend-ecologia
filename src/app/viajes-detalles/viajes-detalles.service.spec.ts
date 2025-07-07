import { Test, TestingModule } from '@nestjs/testing';
import { ViajesDetallesService } from './viajes-detalles.service';

describe('ViajesDetallesService', () => {
  let service: ViajesDetallesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ViajesDetallesService],
    }).compile();

    service = module.get<ViajesDetallesService>(ViajesDetallesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
