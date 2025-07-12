import { Test, TestingModule } from '@nestjs/testing';
import { TiposClienteService } from './tipos-cliente.service';

describe('TiposClienteService', () => {
  let service: TiposClienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposClienteService],
    }).compile();

    service = module.get<TiposClienteService>(TiposClienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
