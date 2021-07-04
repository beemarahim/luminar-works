class BookLibrary {
    books = {
        "the alchemist": { book_name: "the alchemist", author: "paulo coelo", price: 200, no_copies: 5, sold: 3 },
        "half girlfriend": { book_name: "half girlfriend", author: "chetan bhagat-hf", price: 250, no_copies: 7, sold: 4 },
        "2 states": { book_name: "2 states", author: "chetan bhagat-2s", price: 280, no_copies: 3, sold: 2 },
        "fault in our stars": { book_name: "fault in our stars", author: "john green", price: 250, no_copies: 10, sold: 7 }
    }
    getBooks() {

        return this.books;
    }

    findBook(bookname) {
        let book_list = this.getBooks()
        if (bookname in book_list) {
            return 1

        }
        else {
            return 0
        }

    }

    sold_sort() {

        let sold_sorted_arr = {}
        let arr = {}
        arr = Object.values(this.books)
        sold_sorted_arr = (arr.sort((book1, book2) => book2["sold"] - book1["sold"]))
        console.log(sold_sorted_arr.map(book => book["author"]));

    }


    aval_copy(bookname) {
        if (bookname in this.books) {
            let no_copy_avl = this.books[bookname]["no_copies"] - this.books[bookname]["sold"]
            return no_copy_avl;
        }
        else {
            return "no book found"
        }



    }
}

var obj1 = new BookLibrary()
obj1.sold_sort();
// var return_val = obj1.findBook("fault in our stars")                    //to find the book
// var res = return_val === 1 ? "book found " : "book not found";
// console.log(res);



// console.log(`available copies:${obj1.aval_copy("the alchemist")}`);     // to find the availability of book





