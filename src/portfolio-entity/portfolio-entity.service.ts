/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PortfolioEntity } from './portfolio-entity.entity';

@Injectable()
export class PortfolioEntityService
{
  async findAll(): Promise<PortfolioEntity[]>
  {
    const ent = new PortfolioEntity();
    ent.id = 1;
    ent.name = 'Overall GIC';

    return [ent];
  }
}
