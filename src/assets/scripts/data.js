const cities = ["Москва", "Москва Мо", "Москвовская Область", "Россия"];
const category = ["Автомобили", "Мотоциклы", "Грузовики"];
const metro = ["Свиблово", "Арбат", "Фили"];

const citiesId = document.querySelector("#cities");
const categoryId = document.querySelector("#category");
const metroId = document.querySelector("#metro");

function setOptions(id, options) {
  options.forEach((option) => {
    id.innerHTML += `<option>${option}</option}$>`;
  });
}

// set cities
setOptions(citiesId, cities);
// set category
setOptions(categoryId, category);
// set metro
setOptions(metroId, metro);
