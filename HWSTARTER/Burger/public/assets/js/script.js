$(document).ready(function() {
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();
    var burger_id = $(this).children(".burger_id").val();
    console.log(burger_id);
    // Send the PUT request.
    $.ajax({
      method: "PUT",
      url: "/burgers/" + burger_id
    }).then(
      function(data) {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});