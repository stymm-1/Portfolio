//========================Dark Theme===========================
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

//using local storage to find the  previous selected theme 
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//current theme and icons
const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme)?'uil-moon':'uil-sun'

//previously chosen a topic
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon'?'add':'remove'](iconTheme)
}

// Activate/ deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //ADD or remove the dark/light icon -- icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //We save the theme and the current icon that the user has chosen
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})




const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// ================  MENU SHOW  =============
/*  Validate if the constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
} 

// ================  MENU HIDE  =============
/*  Validate if the constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
} 


//===================================== REMOVE MENU PRORFILE =========================
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // when we click on nav__links, we remove the show menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


//===================================== Typewriter Effect ======================


new Typewriter('#typewriter', {
    strings: ['Web-developer', 'Graphic-designer','Electrical-Engineer', 'e-Tutor','Freelancer'],
    autoStart: true,
    loop: true,
    cursor: "|"
  });



  //==============================Project swiper===========================

        var swiper = new Swiper(".blog-slider", {
            spaceBetween: 30,
            effect: 'fade',
            loop: true,
            mousewheel:{
                invert: false,
            },
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
            pagination: {
            el: ".blog-slider__pagination",
            clickable: true,
            },
            // mousewheel: true,
            keyboard: true,
        });
  

//===================================== SCROLL SECTION ACTIVE HIGHLIGHT =========================

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })

}
window.addEventListener('scroll', scrollActive)