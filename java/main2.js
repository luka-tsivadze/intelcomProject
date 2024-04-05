

let LineParent = document.getElementById('RC')
LineParent.addEventListener('click', change)

function change() {
    indexForChange++
    let line1 = document.querySelector('.RightCorner .line1');
    let line2 = document.querySelector('.RightCorner .line2');
    let line3 = document.querySelector('.RightCorner .line3');

    if (indexForChange % 2 == 1) {
        line1.classList.add('rotateMinus45');
        line2.classList.add('opacityZero');
        line3.classList.add('moveDown');

        // menu.style.zIndex='3';     
        submanu.classList.add('openManu')

    } else {

        submanu.classList.remove('openManu')
        line1.classList.remove('rotateMinus45');
        line2.classList.remove('opacityZero');
        line3.classList.remove('moveDown');

    }


}

let fCards = document.querySelectorAll('.Fcard');
let sCards = document.querySelectorAll('.Scard');
let tCards = document.querySelectorAll('.TCard');


function handleAnimation(elements, fadeInClass, additionalClass) {

    elements.forEach(element => {
        let isInView = element.getBoundingClientRect().top >= -400 && element.getBoundingClientRect().bottom <= window.innerHeight+400;
        if (isInView && !element.animated) {
            element.classList.add(fadeInClass);
            if (additionalClass) {
                element.classList.add(additionalClass);
            }
            element.animated = true;
        }
    });
}
let card = document.querySelectorAll('.Fcard')
handleAnimation(card, 'fade-in', 'Left');
let H4 = document.querySelectorAll('h4')
for (let H of H4) {
    H.addEventListener('click', function hListener() {
     
        let card = document.querySelectorAll('.Fcard')
        handleAnimation(card, 'fade-in', 'Left');
    })
}
for (let k of li) {
    k.addEventListener('click', function () {
        let card = document.querySelectorAll('.Fcard')
        handleAnimation(card, 'fade-in', 'Left');
        let H4 = document.querySelectorAll('h4')
        for (let H of H4) {
            H.addEventListener('click', function hListener() {
                console.log('works')
                let card = document.querySelectorAll('.Fcard')
                handleAnimation(card, 'fade-in', 'Left');
            })
        }
    })
}

function handleScroll() {

    let fCards = document.querySelectorAll('.Fcard');
    let sCards = document.querySelectorAll('.Scard');
    let tCards = document.querySelectorAll('.TCard');

    handleAnimation(fCards, 'fade-in', 'Left');
    handleAnimation(sCards, 'fade-in', 'Right');
    handleAnimation(tCards, 'fade-in');
}


window.addEventListener('scroll', handleScroll);

