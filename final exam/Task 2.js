class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }
    addBook(title, author) {
        let curBook = this.books.find(el => el.title == title && el.author == author);
        if (curBook) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`
        } else {
            this.books.push({ title, author });
            return `The book "${title}" by ${author} has been added to ${this.library} library.`
        }
    }
    addMember(memberName) {
        let curMember = this.members.find(el => el == memberName);
        if (curMember) {
            return `Member ${memberName} is already a part of the book club.`
        } else {
            this.members.push(memberName);
            return `Member ${memberName} has been joined to the book club.`
        }
    }
    assignBookToMember(memberName, bookTitle) {
        let curMember = this.members.find(el => el == memberName);
        let curBook = this.books.find(el => el.title == bookTitle);
        if (!curMember) {
            throw new Error(`Member ${memberName} not found.`);
        }
        if (!curBook) {
            throw new Error(`Book "${bookTitle}" not found.`)
        }
        let index = this.books.indexOf(curBook);
        this.books.splice(index, 1);
        return `Member ${memberName} has been assigned the book "${curBook.title}" by ${curBook.author}.`;
    }
    generateReadingReport() {
        if (this.members.length == 0) {
            return "No members in the book club.";
        }
        if (this.books.length == 0) {
            return "No available books in the library.";
        }
        let result = `Available Books in ${this.library} library:\n`
        result += this.books.map(el => `"${el.title}" by ${el.author}`).join("\n");
        return result;
    }
}

// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Mary", "The Great Gatsby"));

// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.assignBookToMember("Alice", "The Great Gatsby"));
// console.log(myBookClub.generateReadingReport());

// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Peter", "The Da Vinci Code"));

const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Peter"));
console.log(myBookClub.assignBookToMember("Peter", "1984"));
console.log(myBookClub.assignBookToMember("Alice", "To Kill a Mockingbird"));
console.log(myBookClub.generateReadingReport());