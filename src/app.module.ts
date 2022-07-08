import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path/posix';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PortfolioEntityModule } from './portfolio-entity/portfolio-entity.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PortfolioEntityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
