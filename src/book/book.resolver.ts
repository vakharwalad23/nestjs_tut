import { Resolver, Query } from "@nestjs/graphql"
import { Book } from "./book.schema"
import { Book as BookModel } from "../graphql";

@Resolver(of => Book)
export class BookResolver {

    @Query(returns => [Book], { name: "getBooks" })
    getAllBooks() {
        let arr: BookModel[] = [
            { id: 1, title: "Black Panther", price: 500 },
            { id: 2, title: "Spider Man", price: 800 },
            { id: 3, title: "Iron Man", price: 600 },
        ]
        //return books
        return arr
    }
}