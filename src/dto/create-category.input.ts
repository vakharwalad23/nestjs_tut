import { InputType, Int, Field } from '@nestjs/graphql';


@InputType()
export class CreateCategoryInput {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field()
    name: string;
}