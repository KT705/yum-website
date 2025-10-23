const openNavbr = document.querySelector("#opennavbr");
const navbr = document.querySelector(".navbar");
const closeNavbr = document.querySelector("#closenavbr");
openNavbr.addEventListener("click", () => navbr.classList.add("active"));
closeNavbr.addEventListener("click", () => navbr.classList.remove("active"));

AOS.init();

function toggleDropdown(event, menuId){
    event.preventDefault();

    const menu = document.getElementById(menuId);

    menu.classList.toggle('show');

    closeOtherDropdowns(menuId);
}

function closeOtherDropdowns(currentMenuId){
    const dropdowns = document.getElementsByClassName('dropdown-content');
    for(let i = 0; i < dropdowns.length; i++){
        const openDropdown = dropdowns[i];

        if(openDropdown.classList.contains('show') && openDropdown.id !== currentMenuId){
            openDropdown.classList.remove('show');
        }
    }
}

window.onclick = function(event){
    if(!event.target.matches('.dropdown h4')){
        closeOtherDropdowns(null);
    }
}

//---------------for image slider-------------------------------------
/*let slideIndex = 0; 
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

slides.style.width = totalSlides * 100 + '%'; 

function changeSlide(n) {
    slideIndex += n;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

function showSlides() {
    
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    if (slideIndex < 0) {
        slideIndex = totalSlides - 1; 
    }

    const transformValue = -slideIndex * (100 / totalSlides) + '%';
    slides.style.transform = 'translateX(' + transformValue + ')';

    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === slideIndex) {
            dot.classList.add('active');
        }
    });
}

showSlides();

function startAutoSlide() {
    
    const slideInterval = setInterval(function() {
        
        slideIndex++; 
        
        showSlides();
    }, 5000); 

    
    return slideInterval;
}

startAutoSlide();*/