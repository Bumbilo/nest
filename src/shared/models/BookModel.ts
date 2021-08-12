import { IBook } from '../interfaces/Book';

export class BookModel implements IBook {
  public id?: string;
  public title: string;
  public description: string;
  public authors: string;
  public favorite: string;
  public fileName: string;
  public fileCover: string;
  public fileBook: string;
  public date?: string;

  constructor({
    id = '',
    title = '',
    description = '',
    authors = '',
    favorite = '',
    fileName = '',
    fileCover = '',
    fileBook = '',
    date = '',
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.authors = authors;
    this.favorite = favorite;
    this.fileName = fileName;
    this.fileCover = fileCover;
    this.fileBook = fileBook;
    this.date = date;
  }
}
