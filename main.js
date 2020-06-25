// let nav1 = document.getElementById('nav1')

// let smenu = document.getElementById('submenu')


// let backtop = document.getElementById('backtop');

// var prevScrollpos = window.pageYOffset;

// window.addEventListener('scroll', () => {
//     if(window.outerWidth <= 992) {
//         nav1.style.top = "0"; 
//     }else if (window.pageYOffset >= 50){
//         nav1.classList.add('navscroll');
//         nav1.style.top = "-50px";  
        
        
//         smenu.style.borderBottom = "none"; 
    
//         var currentScrollPos = window.pageYOffset;

//         if (prevScrollpos > currentScrollPos) {
//             nav1.style.top = "-50px";
//         } else {
//             nav1.style.top = "-200px";
//         }
//         prevScrollpos = currentScrollPos;        
//     }else{
//         nav1.classList.remove('navscroll');
//         nav1.style.top = "0"; 
//         smenu.style.borderBottom  = "solid 1px white"; 
//     }

    
// })

// /*Carousel Products index.ejs */

// let carouselcont = document.querySelector('.carousel-cont');

// let carouselimg = document.querySelector('.carousel-img')

// let prevbtnp = document.getElementById('prevbtnp');

// let nextbtnp = document.getElementById('nextbtnp');

// prevbtnp.addEventListener('click', () => {
//     carouselcont.scrollLeft -= carouselcont.offsetWidth; 
// })

// nextbtnp.addEventListener('click', () => {
//     carouselcont.scrollLeft += carouselcont.offsetWidth; 
// })

// /**/

// /*PRODUCTS/GALLERY POP UPS Al escoger uno */

// let overlayb = document.getElementById('overlayb');

// let popup = document.getElementById('popup');

// let openpop = document.getElementById('openpop');

// let closepop = document.getElementById('closepop');

// openpop.addEventListener('click', () => {
//     overlayb.style.visibility = 'visible';
//     popup.style.opacity = '1';
//     popup.style.transform = 'scale(1)';
// }) 

// closepop.addEventListener('click', () => {
//     overlayb.style.visibility = 'hidden';
//     popup.style.opacity = '0';
//     popup.style.transform = 'scale(0.7)';
// }) 


/**/

let banner = document.querySelector(".banner");

window.addEventListener('scroll', function(){
    
    let bannertop = banner.getBoundingClientRect().top;
    let barra4=bannertop*.2;
    banner.style.backgroundPosition="0 "+barra4+"px";

});