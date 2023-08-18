import { Resolver, Query } from "@nestjs/graphql"

@Resolver("Book")
export class BookResolver {

    @Query("books")
    getAllBooks() {
        //return books
        return [
            { id: 1, title: "Harry Potter", price: 500 },
            { id: 2, title: "Spider Man", price: 800 },
            { id: 3, title: "Iron Man", price: 600 },
        ]
    }
}