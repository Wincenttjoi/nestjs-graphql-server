import { Module } from '@nestjs/common';
import { PortfolioEntityService } from './portfolio-entity.service';
import { PortfolioEntityResolver } from './portfolio-entity.resolver';

@Module({
  providers: [PortfolioEntityService, PortfolioEntityResolver],
})
export class PortfolioEntityModule {}
