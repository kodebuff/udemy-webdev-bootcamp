var movies = [
    {
      title: "The Internship",
      rating: 4.7,
      hasWatched: true
    },
    {
      title: "Spider-Man, Homecoming",
      rating: 3.5,
      hasWatched: false
    },
    {
      title: "Despicable Me 3",
      rating: 3.5,
      hasWatched: false
    },
    {
      title: "Pirates Of The Caribbean - Dead Men Tell No Tales",
      rating: 4.5,
      hasWatched: true
    },
    {
      title: "The Man From Nowhere",
      rating: 4.3,
      hasWatched: true
    },
  ];
  
  
// //For Loop ok
// for (var i = 0; i < movies.length; i++) {
//   if (movies[i].hasWatched === true) {
//     console.log("You have watched " + "\"" + movies[i].title + "\" - " + movies[i].rating + " stars" );
//   } else {
//     console.log("You have not seen " + "\"" + movies[i].title + "\" - " + movies[i].rating + " stars" );
//   }
// }

// forEach ok
// movies.forEach(function(movie) {
//   var str = "You have "
//   if (movie.hasWatched === true) {
//     str += "watched \""
//   } else {
//     str += "not seen \""
//   }
//   str += movie.title + "\"" + " - "
//   str += movie.rating + " stars"
//   console.log(str);
// });

// make it neat by creating a function
function buildString(movie) {
  var str = "You have "
  if (movie.hasWatched === true) {
    str += "watched \""
  } else {
    str += "not seen \""
  }
  str += movie.title + "\"" + " - "
  str += movie.rating + " stars"
  
  return str;
}

movies.forEach(function(movie) {
  console.log(buildString(movie));
});