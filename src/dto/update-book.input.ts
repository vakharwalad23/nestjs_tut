import { CreateBookInput } from './create-book.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateCategoryInput } from './create-category.input';

@InputType()
export class UpdateBookInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  ISBN: string;

  @Field({ nullable: true })
  title: string;

  @Field(() => Int, { nullable: true })
  price: number;

  @Field(() => CreateCategoryInput, { nullable: true })
  category: CreateCategoryInput;
}
