interface Book {
    id: "string",
    title: "string",
    description: "string",
    authors: "string",
    favorite: "string",
    fileCover: "string",
    fileName: "string"
}

abstract class BooksRepository {
    book: {
        title: "string",
        description: "string",
        authors: "string",
        favorite: "string",
        fileCover: "string",
        fileName: "string"
    }
    id: "string";

    abstract createBook(book: {
        title: "string",
        description: "string",
        authors: "string",
        favorite: "string",
        fileCover: "string",
        fileName: "string"
    }): Book;

    abstract getBook(id: string): Book;

    abstract getBooks(): Book[];

    abstract updateBook(id: string): Book;

    abstract deleteBook(id: string): string;
}