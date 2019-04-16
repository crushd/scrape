// Grab the articles as a json
$.getJSON("/books", function(data) {
  // For each one
  for (var i = 0; i < data.length; i++) {
    console.log(data)
    // Display the apropos information on the page
    $("#books").append(
      "<p class='text-center' data-id='" +
        data[i]._id +
        "'>" +
        "<a href='http://books.toscrape.com/" + data[i].bookUrl + "'>" +
        data[i].title + "</a>" +
        "<br />" + 
        "<a href='http://books.toscrape.com/" + data[i].bookUrl + "'>" +
        "<img src='http://books.toscrape.com/" + data[i].bookImg + "'>" +
        "</a>" +
        "<br />" +
        data[i].bookPrice + 
        "</p>"
    )};
});