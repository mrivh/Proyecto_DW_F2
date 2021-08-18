import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import "./style.css";
import 'regenerator-runtime/runtime';


const nameBtn = document.getElementById('search-name-btn')
const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealNameList = document.getElementById('list-meal');


// Botones con event listeners para mostrar las recetas.
nameBtn.addEventListener('click',getNameList);
searchBtn.addEventListener('click', getMealList);


// Búsqueda por ingrediente.
function getMealList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Ver</a>
                        </div>
                    </div>
                `;
            });
            mealList.classList.remove('notFound');
        } else{
            html = "No hay resultados";
            mealList.classList.add('notFound');
        }

        mealList.innerHTML = html;
    });
}


//Búsqueda por nombre
function getNameList(){
    let InputTxt = document.getElementById('search-input-name').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${InputTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Ver</a>
                        </div>
                    </div>
                `;
            });
            mealNameList.classList.remove('notFound');
        } else{
            html = "No hay resultados";
            mealNameList.classList.add('notFound');
        }

        mealNameList.innerHTML = html;
    });
}

