const searchInputEl = $("#ingredientSearchInput");
const searchEl = $("#search");
const ingredientsListUrl =
  "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
let ingredients = [];

function createIngredientsList() {
  fetch(ingredientsListUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (i = 0; i < data.meals.length; i++) {
        ingredient = data.meals[i].strIngredient;
        ingredients = ingredients.concat(ingredient);
      }
      $(function () {
        const ingredientsList = ingredients;
        $("#ingredientSearchInput").autocomplete({
          source: ingredientsList,
        });
      });
    });
}

function handleSearch(event) {
  event.preventDefault();

  const searchUrl = `www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputEl.val()}`;

  fetch(searchUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

console.log(searchEl);
createIngredientsList();
searchEl.on("click", handleSearch);

// searchEl.addEventListener("click", handleSearch);

// www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
