for (var x = 0; x < 20; x++) {
  document.getElementById('divContainer').innerHTML += "<div class=film id=film" + x + '></div>'
}

document.getElementById('options').addEventListener("change", function() {
  movieId = document.getElementById('options').value;
  movieId = result.Search[movieId].imdbID;
});

var movieId = '';
var result = {};
var array = [];
var obj= {};

document.getElementById('getTitle').addEventListener('click', function(){
  var xhr = new XMLHttpRequest()
  var title = document.getElementById('movieTitle').value;
  xhr.onreadystatechange = function() {
    if (xhr.status === 200) {
      result = JSON.parse(xhr.response);
      for(var i = 0; i < 5; i++) {
        var id ="title" + i;
        document.getElementById(id).innerHTML = result.Search[i].Title + "   (" + result.Search[i].Type + ")";
      }
      movieId = document.getElementById('options').value;
      movieId = result.Search[movieId].imdbID;
    }
  }
  xhr.open('GET', 'http://www.omdbapi.com/?s='+title+'&plot=short&r=json', true)
  xhr.send()
})

document.getElementById('addDatabase').addEventListener('click', function(){
  var xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var result = JSON.parse(xhr.response)
      obj = {
          imgUrl:"url(" + result.Poster + ")",
          title:result.Title
        }
        recommendMovie.push(obj);
        updateDivs();
    }
  }
xhr.open('GET', 'http://www.omdbapi.com/?i=' + movieId + '&plot=short&r=json', true)
xhr.send()
})

function updateDivs() {
  for (var j = 0; j < array.length; j++) {
    var id_ = "film" + j;
    document.getElementById(id_).style.backgroundImage = array[j];
  }
}

var recommendMovie = new Firebase('https://film-recommender.firebaseio.com/recommendMovie');

recommendMovie.on("value", function(snapshot) {
  console.log(snapshot.val());
  var data = snapshot.val();
  array = [];
  for (var key in data) {
    console.log(data[key].imgUrl);
    array.push(data[key].imgUrl)
    }
    console.log(array);
    updateDivs();
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
