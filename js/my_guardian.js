function myFunction() {
  $(document).ready(function() {  
    var inputVal = $("#input_name").val();
    $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: "http://content.guardianapis.com/search?q=" + inputVal + "&format=json&api-key=some_random_api_key",
      success: function(data) {
        $("#results").empty();
        var the_response = data.response.results
        for (var i = 0; i < the_response.length; i++) {
          $("#results").append("<li><a href='" + the_response[i].webUrl + "'>" + the_response[i].webTitle + " (" + moment(the_response[i].webPublicationDate).fromNow() + ")</a></li>");
          }
        }
      });
   });
}