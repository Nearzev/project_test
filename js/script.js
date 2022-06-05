

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const   promoAdv = document.querySelector('.promo__adv'),
            promoAdvImg = promoAdv.querySelectorAll('img'),
            poster = document.querySelector(".promo__bg"),
            genre = poster.querySelector('.promo__genre'),
            movieList = document.querySelector('.promo__interactive-list'),
            addForm = document.querySelector('form.add'),
            yourFilm = addForm.querySelector('.adding__input'),
            checkbox = addForm.querySelector('[type="checkbox"]'),
            delFilm = document.querySelectorAll('.delete');

        addForm.addEventListener('submit', (event) => {
            event.preventDefault();
    
            let   newFilm = yourFilm.value;
            const   favoriteFilm = checkbox.checked;
            if  (newFilm) {
                if(newFilm.length > 21) {
                    newFilm = `${newFilm.substring(0, 22)}...`;
                }
                if (favoriteFilm == true) {
                    console.log('выбран любимый фильм');
                };
                movieDB.movies.push(newFilm);
                sortArr(movieDB.movies);
                createMovieList(movieDB.movies, movieList);
            }
            event.target.reset();
        });
            
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    deleteAdv(promoAdvImg);
    genre.textContent = 'Драма';
    
    poster.style.backgroundImage = 'url("/img/bg.jpg")';   
    
    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        sortArr(films);
        parent.innerHTML = "";
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i+1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () =>{
                btn.parentElement.remove();
                movieDB.movies.splice(i,1);
                createMovieList(movieDB.movies, movieList);
            });
        });
    };
    createMovieList(movieDB.movies, movieList);
});