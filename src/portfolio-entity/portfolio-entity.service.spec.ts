import { Test, TestingModule } from '@nestjs/testing';
import { PortfolioEntityService } from './portfolio-entity.service';

describe('PortfolioEntityService', () => {
  let service: PortfolioEntityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PortfolioEntityService],
    }).compile();

    service = module.get<PortfolioEntityService>(PortfolioEntityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
