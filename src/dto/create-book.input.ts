import { InputType, Int, Field } from '@nestjs/graphql';
import { CreateCategoryInput } from './create-category.input';

@InputType()
export class CreateBookInput {
  @Field(() => Int)
  id: number;

  @Field()
  ISBN: string;

  @Field()
  title: string;

  @Field(() => Int)
  price: number;

  @Field(() => CreateCategoryInput)
  category: CreateCategoryInput;
}
