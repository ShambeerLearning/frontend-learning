document.addEventListener("DOMContentLoaded", () => {
  const categoryList = document.getElementById("category-list");
  categoryList.innerHTML = "";
  axios
    .get("http://localhost:3000/recipes")
    .then((response) => {
      let categories = response.data;
      categories.forEach((category) => {
        let listItem = document.createElement("div");
        listItem.classList = "killers";
        listItem.innerHTML =
          `ID: ${category.recipes_id}<br>` +
          `Категория: ${category.recipes_category}<br>` +
          `Имя: ${category.recipes_name}<br>` +
          `Ингредиенты: ${category.recipes_ingredients}<br>` +
          `Рецепт: ${category.recipes_recipe}<br>` +
          `Фото: ${category.recipes_image}`;
        categoryList.appendChild(listItem);
      });
    })
    .catch((err) => {
      categoryList.innerHTML = `Не удалось загрузить ебанину, запусти сервер сука: ${err}`;
    });
});
