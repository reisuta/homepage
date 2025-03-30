'use strict';

let targets = document.querySelectorAll('.wrapper');
let offset = 100;

window.addEventListener('scroll', function() {
  let scroll = window.scrollY;
  let h = window.innerHeight;

  for(let target of targets) {
    let pos = target.getBoundingClientRect().top + scroll;
    if (scroll > pos - h + offset) {
      target.classList.add('animated');
    }
  }
});
