// Event listener for toggling menu and animation
let LineParent = document.getElementById('RC');
LineParent.addEventListener('click', change);

function change() {
    // Increment index for change
    indexForChange++;
    // Select lines for animation
    let line1 = document.querySelector('.RightCorner .line1');
    let line2 = document.querySelector('.RightCorner .line2');
    let line3 = document.querySelector('.RightCorner .line3');

    // Check if it's an odd or even click to toggle menu animation
    if (indexForChange % 2 == 1) {
        // Add animation classes to lines
        line1.classList.add('rotateMinus45');
        line2.classList.add('opacityZero');
        line3.classList.add('moveDown');

        // Open menu by adding class
        submanu.classList.add('openManu');
    } else {
        // Remove animation classes from lines
        submanu.classList.remove('openManu');
        line1.classList.remove('rotateMinus45');
        line2.classList.remove('opacityZero');
        line3.classList.remove('moveDown');
    }
}

// Function to handle animation of elements
function handleAnimation(elements, fadeInClass, additionalClass) {
    elements.forEach(element => {
        // Check if element is in view
        let isInView = element.getBoundingClientRect().top >= -400 && element.getBoundingClientRect().bottom <= window.innerHeight + 400;
        // If element is in view and not yet animated
        if (isInView && !element.animated) {
            // Add fade-in class
            element.classList.add(fadeInClass);
            // Add additional class if specified
            if (additionalClass) {
                element.classList.add(additionalClass);
            }
            // Mark element as animated
            element.animated = true;
        }
    });
}

// Initial call to handle animation for 'Fcard' elements
let card = document.querySelectorAll('.Fcard');
handleAnimation(card, 'fade-in', 'Left');

// Add click event listeners to 'h4' elements
let H4 = document.querySelectorAll('h4');
for (let H of H4) {
    H.addEventListener('click', function hListener() {
        // Handle animation when 'h4' elements are clicked
        let card = document.querySelectorAll('.Fcard');
        handleAnimation(card, 'fade-in', 'Left');
    });
}

// Add click event listeners to navigation icons
for (let k of li) {
    k.addEventListener('click', function () {
        // Handle animation when navigation icons are clicked
        let card = document.querySelectorAll('.Fcard');
        handleAnimation(card, 'fade-in', 'Left');
        // Add click event listeners to 'h4' elements again
        let H4 = document.querySelectorAll('h4');
        for (let H of H4) {
            H.addEventListener('click', function hListener() {
                // Handle animation when 'h4' elements are clicked again
                let card = document.querySelectorAll('.Fcard');
                handleAnimation(card, 'fade-in', 'Left');
            });
        }
    });
}

// Function to handle scroll animation
function handleScroll() {
    // Select different types of cards
    let fCards = document.querySelectorAll('.Fcard');
    let sCards = document.querySelectorAll('.Scard');
    let tCards = document.querySelectorAll('.TCard');

    // Apply animation to each type of card
    handleAnimation(fCards, 'fade-in', 'Left');
    handleAnimation(sCards, 'fade-in', 'Right');
    handleAnimation(tCards, 'fade-in');
}

// Initial call to handle scroll animation
window.addEventListener('scroll', handleScroll);
