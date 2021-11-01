let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 356,
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723,
}

let getSummary = function (book) {

    return {
        summary: `${book.title} by ${book.author}.`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`,
    }
}

let book1 = getSummary(myBook)
let book2 =getSummary(otherBook)

console.log(book1.summary)
console.log(book2.pageCountSummary)
