function createBook(){
  let book_name=bname.value
  let author=athr.value
  let pages =page.value
  let price=prce.value
  let book={
    book_name,author,pages,price
  }
  localStorage.setItem(book_name,JSON.stringify(book))
  alert("book created")
}
//  to display single book details//
function displayBook(book){
  let html_data =`<ul class="list-group">
  <li class="list-group-item active" aria-current="true">${book.book_name}</li>
  <li class="list-group-item">${book.author}</li>
  <li class="list-group-item">${book.pages}</li>
  <li class="list-group-item">${book.price}</li>
</ul>`
display_book.innerHTML=html_data
}

//search button //
function searchBook(){
  
  let detail=JSON.parse(localStorage.getItem(book.value))
  if(detail){
    displayBook(detail)
  }
  else{
    alert("not found")
  }
}

//to get all book listed//
function listAll(){
  let books=[];
  for(let i=0;i<localStorage.length;i++){
    books.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
  }
  let html_data=""
  for(book of books){
    html_data+=`<ul class="list-group">
    <li class="list-group-item active" aria-current="true">${book.book_name}</li>
    <li class="list-group-item">${book.author}</li>
    <li class="list-group-item">${book.price}</li>
    <li class="list-group-item">${book.pages}</li>
  </ul>`
  display_book.innerHTML=html_data  
  }


}