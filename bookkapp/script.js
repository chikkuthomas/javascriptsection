function createBook() {
  // alert("inside create book")
  let bookname = boook.value;
  let author = athor.value;
  let price = prce.value;
  let pages = page.value;
  let book = {
    bookname, author, price, pages
  }
  localStorage.setItem(bookname, JSON.stringify(book))
  alert("book created")

}

// to display the book details in a card
function displayBook(item) { // calling function with argument "item"
  let htmldata = `<div class="card" style="width: 18rem;"> 
  <div class="card-header">
    ${item.bookname} 
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${item.author}</li>
    <li class="list-group-item">${item.price}</li>
    <li class="list-group-item">${item.pages}</li>
  </ul>
</div>`
  result.innerHTML = htmldata // to insert "htmldata" to the html page where id="result"
}

// to search a book the user input //
function findBook() {
  let search = serch.value // value from search box
 
  let book = JSON.parse(localStorage.getItem((search))) // check with that bookname as key[bookname]
  if (book) { // if present in local storage
    displayBook(book) // call the function display book [book details]
  }
  else {
    console.log("not found");
  }

}

// to get all the books listed in the local storage//
function allBooks() {
 
  let books = []; //  setting variable "books" as empty array
  for (let i = 0; i < localStorage.length; i++) { // iterating each elements in the local storage//
    books.push(JSON.parse(localStorage.getItem(localStorage.key(i)))) 
  }//pushing to empty array //getting elements   // getting key value with index position
  
  console.log(books); // printing details
  let htmldata = "" // htmldata set as empty
  for (let item of books) { // iterating each book item & adding to htmldata
    htmldata += `<div class="card" style="width: 18rem;">
    <div class="card-header">
      ${item.bookname}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${item.author}</li>
      <li class="list-group-item">${item.price}</li>
      <li class="list-group-item">${item.pages}</li>
    </ul>
  </div>`

  }
  result.innerHTML = htmldata // when list all button is clicked htmldata is displayed
}

// to do , user name , task name, completed status - true or false, create and list all button


