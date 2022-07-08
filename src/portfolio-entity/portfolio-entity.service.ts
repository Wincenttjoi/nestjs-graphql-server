import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePortfolioEntity } from './dto/create-portfolio-entity.input';
import { PortfolioEntity } from './portfolio-entity.entity';

@Injectable()
export class PortfolioEntityService
{
  constructor(@InjectRepository(PortfolioEntity) private portfolioEntityRepository: Repository<PortfolioEntity>) {}
  
  async createPortfolioEntity(createPortfolioEntity: CreatePortfolioEntity): Promise<PortfolioEntity> {
    const newPortfolioEntity = this.portfolioEntityRepository.create(createPortfolioEntity);
    return this.portfolioEntityRepository.save(newPortfolioEntity);
  }

  async findAll(): Promise<PortfolioEntity[]>
  {
    return this.portfolioEntityRepository.find();
  }

  async findOne(id: number): Promise<PortfolioEntity> {
    return this.portfolioEntityRepository.findOneOrFail(id);
  }
}
