import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePortfolioEntity } from './dto/create-portfolio-entity.input';
import { PortfolioEntity } from './portfolio-entity.entity';
import { PortfolioEntityService } from './portfolio-entity.service';

@Resolver(of => PortfolioEntity)
export class PortfolioEntityResolver {
    constructor(private portfolioEntityService: PortfolioEntityService) {}

    @Query(returns => PortfolioEntity)
    getPortfolioEntity(@Args('id', {type: () => Int}) id: number): Promise<PortfolioEntity> {
        return this.portfolioEntityService.findOne(id);
    }


    @Query(returns => [PortfolioEntity])
    portfolioEntities(): Promise<PortfolioEntity[]> {
        return this.portfolioEntityService.findAll();
    }

    @Mutation(returns => PortfolioEntity)
    createPortfolioEntity(@Args('createPortfolioEntity') createPortfolioEntity: CreatePortfolioEntity): Promise<PortfolioEntity> {
        return this.portfolioEntityService.createPortfolioEntity(createPortfolioEntity);
    }

}
