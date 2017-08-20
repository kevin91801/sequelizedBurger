$("#burgerSubmit").on("click", function(event) {
  event.preventDefault();

  var newBurger = {
    burger_name: $("#burger").val().trim()
  };

 console.log(newBurger);

  $.post("/burgers/create", newBurger)
    .done(function() {

      var row = $("<div>");
      row.addClass("burger");

      row.append(newBurger.burger_name);
      $("#burger-area").prepend(row);

    });
  $("#burger").val("");
});

$.get("/", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("burger");

      row.append(data[i].burger_name);
     $("#burger-area").prepend(row);

    }

  }

});