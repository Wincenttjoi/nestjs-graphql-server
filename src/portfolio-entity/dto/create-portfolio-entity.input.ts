import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreatePortfolioEntity {
    @Field()
    name: string;

    @Field({nullable: true})
    type?: string;
}