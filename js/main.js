const url = `https://www.omdbapi.com/?ab2d9a8e`;

let searchInput, typeSelect;

const output = document.querySelector('.card__output');
const details = document.querySelector('.card__details');
const pagination = document.querySelector('.pagination');
const more = pagination.querySelector('.pagination__more');
const count = more.querySelector('.pagination__count');
const clearBtn = pagination.querySelector('.clear-btn');


// Вивід фільмів на Index Page
fetchCall(showIndex, '', 'Action', 'movie');


// Подія яка робить пошук фільму
card__form.addEventListener('submit', function(event) {
    event.preventDefault();

    searchInput = searchForm.elements.s.value;
    typeSelect =  searchForm.elements.type.value;

    fetchCall(showAll, '', searchInput, typeSelect);

    // Закриває при новому пошуку відкритий фільм
    details.innerHTML = '';
});