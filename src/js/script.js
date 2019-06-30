svg4everybody(); // иницализация полифила для IE

$(document).ready(function () {


  var btnNext = document.querySelector('.slider__button--next');
  var btnPrev = document.querySelector('.slider__button--prev');
  var slideActive = document.querySelector('.slider__item:nth-of-type(2)');
  var slideNext = document.querySelector('.slider__item:nth-of-type(1)')
  
  
  btnNext.addEventListener('click', function () {
    slideActive.classList.toggle('slider__item--active');
    slideNext.classList.toggle('slider__item--active');
  });

  btnPrev.addEventListener('click', function () {
    slideActive.classList.toggle('slider__item--active');
    slideNext.classList.toggle('slider__item--active');
  });

});

// Если на проекте нет jQuery, но хочется $( document ).ready... (IE9+)
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });

