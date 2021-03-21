

// loader
function loader() {
    setTimeout(() => {
        let closeThis = document.getElementById('loader');
        closeThis.classList.add('close-loader')
    }, 1000);
}





// header menu open
var iconHamburger = document.getElementsByClassName('icon-box')[0];
var menu = document.getElementsByClassName('menu')[0];
iconHamburger.addEventListener('click', () => {
    iconHamburger.classList.toggle('icon-x'),
    menu.classList.toggle('opened')
})

// menu link to
var links = document.querySelectorAll('.main-menu a');
links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        let targetLink = event.target;
        let idLink = targetLink.getAttribute('href');
        let goSection = document.querySelector(idLink).offsetTop - 59;

        smoothScrollTo(0, goSection);
        iconHamburger.classList.remove('icon-x'),
        menu.classList.remove('opened')
    })
})

// contact link to
const btnContact = document.getElementsByClassName('btn-contact')[0];
btnContact.addEventListener('click', (event) => {
    event.preventDefault();

    let targetLink = event.target;
    let idLink = targetLink.getAttribute('href');
    let goSection = document.querySelector(idLink).offsetTop - 59;

    smoothScrollTo(0, goSection, 100);
    iconHamburger.classList.remove('icon-x'),
    menu.classList.remove('opened')
})








function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== 'undefined' ? duration : 400;

    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);

    if (time >= duration) {
        clearInterval(timer);
    }
        window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
};
