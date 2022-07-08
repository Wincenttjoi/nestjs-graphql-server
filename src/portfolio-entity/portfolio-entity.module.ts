import { Module } from '@nestjs/common';
import { PortfolioEntityService } from './portfolio-entity.service';
import { PortfolioEntityResolver } from './portfolio-entity.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortfolioEntity } from './portfolio-entity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PortfolioEntity])],
  providers: [PortfolioEntityService, PortfolioEntityResolver],
})
export class PortfolioEntityModule {}
