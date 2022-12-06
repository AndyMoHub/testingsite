const hamburger = document.querySelector(".hamburger"); /*query selector allows us to gets access to hamburger*/
const navMenu = document.querySelector(".nav-menu"); /*gets access to nav menu*/

hamburger.addEventListener("click", () => { /*by clicking the hamburger it will active the class that turns the hamburger into an X and also the class that shows the menu*/ 
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

/*will also need to be able to close the menu*/
document.querySelectorAll(".nav-link").forEach(n => n,
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))