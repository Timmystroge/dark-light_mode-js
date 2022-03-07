   // declearing variables
let lightMode = document.querySelector('.inner_page');
let button = document.querySelector('.mode');
//addEventListener to the button 
button.addEventListener('click', (event) => {
 // what should the button do if clicked
lightMode.classList.toggle('darkmode');
});