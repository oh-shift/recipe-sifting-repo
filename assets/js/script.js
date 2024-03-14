const searchInputEl = $("#ingredientSearchInput");
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

function createModalElements(mealUrl, modalEl) {
  fetch(mealUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      const ingredientsListEl = $("<ul>");
      const instructionsEl = $("<p>");
      instructionsEl.text(data.meals[0].strInstructions);

      // for (i = 1; i < 21; i++) {
      //   if (`data.meals[0].strIngredient${i}` !== "") {
      //     const ingredientLi = $("<li>");
      //     const measurementText = `data.meals[0].strMeasure${i}`;
      //     const ingredientText = `data.meals[0].strIngredient${i}`;
      //     ingredientLi.text(`${measurementText} ${ingredientText}`);
      //     ingredientsListEl.append(ingredientLi);
      //   }
      // }
      if (
        data.meals[0].strIngredient1 !== "" &&
        data.meals[0].strIngredient1 !== null
      ) {
        const ingredientLi = $("<li>");
        ingredientLi.text(
          `${data.meals[0].strMeasure1} ${data.meals[0].strIngredient1}`
        );
        ingredientsListEl.append(ingredientLi);
      }
      if (
        data.meals[0].strIngredient2 !== "" &&
        data.meals[0].strIngredient2 !== null
      ) {
        const ingredientLi = $("<li>");
        ingredientLi.text(
          `${data.meals[0].strMeasure2} ${data.meals[0].strIngredient2}`
        );
        ingredientsListEl.append(ingredientLi);
      }
      if (
        data.meals[0].strIngredient3 !== "" &&
        data.meals[0].strIngredient3 !== null
      ) {
        const ingredientLi = $("<li>");
        ingredientLi.text(
          `${data.meals[0].strMeasure3} ${data.meals[0].strIngredient3}`
        );
        ingredientsListEl.append(ingredientLi);
      }
      if (
        data.meals[0].strIngredient4 !== "" &&
        data.meals[0].strIngredient4 !== null
      ) {
        const ingredientLi = $("<li>");
        ingredientLi.text(
          `${data.meals[0].strMeasure4} ${data.meals[0].strIngredient4}`
        );
        ingredientsListEl.append(ingredientLi);
      }
      if (
        data.meals[0].strIngredient5 !== "" &&
        data.meals[0].strIngredient5 !== null
      ) {
        const ingredientLi = $("<li>");
        ingredientLi.text(
          `${data.meals[0].strMeasure5} ${data.meals[0].strIngredient5}`
        );
        ingredientsListEl.append(ingredientLi);
      }
      if (
        data.meals[0].strIngredient6 !== "" &&
        data.meals[0].strIngredient6 !== null
      ) {
        const ingredientLi = $("<li>");
        ingredientLi.text(
          `${data.meals[0].strMeasure6} ${data.meals[0].strIngredient6}`
        );
        ingredientsListEl.append(ingredientLi);
      }
      if (
        data.meals[0].strIngredient7 !== "" &&
        data.meals[0].strIngredient7 !== null
      ) {
        const ingredientLi = $("<li>");
        ingredientLi.text(
          `${data.meals[0].strMeasure7} ${data.meals[0].strIngredient7}`
        );
        ingredientsListEl.append(ingredientLi);
      }
      if (
        data.meals[0].strIngredient8 !== "" &&
        data.meals[0].strIngredient8 !== null
      ) {
        const ingredientLi = $("<li>");
        ingredientLi.text(
          `${data.meals[0].strMeasure8} ${data.meals[0].strIngredient8}`
        );
        ingredientsListEl.append(ingredientLi);
      }
      if (
        data.meals[0].strIngredient9 !== "" &&
        data.meals[0].strIngredient9 !== null
      ) {
        const ingredientLi = $("<li>");
        ingredientLi.text(
          `${data.meals[0].strMeasure9} ${data.meals[0].strIngredient9}`
        );
        ingredientsListEl.append(ingredientLi);
      }
      if (
        data.meals[0].strIngredient10 !== "" &&
        data.meals[0].strIngredient10 !== null
      ) {
        const ingredientLi = $("<li>");
        ingredientLi.text(
          `${data.meals[0].strMeasure10} ${data.meals[0].strIngredient10}`
        );
        ingredientsListEl.append(ingredientLi);
      }
      if (
        data.meals[0].strIngredient11 !== "" &&
        data.meals[0].strIngredient11 !== null
      ) {
        const ingredientLi = $("<li>");
        ingredientLi.text(
          `${data.meals[0].strMeasure11} ${data.meals[0].strIngredient11}`
        );
        ingredientsListEl.append(ingredientLi);
      }
      if (
        data.meals[0].strIngredient12 !== "" &&
        data.meals[0].strIngredient12 !== null
      ) {
        const ingredientLi = $("<li>");
        ingredientLi.text(
          `${data.meals[0].strMeasure12} ${data.meals[0].strIngredient12}`
        );
        ingredientsListEl.append(ingredientLi);
      }
      if (
        data.meals[0].strIngredient13 !== "" &&
        data.meals[0].strIngredient13 !== null
      ) {
        const ingredientLi = $("<li>");
        ingredientLi.text(
          `${data.meals[0].strMeasure13} ${data.meals[0].strIngredient13}`
        );
        ingredientsListEl.append(ingredientLi);
      }
      if (
        data.meals[0].strIngredient14 !== "" &&
        data.meals[0].strIngredient14 !== null
      ) {
        const ingredientLi = $("<li>");
        ingredientLi.text(
          `${data.meals[0].strMeasure14} ${data.meals[0].strIngredient14}`
        );
        ingredientsListEl.append(ingredientLi);
      }
      if (
        data.meals[0].strIngredient15 !== "" &&
        data.meals[0].strIngredient15 !== null
      ) {
        const ingredientLi = $("<li>");
        ingredientLi.text(
          `${data.meals[0].strMeasure15} ${data.meals[0].strIngredient15}`
        );
        ingredientsListEl.append(ingredientLi);
      }
      if (
        data.meals[0].strIngredient16 !== "" &&
        data.meals[0].strIngredient16 !== null
      ) {
        const ingredientLi = $("<li>");
        ingredientLi.text(
          `${data.meals[0].strMeasure16} ${data.meals[0].strIngredient16}`
        );
        ingredientsListEl.append(ingredientLi);
      }
      if (
        data.meals[0].strIngredient17 !== "" &&
        data.meals[0].strIngredient17 !== null
      ) {
        const ingredientLi = $("<li>");
        ingredientLi.text(
          `${data.meals[0].strMeasure17} ${data.meals[0].strIngredient17}`
        );
        ingredientsListEl.append(ingredientLi);
      }
      if (
        data.meals[0].strIngredient18 !== "" &&
        data.meals[0].strIngredient18 !== null
      ) {
        const ingredientLi = $("<li>");
        ingredientLi.text(
          `${data.meals[0].strMeasure18} ${data.meals[0].strIngredient18}`
        );
        ingredientsListEl.append(ingredientLi);
      }
      if (
        data.meals[0].strIngredient19 !== "" &&
        data.meals[0].strIngredient19 !== null
      ) {
        const ingredientLi = $("<li>");
        ingredientLi.text(
          `${data.meals[0].strMeasure19} ${data.meals[0].strIngredient19}`
        );
        ingredientsListEl.append(ingredientLi);
      }
      if (
        data.meals[0].strIngredient20 !== "" &&
        data.meals[0].strIngredient20 !== null
      ) {
        const ingredientLi = $("<li>");
        ingredientLi.text(
          `${data.meals[0].strMeasure20} ${data.meals[0].strIngredient20}`
        );
        ingredientsListEl.append(ingredientLi);
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
        $("#ingredientSearchInput").autocomplete({
          source: ingredientsList,
        });
      });
    });
}

function handleSearch(event) {
  event.preventDefault();

  const searchUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputEl.val()}`;

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

        mealTitleEl.text(data.meals[i].strMeal);
        thumbnailEl.attr("src", data.meals[i].strMealThumb);
        receiptsEl.append(mealTitleEl);
        receiptsEl.append(thumbnailEl);
        receiptContainer.append(receiptsEl);
        receiptContainer.append(modalEl);

        createModalElements(mealUrl, modalEl);
      }
    });
}

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

function handleCocktailSearch(event) {
  event.preventDefault();

  const cocktailSearchUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailInputEL.val()}`;

  fetch(cocktailSearchUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i = 0; i < data.drinks.length; i++) {
        const receiptsEl = $("<div>");
        const drinkTitleEl = $("<div>");
        const thumbnailEl = $("<img>");
        const modalEl = $("<div>");
        const drinkUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${data.drinks[i].idDrink}`;

        drinkTitleEl.text(data.drinks[i].strDrink);
        thumbnailEl.attr("src", data.drinks[i].strDrinkThumb);
        receiptsEl.append(drinkTitleEl);
        receiptsEl.append(thumbnailEl);
        receiptContainer.append(receiptsEl);
        receiptContainer.append(modalEl);

        createModalElements(drinkUrl, modalEl);
      }
    });
}

createCocktailList();
cocktailSearchEl.on("click", handleCocktailSearch);
createIngredientsList();
searchEl.on("click", handleSearch);
