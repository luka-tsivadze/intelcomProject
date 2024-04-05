
let indexForChange = 0
let i=0;


let submanu = document.getElementById('sm')
let INTELData = [
  {
    basic: [
      {
        header: 'Login',
        cards: [
          { Img: '', text: '' },
          { Img: '', text: 'Lorem ipsum dolor sit amet consectetur. Pulvinar feugiat tellus porttitor lacinia vulputate scelerisque. Tortor neque mi morbi neque tortor pretium maecenas. Egestas massa amet etiam viverra sed venenatis pellentesque. Faucibus erat ornare turpis lacus aliquet sed aliquam dictum. Mi consequat neque odio mauris quis enim. Vel leo cras auctor elit pharetra sit amet viverra lobortis. Vel congue ut nunc consequat hendrerit scelerisque sit eget. Metus lorem faucibus congue enim vel. Eu ut eget venenatis faucibus. Urna consectetur neque urna neque tincidunt vehicula ut. Sed a vulputate ipsum felis malesuada tincidunt hendrerit facilisis. Non pellentesque amet malesuada eget maecenas. Amet amet venenatis integer vulputate sit purus fermentum. Diam fringilla felis scelerisque diam id. Enim lorem eleifend sit.' }
        ]
      },
      {
        header: 'PlayBack Interfe',
        cards: [
          { Img: '', text: '' },
          { Img: '', text: 'lorem eoprjaub U VDTI tqdU D5 tut56' }
        ]
      },
      {
        header: 'smart',
        cards: [
          { Img: '', text: '' },
          { Img: '', text: '' }
        ]
      },
      {
        header: 'Live View Interface',
        cards: [
          { Img: '', text: '' },
          { Img: '', text: '' }
        ]
      },
      {
        header: 'Live View Interface',
        cards: [
          { Img: '', text: '' },
          { Img: '', text: '' }
        ]
      }
    ]
  },
  {
    setup: [
      {
        header: 'Setup',
        cards: [
          { Img: '', text: '' },
          { Img: '', text: '' }
        ]
      },
      {
        header: 'PlayBack Interfe',
        cards: [
          { Img: '', text: '' },
          { Img: '', text: '' }
        ]
      },
      {
        header: '3455',
        cards: [
          { Img: '', text: '' },
          { Img: '', text: '' }
        ]
      },
      {
        header: 'Live View Interface',
        cards: [
          { Img: '', text: '' },
          { Img: '', text: '' }
        ]
      }
    ]
  },
  {
    smart: [
      {
        header: 'smart',
        cards: [
          { Img: '', text: '' },
          { Img: '', text: '' }
        ]
      },
      {
        header: 'PlayBack Interface',
        cards: [
          { Img: '', text: '' },
          { Img: '', text: '' }
        ]
      },
      {
        header: 'Live View Interface',
        cards: [
          { Img: '', text: '' },
          { Img: '', text: '' }
        ]
      },
      {
        header: 'Live View Interface',
        cards: [
          { Img: '', text: 'nlb' },
          { Img: '', text: 'bbbb' }
        ]
      }
    ]
  },
  {
    about: {
      header: 'about',
      text: `Lorem ipsum dolor sit amet consectetur. Pulvinar feugiat tellus porttitor lacinia vulputate scelerisque. Tortor neque mi morbi neque tortor pretium maecenas. Egestas massa amet etiam viverra sed venenatis pellentesque. Faucibus erat ornare turpis lacus aliquet sed aliquam dictum. Mi consequat neque odio mauris quis enim. Vel leo cras auctor elit pharetra sit amet viverra lobortis. Vel congue ut nunc consequat hendrerit scelerisque sit eget. Metus lorem faucibus congue enim vel. Eu ut eget venenatis faucibus. Urna consectetur neque urna neque tincidunt vehicula ut. Sed a vulputate ipsum felis malesuada tincidunt hendrerit facilisis. Non pellentesque amet malesuada eget maecenas.
       Amet amet venenatis integer vulputate sit purus fermentum. Diam fringilla felis scelerisque diam id. Enim lorem eleifend sit.`
    }
  }
];
let rc = document.getElementById('RC')

let main = document.getElementById('mn')
let counter = 0
let chosenHeaderNav = INTELData[0].basic;
let li = document.querySelectorAll('.navIcon');

for (let key of li) {
 
  key.addEventListener('click', function () {

    li.forEach(item => {
      item.classList.remove('active');
    });

    key.classList.add('active');


    chosenHeaderNav = key.innerText;
    chosingnav()
 


  });
}
let Lessthan1=0;
chosingnav()

function chosingnav() {

  if (chosenHeaderNav == 'Basics') {
    chosenHeaderNav = INTELData[0].basic

  } else if (chosenHeaderNav == 'Setup') {
    chosenHeaderNav = INTELData[1].setup
  } else if (chosenHeaderNav == 'smart') {
    chosenHeaderNav = INTELData[2].smart
  } else if (chosenHeaderNav == 'about') {
    chosenHeaderNav = INTELData[3].about
  } else {

  }

  let index = 0;

  let hparent = document.getElementById('smi')
  hparent.innerHTML = ''
  main.innerHTML = ''
  console.log(chosenHeaderNav)
  if (chosenHeaderNav[1]) {
    rc.parentElement.classList.remove('parent')
    rc.classList.remove('dNone')
  
     for (let head of chosenHeaderNav) {
      h5(head.header)
      if (head.cards) {
        for (let card of head.cards) {

          if (index % 3 == 0) {
            creatingFirstcard(card)

          } else if (index % 3 == 1) {
            creatingSecondcard(card)
          } else {
            thirdCard(card)

          }
          index++;

        }



      } 
      var h4 = document.createElement('h4');
      h4.innerText = head.header

      hparent.appendChild(h4)
      Rightfilter(h4);

    }
  } else {

    about(chosenHeaderNav.text)
    rc.classList.add('dNone')
    rc.parentElement.classList.add('parent')
  }
  
}   

function creatingFirstcard() {

  
  let firstCard = document.createElement('div');
  firstCard.classList.add('Fcard', 'cards');

  
  let leftSide = document.createElement('div');
  leftSide.classList.add('cardLeft');
  let imgLeft = document.createElement('img');
  imgLeft.src = 'photos/1.png';
  imgLeft.alt = '';
  leftSide.appendChild(imgLeft);

  // Create the right side of the card
  let rightSide = document.createElement('div');
  rightSide.classList.add('cardRight');
  let pRight = document.createElement('p');
  pRight.textContent = 'Lorem ipsum dolor sit amet consectetur. Pulvinar feugiat tellus porttitor lacinia vulputate scelerisque. Tortor neque mi morbi neque tortor pretium maecenas. Egestas massa amet etiam viverra sed venenatis pellentesque. Faucibus erat ornare turpis lacus aliquet sed aliquam dictum. Mi consequat neque odio mauris quis enim. Vel leo cras auctor elit pharetra sit amet viverra lobortis. Vel congue ut nunc consequat hendrerit scelerisque sit eget. Metus lorem faucibus congue enim vel. Eu ut eget venenatis faucibus. Urna consectetur neque urna neque tincidunt vehicula ut. Sed a vulputate ipsum felis malesuada tincidunt hendrerit facilisis. Non pellentesque amet malesuada eget maecenas. Amet amet venenatis integer vulputate sit purus fermentum. Diam fringilla felis scelerisque diam id. Enim lorem eleifend sit.';
  rightSide.appendChild(pRight);

  // Append left and right side to the first card
  firstCard.appendChild(leftSide);
  firstCard.appendChild(rightSide);
  main.appendChild(firstCard)


}

function creatingSecondcard(card) {
  let secondCard = document.createElement('div');
  secondCard.classList.add('Scard', 'cards');

  let rightSideSecondCard = document.createElement('div');
  rightSideSecondCard.classList.add('cardRight');
  let pRightSecondCard = document.createElement('p');

  pRightSecondCard.textContent = `${card.text}`;
  rightSideSecondCard.appendChild(pRightSecondCard);

  let rightSideSecondCardRight = document.createElement('div');
  rightSideSecondCardRight.classList.add('ScardR');
  let imgRight = document.createElement('img');
  imgRight.src = 'photos/1.png';
  imgRight.alt = '';
  rightSideSecondCardRight.appendChild(imgRight);

  secondCard.appendChild(rightSideSecondCard);
  secondCard.appendChild(rightSideSecondCardRight);
  main.appendChild(secondCard)
}
function thirdCard() {
  let thirdCard = document.createElement('div');
  thirdCard.classList.add('TCard', 'cards');

  let imgPlace = document.createElement('div');
  imgPlace.classList.add('imgPlace');
  let imgFrame = document.createElement('div');
  imgFrame.classList.add('ImgFrame');
  let imgThirdCard = document.createElement('img');
  imgThirdCard.src = 'photos/for3card.png';
  imgThirdCard.alt = '';
  imgFrame.appendChild(imgThirdCard);
  imgPlace.appendChild(imgFrame);

  // Create the text place for the third card
  let textPlace = document.createElement('div');
  textPlace.classList.add('TextPlace');
  let pThirdCard = document.createElement('p');
  pThirdCard.textContent = 'Lorem ipsum dolor sit amet consectetur. Amet dolor amet turpis bibendum morbi tempus amet pretium. Aliquet facilisis nunc dolor nulla eu nulla justo. Neque volutpat at cursus dui viverra. Et in at at duis senectus mi diam. Non vivamus tortor suspendisse erat. Sem lacinia dignissim molestie praesent iaculis turpis purus tortor eu. In nec ornare donec vel bibendum diam nec. Est non faucibus viverra tristique turpis. Egestas pharetra aliquam feugiat dignissim et aliquam aliquet morbi. Est vitae pellentesque tincidunt nunc elementum diam mattis id. Nulla quis vel et semper. Vestibulum id in lacus justo lectus dui molestie netus. Faucibus egestas vel tortor fermentum adipiscing mauris proin tincidunt eleifend. Elit phasellus ultrices metus elementum nunc diam mi pharetra praesent. Ultricies molestie tristique luctus at tincidunt sodales vestibulum. Quis feugiat feugiat sit facilisi tellus aliquam purus iaculis in. Eget nulla habitant vitae neque pellentesque sagittis aliquam molestie. At aliquet in praesent cursus facilisi ipsum integer risus id. Sociis proin aliquet amet diam ornare volutpat ornare eget dictum. Donec neque mi sem duis. At vivamus augue tristique dui. Faucibus arcu lectus ut proin arcu in condimentum.';
  textPlace.appendChild(pThirdCard);

  // Append image place and text place to the third card
  thirdCard.appendChild(imgPlace);
  thirdCard.appendChild(textPlace);
  main.appendChild(thirdCard);
}

function h5(head) {
  let h5 = document.createElement('h5')
  h5.innerHTML = `${head}`
  main.appendChild(h5)
}
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


