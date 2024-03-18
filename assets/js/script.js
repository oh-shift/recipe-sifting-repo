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
const landingPageEl = $("#origin");
const drinkContainer = $("#drinkContainer");
const modalTargetEl = $("#modalTarget");

function createDrinksModalElements(drinkUrl, drinksModalBodyEl) {
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
      drinksModalBodyEl.append(ingredientsListEl);
      drinksModalBodyEl.append(instructionsEl);
    });
}

function createModalElements(mealUrl, modalBodyEl) {
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
      modalBodyEl.append(ingredientsListEl);
      modalBodyEl.append(instructionsEl);

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
  console.log(event);

  const searchUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputEl.val()}`;
  const cocktailSearchUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${cocktailInputEL.val()}`;

  fetch(searchUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i = 0; i < data.meals.length; i++) {
        const receiptsEl = $("<div>");
        const thumbnailEl = $("<img>");
        const innerReceiptsEl = $("<div>");
        const innerInnerReceiptsEl = $("<div>");
        const mealTitleEl = $("<h1>");
        const modalButtonPEl = $("<p>");
        const modalButtonAEl = $("<button>");
        const modalEl = $("<div>");
        const modalDialogEl = $("<div>");
        const modalContentEl = $("<div>");
        const modalHeaderEl = $("<div>");
        const modalTitleEl = $("<h1>");
        const modalHeaderButtonEl = $("<button>");
        const modalBodyEl = $("<div>");
        const modalFooterEl = $("<div>");
        const modalFooterButtonEl = $("<button>");
        const mealUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.meals[i].idMeal}`;
        const favoriteDivEl = $("<div>");
        const favoriteEl = $("<input>");
        const favoriteLabelEl = $("<label>");

        receiptsEl.attr("class", "carousel-item");
        receiptsEl.attr("id", `index${i}`);
        favoriteDivEl.attr("class", "btn-group");

        favoriteDivEl.attr("role", "group");
        favoriteDivEl.attr("aria-label", "Basic checkbox toggle button group");
        favoriteEl.attr("type", "checkbox");
        favoriteEl.attr("class", "btn-check");
        favoriteEl.attr("id", `btncheck${i}`);
        favoriteEl.attr("autocomplete", "off");
        favoriteEl.attr("data-mealId", data.meals[i].idMeal);
        favoriteLabelEl.attr("for", `btncheck${i}`);
        favoriteLabelEl.attr("class", "btn btn-outline-primary");
        favoriteLabelEl.text("❤️");
        thumbnailEl.attr("src", data.meals[i].strMealThumb);
        thumbnailEl.attr("class", "img_recipe");
        thumbnailEl.attr("alt", data.meals[i].strMeal);
        innerReceiptsEl.attr("class", "container");
        innerInnerReceiptsEl.attr("class", "carousel-caption text-start");
        mealTitleEl.text(data.meals[i].strMeal);
        modalButtonAEl.attr("class", "btn btn-lg btn-primary");
        modalButtonAEl.attr("type", "button");
        modalButtonAEl.attr("data-bs-toggle", "modal");
        modalButtonAEl.attr("data-bs-target", `#targetid${i}`);
        modalButtonAEl.attr("href", "#");
        modalButtonAEl.text("Recipe Details");
        modalEl.attr("class", "modal fade");
        modalEl.attr("id", `targetid${i}`);
        modalEl.attr("tabindex", "-1");
        modalEl.attr("aria-labelledby", `exampleModal${i}Label`);
        modalEl.attr("aria-hidden", "true");
        modalDialogEl.attr("class", "modal-dialog");
        modalContentEl.attr("class", "modal-content");
        modalHeaderEl.attr("class", "modal-header");
        modalTitleEl.attr("class", "modal-title fs-5");
        modalTitleEl.attr("id", `exampleModal${i}Label`);
        modalTitleEl.text(data.meals[i].strMeal);
        modalHeaderButtonEl.attr("type", "button");
        modalHeaderButtonEl.attr("class", "btn-close");
        modalHeaderButtonEl.attr("data-bs-dismiss", "modal");
        modalHeaderButtonEl.attr("aria-label", "Close");
        modalBodyEl.attr("class", "modal-body");
        modalFooterEl.attr("class", "modal-footer");
        modalFooterButtonEl.attr("type", "button");
        modalFooterButtonEl.attr("class", "btn btn-secondary");
        modalFooterButtonEl.attr("data-bs-dismiss", "modal");

        modalButtonPEl.append(modalButtonAEl);
        favoriteDivEl.append(favoriteEl);
        favoriteDivEl.append(favoriteLabelEl);
        innerInnerReceiptsEl.append(favoriteDivEl);
        innerInnerReceiptsEl.append(mealTitleEl);
        innerInnerReceiptsEl.append(modalButtonPEl);
        innerReceiptsEl.append(innerInnerReceiptsEl);
        receiptsEl.append(thumbnailEl);
        receiptsEl.append(innerReceiptsEl);
        receiptContainer.append(receiptsEl);
        modalTargetEl.append(modalEl);
        modalFooterEl.append(modalFooterButtonEl);
        modalHeaderEl.append(modalTitleEl);
        modalHeaderEl.append(modalHeaderButtonEl);
        modalContentEl.append(modalHeaderEl);
        modalContentEl.append(modalBodyEl);
        modalContentEl.append(modalFooterEl);
        modalDialogEl.append(modalContentEl);
        modalEl.append(modalDialogEl);

        receiptsEl.removeClass("active");

        createModalElements(mealUrl, modalBodyEl);
      }
      landingPageEl.removeClass("active");
      const redirectEl = $("#index0");
      redirectEl.attr("class", "carousel-item active");
    });
  fetch(cocktailSearchUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i = 0; i < data.drinks.length; i++) {
        const drinksEl = $("<div>");
        const drinkTitleEl = $("<h2>");
        const drinkThumbnailEl = $("<img>");
        const drinkModalPEl = $("<p>");
        const drinkModalAEl = $("<button>");

        const drinksModalEl = $("<div>");
        const drinksModalDialogEl = $("<div>");
        const drinksModalContentEl = $("<div>");
        const drinksModalHeaderEl = $("<div>");
        const drinksModalTitleEl = $("<h1>");
        const drinksModalHeaderButtonEl = $("<button>");
        const drinksModalBodyEl = $("<div>");
        const drinksModalFooterEl = $("<div>");
        const drinksModalFooterButtonEl = $("<button>");

        const drinkUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${data.drinks[i].idDrink}`;

        drinksEl.attr("class", "col-lg-4");
        drinkThumbnailEl.attr("src", data.drinks[i].strDrinkThumb);
        drinkThumbnailEl.attr("class", "img_drink");
        drinkTitleEl.text(data.drinks[i].strDrink);
        drinkTitleEl.attr("class", "fw-normal");

        drinkModalAEl.attr("type", "button");
        drinkModalAEl.attr("data-bs-toggle", "modal");
        drinkModalAEl.attr("data-bs-target", `#drinkstargetid${i}`);

        drinkModalAEl.attr("class", "btn btn-secondary");
        drinkModalAEl.attr("href", "#");
        drinkModalAEl.attr("data-bs-toggle", "modal");
        drinkModalAEl.attr("data-bs-target", "#exampleModal");
        drinkModalAEl.text("View Details");

        drinksModalEl.attr("class", "modal fade");
        drinksModalEl.attr("id", `drinkstargetid${i}`);
        drinksModalEl.attr("tabindex", "-1");
        drinksModalEl.attr("aria-labelledby", `exampleDrinksModal${i}Label`);
        drinksModalEl.attr("aria-hidden", "true");
        drinksModalDialogEl.attr("class", "modal-dialog");
        drinksModalContentEl.attr("class", "modal-content");
        drinksModalHeaderEl.attr("class", "modal-header");
        drinksModalTitleEl.attr("class", "modal-title fs-5");
        drinksModalTitleEl.attr("id", `exampleDrinksModal${i}Label`);
        drinksModalTitleEl.text(data.drinks[i].strDrink);
        drinksModalHeaderButtonEl.attr("type", "button");
        drinksModalHeaderButtonEl.attr("class", "btn-close");
        drinksModalHeaderButtonEl.attr("data-bs-dismiss", "modal");
        drinksModalHeaderButtonEl.attr("aria-label", "Close");
        drinksModalBodyEl.attr("class", "modal-body");
        drinksModalFooterEl.attr("class", "modal-footer");
        drinksModalFooterButtonEl.attr("type", "button");
        drinksModalFooterButtonEl.attr("class", "btn btn-secondary");
        drinksModalFooterButtonEl.attr("data-bs-dismiss", "modal");

        modalTargetEl.append(drinksModalEl);
        drinksModalFooterEl.append(drinksModalFooterButtonEl);
        drinksModalHeaderEl.append(drinksModalTitleEl);
        drinksModalHeaderEl.append(drinksModalHeaderButtonEl);
        drinksModalContentEl.append(drinksModalHeaderEl);
        drinksModalContentEl.append(drinksModalBodyEl);
        drinksModalContentEl.append(drinksModalFooterEl);
        drinksModalDialogEl.append(drinksModalContentEl);
        drinksModalEl.append(drinksModalDialogEl);

        drinkModalPEl.append(drinkModalAEl);
        drinksEl.append(drinkThumbnailEl);
        drinksEl.append(drinkTitleEl);
        drinksEl.append(drinkModalPEl);
        drinkContainer.append(drinksEl);

        createDrinksModalElements(drinkUrl, drinksModalBodyEl);
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
