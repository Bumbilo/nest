import { Injectable } from '@nestjs/common';
import { BookModel } from 'src/shared/models/BookModel';
import { IBook } from '../shared/interfaces/Book';
import bookData from '../../data/books.json';

@Injectable()
export class BookService {
  public books: IBook[] = bookData.books;

  create(data: IBook): IBook {
    const book: IBook = new BookModel(data);
    this.books.push(new BookModel(data));
    return book;
  }

  getAll(): IBook[] {
    return this.books;
  }
}
