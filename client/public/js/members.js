$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });

  $("#user-submit").on("submit", function(e) {
    e.preventDefault();
    window.location.replace("/play");
  });

  $(".get-pokedex").on("click", function() {
    fetch("/api/user_data")
      .then(function(results) {
        return results.json();
      })
      .then(function(user) {
        window.location.replace(`/pokedex/${user.id}`);
      });
  });
});
