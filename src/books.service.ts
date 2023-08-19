import { Injectable, Inject } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  async create(createBookInput: CreateBookInput) {
    const categoryId = (await this.prismaService.category.count()) + 1;
    try {
      const newBook = this.prismaService.book.create({
        data: {
          ISBN: createBookInput.ISBN,
          title: createBookInput.title,
          price: createBookInput.price,
          category: {
            connectOrCreate: {
              where: { id: createBookInput.category.id || categoryId },
              create: { name: createBookInput.category.name },
            },
          },
        },
        include: {
          category: true,
        }
        
      });
      return newBook;
    } catch (error) {
      console.log(error);
    }
   
  }

  findAll() {
    return this.prismaService.book.findMany({
      include:{
        category: true,
      }
    });
  }

  findOne(id: number) {
    return this.prismaService.book.findFirstOrThrow({
      where:{
        id
      },
      include:{
        category: true,
      }
    });
  }

  update(id: number, updateBookInput: UpdateBookInput) {
    return this.prismaService.book.update({
      where: {
        id,
      },
      data:{
        ISBN: updateBookInput.ISBN,
          title: updateBookInput.title,
          price: updateBookInput.price,
          category: {
            connectOrCreate: {
              where: { id: updateBookInput.category.id },
              create: { name: updateBookInput.category.name },
            },
          }
      },
      include:{
        category: true
      }
    })
  }

  remove(id: number) {
    return this.prismaService.book.delete({
      where:{
        id
      },
    });
  }
}
