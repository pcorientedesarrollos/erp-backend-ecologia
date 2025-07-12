import { Test, TestingModule } from '@nestjs/testing';
import { TiposClienteController } from './tipos-cliente.controller';
import { TiposClienteService } from './tipos-cliente.service';

describe('TiposClienteController', () => {
  let controller: TiposClienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposClienteController],
      providers: [TiposClienteService],
    }).compile();

    controller = module.get<TiposClienteController>(TiposClienteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
