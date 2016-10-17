//Click add button and display this modal
$('#showMessage').on('click',function() {
  $('#modalContainer').modal('show');
})
//Click close button and hide modal
$('#closeDialog').on('click', function(){
  $('#modalContainer').modal('hide');
});



//Places object in the array
var myArray = []

function deleteMovie() {
  $('#modalDelete').modal('show')
  var id = parseInt($(this).data("id"));
  $('#hiddenId').val(id);
  console.log(id)
}

$(function (){
  /* $('.delete').on('click',function(e) {
     $('#modalDelete').modal('show')
     var id = parseInt($(this).data("id"));
     $('#hiddenId').val(id);
     console.log(id)
     //$('#modalDelete').modal('hide')

   })*/

   $('#proceedDelete').on('click',function(e) {
     var id = $('#hiddenId').val();
     $(".id" + id).remove()
     var myItem = myArray.find(function (movie) {
       return movie.id == id;
     })
   var index =  myArray.indexOf(myItem);
   myArray.splice(index, 1);
   console.log(myArray)
   })
 })

$('#cancelDelete').on('click',function(e) {
 $('#modalDelete').modal('hide')
})


  //Function for Submit button at bottom of page
function createNewRow() {
  //Takes the entry and puts it in the title property
  var movieTitle = document.getElementById("title").value
  //myArray[arrayLengthInteger].title = movieTitle

  var movieDirector = document.getElementById("director").value
  //myArray[arrayLengthInteger].director = movieDirector

  //Creates new array item with movieList in new index



  //Establishes object
  var movieList = {
  id: myArray.length +1,
  title: movieTitle,
  director: movieDirector
  }

  myArray.push(movieList)

  var arrayLength = myArray.length

  //Creates the list row on the page with entry
  var newRow = document.createElement("tr")
  newRow.setAttribute("class", "id" + arrayLength)
  var titleData = document.createElement("td")
  var directorData = document.createElement("td")
  var deleteData = document.createElement("td")
  var deleteButton = document.createElement("button")
  deleteButton.setAttribute("class", "btn btn-danger delete")
  deleteButton.setAttribute("data-id", arrayLength)
  deleteButton.innerHTML = "Delete"
  $(deleteButton).on('click',deleteMovie);

  console.log(deleteButton.id)
  console.log(deleteButton.getAttribute('class'))

  var tnMovieTitle = document.createTextNode(movieTitle)
  var tnMovieDirector = document.createTextNode(movieDirector)
  var tnDeleteButton = document.createTextNode(deleteButton)

  newRow.appendChild(titleData).appendChild(tnMovieTitle)
  newRow.appendChild(directorData).appendChild(tnMovieDirector)
  newRow.appendChild(deleteData).appendChild(deleteButton)

  //Adds list row to page
  document.getElementById("movingTable").appendChild(newRow)

  console.log(myArray)

  //Store session until tab closes

  var change = JSON.stringify(myArray);
  var myStorage = sessionStorage.setItem("idee",change)
  var message = sessionStorage.getItem("idee")
  var products = JSON.parse(message)

  console.log(products)
  //console.log(sessionStorage.getItem("idee"))

var md = document.getElementById("modalDelete");
var pd = document.getElementById("proceedDelete")
var cd = document.getElementById("cancelDelete")

}

//Function for Checkbox button in list items

//id: toDoItem[toDoItem.length - 1].id + 1

$('#submit').on('click',function(e) {
  e.preventDefault();
  $('#modalContainer').modal('hide');
  createNewRow()
})
