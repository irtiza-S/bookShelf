let myLibrary = []; //stores book objects;

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author; 
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToshelf(obj){
    myLibrary.push(obj)
    return myLibrary;
}

//testing with dummy data
let book1 = new Book('Hello World', 'Irtiza', 45, 'Yes');
let book2 = new Book('Hello Universe', 'God', 500, 'No');
addBookToshelf(book1);
addBookToshelf(book2);
// console.log(addBookToshelf(book1)); //returns array with two objects - book1, book2
// console.log(addBookToshelf(book2)); //same here


function render(arr){
    //this function will loop through mylibrary array and display each book to the console. 
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

render(myLibrary);
