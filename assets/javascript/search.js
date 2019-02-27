var apiKey = "WoziZ4MaAoeJ1sbHlghGbXP0VqFxQVqv";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&facet_fields=begin_date=" + beginDate + "&end_date=" + endDate + "&api-key=" + apiKey;

var searchTerm = "election";
var beginDate = "20190101";
var endDate = "20190102";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
});