import { Test, TestingModule } from '@nestjs/testing';
import { PortfolioEntityResolver } from './portfolio-entity.resolver';

describe('PortfolioEntityResolver', () => {
  let resolver: PortfolioEntityResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PortfolioEntityResolver],
    }).compile();

    resolver = module.get<PortfolioEntityResolver>(PortfolioEntityResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
