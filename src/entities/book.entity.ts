import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Category } from './category.entity';

@ObjectType()
export class Book {
  @Field(() => Int)
  id: number;

  @Field()
  ISBN: string;

  @Field()
  title: string;

  @Field(() => Int)
  price: number;

  @Field(() => Category)
  category: Category;

}
