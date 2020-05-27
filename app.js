//Step 1: - declare variables, target dom elements
let container = document.getElementById('container');
let readStatus = document.getElementById('readStatus');
let deleteBtn = document.getElementById('deleteBtn');
let addNewBookBtn = document.getElementById('plus');
let exitFormBtn = document.getElementById('exitBtn');
let myLibrary = []; //stores book objects;

//Book function constructor
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
let book3 = new Book('Learn JavaScript', 'Tayyab Javed', 50, 'No');

addBookToshelf(book1);
addBookToshelf(book2);
addBookToshelf(book3);

// console.log(addBookToshelf(book1)); //returns array with two objects - book1, book2
// console.log(addBookToshelf(book2)); //same here


function render(arr){
    //This function will loop through myLibrary array and display each card to the webpage;
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]); //logs the object to the console.
        let bookCardDiv = document.createElement('div');
        bookCardDiv.classList.add('card');
        container.appendChild(bookCardDiv);
        //bookCardTitle
        let bookCardTitle = document.createElement('h5');
        let bookCardTitleText = document.createTextNode('Title: ' + arr[i].title);
        bookCardTitle.appendChild(bookCardTitleText);
        bookCardTitle.id = 'title';
        bookCardTitle.classList.add('cardText');
        bookCardDiv.appendChild(bookCardTitle);
        //bookCardAuthor
        let bookCardAuthor = document.createElement('h5');
        let bookCardAuthorText = document.createTextNode('Author: ' + arr[i].author);
        bookCardAuthor.appendChild(bookCardAuthorText);
        bookCardAuthor.id = 'author';
        bookCardAuthor.classList.add('cardText');
        bookCardDiv.appendChild(bookCardAuthor);
        //bookCardPages
        let bookCardPages = document.createElement('h5');
        let bookCardPagesText = document.createTextNode('Pages: ' + arr[i].pages);
        bookCardPages.appendChild(bookCardPagesText);
        bookCardPages.id = 'pages'
        bookCardPages.classList.add('cardText');
        bookCardDiv.appendChild(bookCardPages);
        //bookCardisRead
        let bookCardisRead = document.createElement('h5');
        let bookCardisReadText = document.createTextNode('Read: ' + arr[i].isRead);
        bookCardisRead.appendChild(bookCardisReadText);
        bookCardisRead.id = 'isRead'
        bookCardisRead.classList.add('cardText');
        bookCardDiv.appendChild(bookCardisRead);
        //create changeReadStatus button
        let changeStatus = document.createElement('button');
        let changeStatusBtnText = document.createTextNode('Change Status');
        changeStatus.appendChild(changeStatusBtnText);
        changeStatus.id = 'readStatus'
        changeStatus.classList.add('btn');
        bookCardDiv.appendChild(changeStatus);
        //create deleteBtn button 
        let deleteButton = document.createElement('button');
        let deleteButtonText = document.createTextNode('Delete');
        deleteButton.appendChild(deleteButtonText);
        deleteButton.id = 'deleteBtn';
        deleteButton.classList.add('btn');
        bookCardDiv.appendChild(deleteButton);        
    }
}

render(myLibrary);

//Step 3 - Algorithm
//When render() loops through the list: 
//It will create a new div element - which will be added as a child onto the container element.
//The div will be given the card class so it could inherit the css properties associated with the class.
//Then four h5 tags will be appended as children onto the div element which was created during the loop iteration.
//In order to be create - document.createElement('H5') - this will create an <h5> tag - with then want to give it some text - document.createTextNode('--text--');
//The <h5> tag will be added as a child onto the bookCardDiv element.
// They will be given the cardText class in order to get the styles of the card-text. These h5 tags will correspond to the properties of the objects in the array
//Then, create a button - call it 'Change Status' which will also have the .btn class
//Finally, create another button - call it 'Delete' which will also have the .btn class

//Step 4: 
//Add a 'NEW BOOK' button that brings up a form allowing users to input the details for the new book: author, title, pages, whether it's been read and anything else you might want. 
//Algorithm:
//1.Create a button. - for this we will get a plus icon off of the font-awesome website. 
//2.place it below the myLibrary heading and above the cards
//3.When the button is clicked - display a form:
//Before we can display the form we need to create it: 
//Form - consists of author, title, no.of pages, isRead input fields - which the user will use to enter data about the book they want to add. 

//When the button gets clicked - we want to display the form - to do that we set the display property of the form from none to normal : 
function openForm(){
    document.getElementById('addBookForm').style.display = 'block';
}

addNewBookBtn.addEventListener('click', openForm);

//Also we want an exit button which will close the form when it has been clicked
function closeForm(){
    document.getElementById('addBookForm').style.display = 'none';
}

exitFormBtn.addEventListener('click', closeForm);