
$(document).click(function(event) {

    // Setting the variables to be used in the query URL
    var apiKey = "WoziZ4MaAoeJ1sbHlghGbXP0VqFxQVqv";
    var searchTerm = "election";
    var beginDate = "20190101";
    var endDate = "20190102";
    
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=" + apiKey + '&' + "facet_fields=source&facet=true&begin_date=" + beginDate + '&'+"end_date=" + endDate;
    
    // AJAX request to NYT API

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });

    // Loop through all articles in response and add date to DOM
    for(var i = 0; i < response.length; i++) {
        




    }




});

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
});