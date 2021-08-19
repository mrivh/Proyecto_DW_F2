import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import "./style.css";
import 'regenerator-runtime/runtime';

const nameBtn = document.getElementById('search-name-btn')
const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealNameList = document.getElementById('list-meal');

// Botones con event listeners para mostrar las recetas.
nameBtn.addEventListener('click', () => {
    getNameList();
    mealNameList.addEventListener('click', event => {
        if (event.target.getAttribute('id-meal-name')) {
            const id = event.target.getAttribute('id-meal-name');
            getMealbyId(id, 0);
        }
        if (event.target.getAttribute('id-meal-img')) {
            const id = event.target.getAttribute('id-meal-img');
            getMealbyId(id, 0);
        }
    })
});

searchBtn.addEventListener('click', () => {
    getMealList();
    mealList.addEventListener('click', event => {
        if (event.target.getAttribute('id-meal-name')) {
            const id = event.target.getAttribute('id-meal-name');
            getMealbyId(id, 1);
        }
        if (event.target.getAttribute('id-meal-img')) {
            const id = event.target.getAttribute('id-meal-img');
            getMealbyId(id, 1);
        }
    })
});

// Búsqueda por ingrediente.
function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `
                <div class="meal-item">
                     <div class="meal-img" >
                      <img src="${meal.strMealThumb}" alt="food" id-meal-img="${meal.idMeal}"/>
                      <div class="meal-info" >
                        <h3 id-meal-name="${meal.idMeal}">${meal.strMeal}</h5>
                      </div>
                    </div>
                </div>
                  `;
                });
                mealList.classList.remove('notFound');
            } else {
                html = "No hay resultados";
                mealList.classList.add('notFound');
            }

            mealList.innerHTML = html;
        });
}


//Búsqueda por nombre
function getNameList() {
    let InputTxt = document.getElementById('search-input-name').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${InputTxt}`)
        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `
                <div class="meal-item">
                     <div class="meal-img" >
                      <img src="${meal.strMealThumb}" alt="food" id-meal-img="${meal.idMeal}"/>
                      <div class="meal-info" >
                        <h3 id-meal-name="${meal.idMeal}">${meal.strMeal}</h5>
                      </div>
                    </div>
                </div>
                  `;
                });
                mealNameList.classList.remove('notFound');
            } else {
                html = "No hay resultados";
                mealNameList.classList.add('notFound');
            }

            mealNameList.innerHTML = html;
        });
}

const getMealbyId = (idMeal, helper) => {
    let i = 0;
    if (helper === 0) { mealNameList.innerHTML = '' }
    else if (helper === 1) { mealList.innerHTML = ''; i = 1; }
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .then(response => response.json())
        .then(data => {
            const meal = data.meals[0];
            console.log(i)
            addElementRecipe(meal, i);
            // console.log(meal)
        });
};

const addElementRecipe = (meal, x) => {
    const ingredientesArray = [];
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredientesArray.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
        } else {
            break;
        }
    }

    if (x === 0) {
        mealNameList.innerHTML = `
        <div class="card text-center m-auto" >
        <h2>Receta</h2>
           <div>
           <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
           <div>
               <h3>${meal.strMeal}</h3>
                   ${meal.strCategory ? `<p>Categoría - ${meal.strCategory}</p>` : ''}
                   ${meal.strArea ? `<p>Área - ${meal.strArea}</p>` : ''}
               </div>
           </div>

           <div>
               <h2>Instrucciones:</h2>
               <p>${meal.strInstructions}</p>
               <h2>Ingredientes:</h2>
               <ul>
                   ${ingredientesArray.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
               </ul>
           </div>
       </div>
        `
    }

    else if (x === 1) {
        mealList.innerHTML = `
        <div class="card text-center m-auto" >
        <h2>Receta</h2>
           <div>
           <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
           <div>
               <h3>${meal.strMeal}</h3>
                   ${meal.strCategory ? `<p>Categoría - ${meal.strCategory}</p>` : ''}
                   ${meal.strArea ? `<p>Área - ${meal.strArea}</p>` : ''}
               </div>
           </div>

           <div>
               <h2>Instrucciones:</h2>
               <p>${meal.strInstructions}</p>
               <h2>Ingredientes:</h2>
               <ul>
                   ${ingredientesArray.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
               </ul>
           </div>
       </div>
        `
    }


};