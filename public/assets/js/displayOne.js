$(document).ready(function() {

    $("").on("submit", function(event) {
      event.preventDefault();
  
      var burgerInfo = {
        burger_id: $(this).children(".burger_id").val(),
        customer: $(this).children(".custom-input").val()
      };
  
      $.ajax({ 
        method: "PUT",
        url: "/burgers/update",
        data: burgerInfo
      }).then(function(data) {
        // reload page to display devoured burger in proper column
        location.reload();
      });
  
    });
  });
  



//connect with controller and grab the data for one recipe
// var id = 1;

// $.get("/recipes/indRecipe/"  + id, function(data) {

//     console.log("Recipe object: ", data);
//     var recipeImage = $('<img src=' + data.image + ' alt="Image of Recipe"')

//     console.log('YOU ARE IN THE AJAX.GET')

//     $('#recipe-image').append(recipeImage);
//     $('#recipe-name').append(data.recipe_name); 
//     $('#author-name').append(data.author_name);
//     $('#recipe-ingred').append(data.ingredients);
//     $('#recipe-direct').append(data.directions);
// });  