import { Query, Resolver } from '@nestjs/graphql';
import { PortfolioEntity } from './portfolio-entity.entity';
import { PortfolioEntityService } from './portfolio-entity.service';

@Resolver(of => PortfolioEntity)
export class PortfolioEntityResolver {
    constructor(private portfolioEntityService: PortfolioEntityService) {}

    @Query(returns => [PortfolioEntity])
    portfolioEntities(): Promise<PortfolioEntity[]> {
        return this.portfolioEntityService.findAll();
    }

}
