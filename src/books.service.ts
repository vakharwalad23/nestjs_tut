import { Injectable, Inject } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  async create(createBookInput: CreateBookInput) {
    return this.prismaService.book.create({
      data: {
        ISBN: createBookInput.ISBN,
        title: createBookInput.title,
        price: createBookInput.price,
        category: {
          create: {
            id: createBookInput.category.id,
            name: createBookInput.category.name,
          }
        }
      }
    })
  }

  findAll() {
    return `This action returns all books`;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookInput: UpdateBookInput) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
