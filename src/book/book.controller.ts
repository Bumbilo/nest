import { IBook } from '../shared/interfaces/Book';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) { }

  @Get()
  getAll(): IBook[] {
    return this.bookService.getAll();
  }

  @Post()
  create(@Body() data: IBook): IBook {
    return this.bookService.create(data);
  }
}
