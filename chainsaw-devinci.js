/* Add sponso tag */
var sponso = document.getElementById('footer');
sponso.innerHTML += 'Sponsored by Effective Chainsaw 🥓🥚';

//Update flag
var logo = document.querySelector('.nav-indicators .dropdown:not(.nav-messages) a img').src = "https://github.com/Kaowarstail/effective-chainsaw-cours-git/blob/french-to-usa/usa-flag.png?raw=true";

//Update school logo
var school = document.querySelector('.schoole_pastil img').src = "https://sawakinome.com/img/images_1/difference-between-harvard-college-and-harvard-university_2.png";

//Chainsaw logo 
var chainsaw = document.querySelector(".user img").src = "https://github.com/Kaowarstail/effective-chainsaw-cours-git/blob/main/chainsaw-logo.png?raw=true";
//Change your name into a better one
var better_name = document.querySelector(".user span").textContent = "Effective Chainsaw";