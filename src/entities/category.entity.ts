import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Book } from './book.entity';

@ObjectType()
export class Category {
    @Field(() => Int)
    id: number;

    @Field()
    name: string;

    @Field(() => [Book])
    books: (typeof Book)[];
}