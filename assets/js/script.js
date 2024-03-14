const searchInputEl = $("#mealSearchInput");
const searchEl = $("#search");
const ingredientsListUrl =
  "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
let ingredients = [];
const receiptContainer = $("#receiptContainer");
const cocktailInputEL = $("#cocktailSearchInput");
const cocktailSearchEl = $("#Cocktail");
const cocktailListUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";
let drinkIngredients = [];

function createDrinksModalElements(drinkUrl, modalDrinksEl) {
  fetch(drinkUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const ingredientsListEl = $("<ul>");
      const instructionsEl = $("<p>");
      instructionsEl.text(data.drinks[0].strInstructions);

      for (i = 1; i < 16; i++) {
        const measurementText = `strMeasure${i}`;
        const ingredientText = `strIngredient${i}`;
        const valMeasurementText = data.drinks[0][measurementText];
        const valIngredientText = data.drinks[0][ingredientText];

        if (valIngredientText !== "" && valIngredientText !== null) {
          const ingredientLi = $("<li>");
          ingredientLi.text(`${valMeasurementText} ${valIngredientText}`);
          ingredientsListEl.append(ingredientLi);
        }
      }
      modalDrinksEl.append(ingredientsListEl);
      modalDrinksEl.append(instructionsEl);
    });
}

function createModalElements(mealUrl, modalEl) {
  fetch(mealUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const ingredientsListEl = $("<ul>");
      const instructionsEl = $("<p>");
      instructionsEl.text(data.meals[0].strInstructions);

      for (i = 1; i < 21; i++) {
        const measurementText = `strMeasure${i}`;
        const ingredientText = `strIngredient${i}`;
        const valMeasurementText = data.meals[0][measurementText];
        const valIngredientText = data.meals[0][ingredientText];

        if (valIngredientText !== "" && valIngredientText !== null) {
          const ingredientLi = $("<li>");
          ingredientLi.text(`${valMeasurementText} ${valIngredientText}`);
          ingredientsListEl.append(ingredientLi);
        }
      }
      modalEl.append(ingredientsListEl);
      modalEl.append(instructionsEl);

      //create an ul element that then has a list item for each ingredient 1-20 if ingreident # is not empty string

      //create a p eleemnt with instructions
    });
}

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
        $("#mealSearchInput").autocomplete({
          source: ingredientsList,
        });
      });
    });
}

function handleSearch(event) {
  event.preventDefault();

  const searchUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputEl.val()}`;
  const cocktailSearchUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${cocktailInputEL.val()}`;

  fetch(searchUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i = 0; i < data.meals.length; i++) {
        const receiptsEl = $("<div>");
        const mealTitleEl = $("<div>");
        const thumbnailEl = $("<img>");
        const modalEl = $("<div>");
        const mealUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.meals[i].idMeal}`;
        const favoriteEl = $("<input>");
        const favoriteLabelEl = $("<label>");
        const lineBrEl = $("<br>");

        favoriteEl.attr("type", "checkbox");
        favoriteEl.attr("class", "favorite");
        favoriteEl.attr("data-mealId", data.meals[i].idMeal);
        favoriteLabelEl.attr("for", "favorite");
        favoriteLabelEl.text("Save to Favorites");
        mealTitleEl.text(data.meals[i].strMeal);
        thumbnailEl.attr("src", data.meals[i].strMealThumb);
        receiptsEl.append(mealTitleEl);
        receiptsEl.append(favoriteEl);
        receiptsEl.append(favoriteLabelEl);
        receiptsEl.append(lineBrEl);
        receiptsEl.append(thumbnailEl);
        receiptContainer.append(receiptsEl);
        receiptContainer.append(modalEl);

        createModalElements(mealUrl, modalEl);
      }
    });
  fetch(cocktailSearchUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i = 0; i < data.drinks.length; i++) {
        const receiptsEl = $("<div>");
        const drinkTitleEl = $("<div>");
        const thumbnailEl = $("<img>");
        const modalDrinksEl = $("<div>");
        const drinkUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${data.drinks[i].idDrink}`;

        drinkTitleEl.text(data.drinks[i].strDrink);
        thumbnailEl.attr("src", data.drinks[i].strDrinkThumb);
        receiptsEl.append(drinkTitleEl);
        receiptsEl.append(thumbnailEl);
        receiptContainer.append(receiptsEl);
        receiptContainer.append(modalDrinksEl);

        createDrinksModalElements(drinkUrl, modalDrinksEl);
      }
    });
}

// this appears to be working
function createCocktailList() {
  fetch(cocktailListUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (i = 0; i < data.drinks.length; i++) {
        drinkIngredient = data.drinks[i].strIngredient1;
        drinkIngredients = drinkIngredients.concat(drinkIngredient);
      }
      $(function () {
        const drinkList = drinkIngredients;
        $("#cocktailSearchInput").autocomplete({
          source: drinkList,
        });
      });
    });
}

// This function needs work still
//commented out after adding to main search
// function handleCocktailSearch(event) {
//   event.preventDefault();

//   const cocktailSearchUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${cocktailInputEL.val()}`;

//   fetch(cocktailSearchUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       for (let i = 0; i < data.drinks.length; i++) {
//         const receiptsEl = $("<div>");
//         const drinkTitleEl = $("<div>");
//         const thumbnailEl = $("<img>");
//         const modalEl = $("<div>");
//         const drinkUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${data.drinks[i].idDrink}`;

//         drinkTitleEl.text(data.drinks[i].strDrink);
//         thumbnailEl.attr("src", data.drinks[i].strDrinkThumb);
//         receiptsEl.append(drinkTitleEl);
//         receiptsEl.append(thumbnailEl);
//         receiptContainer.append(receiptsEl);
//         receiptContainer.append(modalEl);

//         createModalElements(drinkUrl, modalEl);
//       }
//     });
// }

createCocktailList();
//commented out after adding to main search
// cocktailSearchEl.on("click", handleCocktailSearch); // waiting to complete function
createIngredientsList();
searchEl.on("click", handleSearch);
