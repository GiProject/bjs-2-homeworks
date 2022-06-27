class PrintEditionItem  {
    static BASE_STATE = 100;
    constructor(name, releaseDate, pagesCount, state = PrintEditionItem.BASE_STATE, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = state;
        this.type = type;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(state) {
        if (state > 100) {
            state = 100;
        } else if (state < 0) {
            state = 0;
        }
        this._state = state;
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, PrintEditionItem.BASE_STATE, 'magazine');
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, type = 'book') {
        super(name, releaseDate, pagesCount, PrintEditionItem.BASE_STATE, type);
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount, 'novel');
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount, 'fantastic');
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount, 'detective');
    }
}

class Library {
    constructor(name, books = []) {
        this.name = name;
        this.books = books;
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, _search) {
        let result = null;
        this.books.forEach( function(book, index) {
            if (book[type] === _search) {
                result = book;
                return;
            }
        });
        return result;
    }

    giveBookByName(bookName) {
        let result = null, bookIndex;
        this.books.forEach( function(book, index) {
            if (book.name === bookName) {
                result = book;
                bookIndex = index;
                return;
            }
        });
        if (bookIndex >= 0) {
            this.books.splice(bookIndex, 1);
        }
        return result;
    }

}