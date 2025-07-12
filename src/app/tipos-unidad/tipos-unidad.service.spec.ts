import { Test, TestingModule } from '@nestjs/testing';
import { TiposUnidadService } from './tipos-unidad.service';

describe('TiposUnidadService', () => {
  let service: TiposUnidadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposUnidadService],
    }).compile();

    service = module.get<TiposUnidadService>(TiposUnidadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
