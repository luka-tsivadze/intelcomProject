
let indexForChange = 0;
let i = 0;
let submanu = document.getElementById('sm');

let INTELData = JSON.parse(localStorage.getItem('Data'));
let rc = document.getElementById('RC');
let main = document.getElementById('mn');
let counter = 0;
let chosenHeaderNav = INTELData[0].basic;
let li = document.querySelectorAll('.navIcon');

// Event listener for navigation icons
for (let key of li) {
    key.addEventListener('click', function () {
        // Remove 'active' class from all navigation icons
        li.forEach(item => {
            item.classList.remove('active');
        });
        // Add 'active' class to the clicked navigation icon
        key.classList.add('active');
        // Update chosenHeaderNav based on clicked icon
        chosenHeaderNav = key.innerText;
        chosingnav();
    });
}

// Initial function call to populate the page
chosingnav();

// Function to handle navigation choice
function chosingnav() {
    // Determine which section is chosen and update chosenHeaderNav accordingly
    if (chosenHeaderNav == 'Basics') {
        chosenHeaderNav = INTELData[0].basic;
    } else if (chosenHeaderNav == 'Setup') {
        chosenHeaderNav = INTELData[1].setup;
    } else if (chosenHeaderNav == 'Smart') {
        chosenHeaderNav = INTELData[2].smart;
    } else if (chosenHeaderNav == 'About') {
        chosenHeaderNav = INTELData[3].about;
    } else {
        // Handle other cases if needed
    }

    // Clear main content
    let index = 0;
    let hparent = document.getElementById('smi');
    hparent.innerHTML = '';
    main.innerHTML = '';

    // Populate main content based on chosenHeaderNav
    if (chosenHeaderNav[1]) {
        // Display cards
        rc.parentElement.classList.remove('parent');
        rc.classList.remove('dNone');
        for (let head of chosenHeaderNav) {
            h5(head.header);
            if (head.cards) {
                for (let card of head.cards) {
                    if (index % 3 == 0) {
                        creatingFirstcard(card);
                    } else if (index % 3 == 1) {
                        creatingSecondcard(card);
                    } else {
                        thirdCard(card);
                    }
                    index++;
                }
            }
            var h4 = document.createElement('h4');
            h4.innerText = head.header;
            hparent.appendChild(h4);
            Rightfilter(h4);
        }
    } else {
        // Display about section
        about(chosenHeaderNav.text);
        rc.classList.add('dNone');
        rc.parentElement.classList.add('parent');
    }
}
// Function to create the first type of card
function creatingFirstcard(card) {
 
  
  let firstCard = document.createElement('div');
  firstCard.classList.add('Fcard', 'cards');

  
  let leftSide = document.createElement('a');
  leftSide.classList.add('cardLeft');
  leftSide.setAttribute('href',`${card.Img}`)
  leftSide.setAttribute('target', '_blank');
  let imgLeft = document.createElement('img');
  console.log()
  imgLeft.src = `${card.Img}`;
  imgLeft.alt = '';
  leftSide.appendChild(imgLeft);

  // Create the right side of the card
  let rightSide = document.createElement('div');
  rightSide.classList.add('cardRight');
  let pRight = document.createElement('p');
  pRight.textContent = `${card.text}`;
  rightSide.appendChild(pRight);

  // Append left and right side to the first card
  firstCard.appendChild(leftSide);
  firstCard.appendChild(rightSide);
  main.appendChild(firstCard)

  ForText()
}

// Function to create the second type of card
function creatingSecondcard(card) {
  let secondCard = document.createElement('div');
  secondCard.classList.add('Scard', 'cards');

  let rightSideSecondCard = document.createElement('div');
  rightSideSecondCard.classList.add('cardRight');
 
  let pRightSecondCard = document.createElement('p');

  pRightSecondCard.textContent = `${card.text}`;
  rightSideSecondCard.appendChild(pRightSecondCard);

  let rightSideSecondCardRight = document.createElement('a');
  rightSideSecondCardRight.classList.add('ScardR');
  rightSideSecondCardRight.setAttribute('href',`${card.Img}`)
  rightSideSecondCardRight.setAttribute('target', '_blank');
  let imgRight = document.createElement('img');
  imgRight.src = `${card.Img}`;
  imgRight.alt = '';
  rightSideSecondCardRight.appendChild(imgRight);

  secondCard.appendChild(rightSideSecondCard);
  secondCard.appendChild(rightSideSecondCardRight);
  main.appendChild(secondCard)

  ForText()
}

// Function to create the third type of card
function thirdCard(card) {
  let thirdCard = document.createElement('div');
  thirdCard.classList.add('TCard', 'cards');

  let imgPlace = document.createElement('div');
  imgPlace.classList.add('imgPlace');
  let imgFrame = document.createElement('a');
  imgFrame.classList.add('ImgFrame');
  imgFrame.setAttribute('href',`${card.Img}`)
  imgFrame.setAttribute('target', '_blank');
  let imgThirdCard = document.createElement('img');
  imgThirdCard.src = `${card.Img}`;
  
  imgThirdCard.alt = ``;
  imgFrame.appendChild(imgThirdCard);
  imgPlace.appendChild(imgFrame);

  // Create the text place for the third card
  let textPlace = document.createElement('div');
  textPlace.classList.add('TextPlace');
  let pThirdCard = document.createElement('p');
  pThirdCard.textContent = `${card.text}`;
  textPlace.appendChild(pThirdCard);

  // Append image place and text place to the third card
  thirdCard.appendChild(imgPlace);
  thirdCard.appendChild(textPlace);
  main.appendChild(thirdCard);
}

// Function to create header element
function h5(head) {
  let h5 = document.createElement('h5')
  h5.innerHTML = `${head}`
  main.appendChild(h5)
}

// Function to add event listener for right filter
function Rightfilter(h4) {

  h4.addEventListener('click', function () {

    counter = 0;
    for (chack of chosenHeaderNav) {
      if (h4.textContent == chack.header) {
        main.innerHTML = ' '
        h5(chack.header)
        for (let crd of chack.cards) {
          if (counter % 3 == 0) {
            creatingFirstcard(crd)
          } else if (counter % 3 == 1) {
            creatingSecondcard(crd)
          } else {
            thirdCard(crd)
          }
          counter++

        }
      }
    }

  })
}

// Function to display about section
function about(text) {
  let carousell=document.createElement('div')
  carousell.classList.add('carousell')
 carousell.innerHTML=`<div id="carouselExampleIndicators" class="carousel slide">
<div class="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="photos/Uniview-cloud-storage-video-surveillance 1About.png" class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item">
    <img src="photos/Uniview-cloud-storage-video-surveillance 1About.png" class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item">
    <img src="photos/Uniview-cloud-storage-video-surveillance 1About.png" class="d-block w-100" alt="...">
  </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
<svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
<svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
<path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
</svg>
</button>
</div>`
 let AbParent = document.createElement('div')
AbParent.classList.add('AboutMain')
 
let textSide=document.createElement('div')
textSide.classList.add('AboutText')
  textSide.innerText = `${text}`
 AbParent.appendChild(carousell)
 AbParent.appendChild(textSide)
    main.appendChild(AbParent)
}

// Function to handle overflow of card content
function ForText(){
  const cardRightElements = document.querySelectorAll('.cardRight');

  cardRightElements.forEach(cardRight => {
      const content = cardRight.querySelector('p');
  
      
      if (content.scrollHeight > cardRight.clientHeight) {
          cardRight.classList.add('overflowing');
     
      }

      
      window.addEventListener('resize', function() {
          if (content.scrollHeight > cardRight.clientHeight) {
              cardRight.classList.add('overflowing');
          } else {
              cardRight.classList.remove('overflowing');
          }
      });
  });
};
