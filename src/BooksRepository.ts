import "reflect-metadata";
import { injectable } from "inversify";

const Books = require("../models/books");

interface Book {
    title: "string",
    description: "string",
    authors: "string",
    favorite: "string",
    fileCover: "string",
    fileName: "string"
}

@injectable()
export class BooksRepository {
    async createBook(book: Book): Promise<any> {
        try {
            const newBook = new Books(book);
            await newBook.save();
            return newBook;

        } catch (e) {
            console.log(e);
        }   
    };

    async getBook(id: string): Promise<any> {
        try {
            const book = await Books.findById(id).select('-__v');
            return book;

        } catch (e) {
            console.log(e);
        }   
    };

    async getBooks(): Promise<any> {
        try {
            const books = await Books.find().select('-__v');
            return books;

        } catch (e) {
            console.log(e);
        }
    };

    async updateBook(id: string, book: Book): Promise<any> {
        try {
            await Books.findByIdAndUpdate(id, book);

        } catch (e) {
            console.log(e);
        }   
    };

    async deleteBook(id: string): Promise<any> {
        try {
            await Books.deleteOne({_id: id});

        } catch (e) {
            console.log(e);
        } 
    };
}