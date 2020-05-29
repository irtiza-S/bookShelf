//Step 1: - declare variables, target dom elements
let container = document.getElementById('container');
let readStatus = document.getElementById('readStatus');
let deleteBtn = document.querySelector('.deleteBtn')
let addNewBookBtn = document.getElementById('plus');
let exitFormBtn = document.getElementById('exitBtn');
// let bookCard = document.querySelector('.card');
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
    
}

Book.prototype.deleteBook = function(x){
    //This method will remove the object from the list
    let bookIndex = myLibrary.indexOf(x); //returns index of x in myLibrary 
    if (bookIndex > -1){
        //if the index is greater than -1 then only delete the value from that index using splice().
        myLibrary.splice(bookIndex, 1);
    }   
}

Book.prototype.changeReadStatus = function(e){
    if(e.currentTarget.previousElementSibling.innerText === 'Read: No'){
        e.currentTarget.previousElementSibling.innerText = 'Read: Yes';
        e.currentTarget.previousElementSibling.value = true;
    }
    else{
        e.currentTarget.previousElementSibling.innerText = 'Read: No';
        e.currentTarget.previousElementSibling.value = false;
    }
}
// testing with dummy data
// let book1 = new Book('Hello World', 'Irtiza', 45, 'Yes');
// let book2 = new Book('Hello Universe', 'God', 500, 'No');
// addBookToshelf(book1);
// addBookToshelf(book2);


// console.log(addBookToshelf(book1)); //returns array with two objects - book1, book2
// console.log(addBookToshelf(book2)); //same here


function render(arr){
    //This function will loop through myLibrary array and display each card to the webpage;
    container.innerHTML = ''; //this will clear the container - which will remove duplicates
    for(let i = 0; i < arr.length; i++){
        // console.log(arr[i]); //logs the object to the console.
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
        if (!(isReadInput.checked)){
            //if bookCardisReadText - is false its text will set to 'No';
            isReadInput.classList.remove('read');
            bookCardisReadText.textContent = 'Read: No';
        }
        else{
            //bookCardisReadText === true - text is set to 'Yes';
            isReadInput.classList.add('read')
            bookCardisReadText.textContent = 'Read: Yes';
        }
        bookCardisRead.appendChild(bookCardisReadText);
        bookCardisRead.id = 'isRead'
        bookCardisRead.classList.add('cardText');
        bookCardDiv.appendChild(bookCardisRead);
        
        //create changeReadStatus button
        let changeStatus = document.createElement('div');
        let changeStatusBtnText = document.createTextNode('Change Status');
        changeStatus.appendChild(changeStatusBtnText);
        changeStatus.id = 'readStatus'
        changeStatus.classList.add('btn');
        bookCardDiv.appendChild(changeStatus);
        //create deleteBtn button 
        let deleteButton = document.createElement('div');
        let deleteButtonText = document.createTextNode('Delete');
        deleteButton.appendChild(deleteButtonText);
        deleteButton.id = 'delBtn';
        deleteButton.classList.add('btn');
        deleteButton.classList.add('deleteBtn');
        bookCardDiv.appendChild(deleteButton);   
        //adds onclick event onto deleteBtn  - removing the card when clicked
        deleteButton.addEventListener('click', (e) => {
            arr[i].deleteBook(arr[i]); //this will remove the currentbook from the myLibrary array - that way we aren't 'burning the book'.
            // console.log(myLibrary);
            //we want to target the parentNode of the currentTarget which in this instance is the card element - bookCardDiv
            container.removeChild(e.currentTarget.parentNode);
        });
        //This is resoonsible for changing the readStatus of bookCard
        changeStatus.addEventListener('click', arr[i].changeReadStatus);
    }
    console.log(myLibrary);
    // arr.shift() //this will remove the first element from myLibrary - it will prevent cards being duplicated when submitting new books
    

    
}

// render(myLibrary);

//Step 3 - Algorithm
//When render() loops through the list: 
//It will create a new div element - which will be added as a child onto the container element.
//The div will be given the .card class so it could inherit the css properties associated with the class.
//Then four h5 tags will be appended as children onto the div element which was created during the loop iteration.
//In order to be created - document.createElement('H5') - this will create a <h5> tag - which then we want to give it some text - document.createTextNode('--text--');
//The <h5> tag will be added as a child onto the bookCardDiv element.
// They will be given the .cardText class in order to get the styles of the cardText class. These h5 tags will correspond to the properties of the objects in the myLibrary array
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
    titleTextInput.value = '';
    authorTextInput.value = '';
    pagesTextInput.value = '';
    isReadInput.value = '';
}

exitFormBtn.addEventListener('click', closeForm);

//Step 5:
//When the submitBook button is clicked:
//Grab the values from the text input fields;
//Check if the checkbox has been checked or not - this will determine the status of isRead
//Algorithm: 
//Target all the relevant DOM elements on the form:
//textInput fields - 
let titleTextInput = document.getElementById('booktitle');
let authorTextInput = document.getElementById('bookauthor');
let pagesTextInput = document.getElementById('bPages');
let isReadInput = document.getElementById('readCheckbox');
let submitBookBtn = document.getElementById('submitBtn');

//Create eventListener for when the submit button is clicked:

function submitNewBook(){
    //grab the values of the textInput fields:
    let xTitle = titleTextInput.value;
    let xAuthor = authorTextInput.value;
    let xPages = pagesTextInput.value;
    let xisRead = isReadInput.checked; //returns true or false dependent on the checkbox being checked or not.  
    //create a new book using the Book function constructor - 
    if(!(xTitle && xAuthor && xPages)){
        //If the values of xTitle, xAuthor abd xPages are false it will cause the following alert statement to be executed. 
        alert('Please enter a value! ')
    }
    else{
        let xBook = new Book(xTitle, xAuthor, xPages, xisRead); //creates new instance using Book function constructor
        //call addbooktoshelf() 
        addBookToshelf(xBook);
        //call render()
        render(myLibrary);
    
    }
    
}

submitBookBtn.addEventListener('click', submitNewBook);
//SOLVED - problem - When the submit button event has fired it will cause the webpage to reload and return back to its original state.  - The solution to this problem - setting a input type='submit' it will cause the page to reload when it gets clicked - so to resolve that issue, I decided two create two divs and make use of CSS to make their appearance like buttons.

//SOLVED - Next problem: 1. When I submit a new book - it will create a card which will have details of the book. 2. Once I exit the addBook form - it will empty the input text fields and the form will disappear. 3. If I reopen the form and then click on AddBook - keep in mind the text input fields haven't been filled. 
//One approach is putting in an error handler where if the AddBook button is pressed on all textinput fields that are empty then it will alert the user to enter values;

//SOLVED - Problem - When submitting a new book - when there already is a pre-existing book, it will create a copy of the pre-existing book - Solution to this: resetting the myLibrary array which will prevent any copies of pre-existing bookCards.

//Step 6:
//Add a deleteBook button 
//When the button is clicked - the bookCard will be removed from the webpage - to achieve all we need to do is set the display property of the card to 'none'
//Current problem on lines 93-94 can't seem to get the Delete button to work - if there's only one bookCard and the deleteButton is clicked - it will be removed, however if there is more than one book it fails to work. 
//This problem was solved - due to not selecting the right element it was causing the problem - the right element was deleteButton.addEventListener...

//Step 7:
//Change Status button - has been added. 
