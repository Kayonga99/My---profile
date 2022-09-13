/*eslint-disable */
const cards = document.getElementById('cards');
const ourModal = document.querySelector('.openModal');

const openData = document.querySelector('.openModal');
// cards
const modalData = [
  {
    id: 0,
    heading1: 'NAC',
    heading2: '',
    description: `This is a website of the New apostolic church Conference That has
     diffrent sections about the church Conference built using html, javascript and css.`,
    featuredImage: 'img/pent.gif',
    languages: ['html', 'css', 'javascript'],
    linkLive: 'https://kayonga99.github.io/NAC-Pentecost/',
    linkSource: 'https://github.com/Kayonga99/NAC-Pentecost',
  },
  {
    id: 1,
    heading1: 'FOOD RECIPE',
    description: `This is a simple javascript website that allows users to like and comment on any
     kind of the food that they like. Built during the JavaScript group final Capstone`,
    featuredImage: 'img/food-logo.png',
    languages: ['html', 'Webpack', 'css', 'javascript'],
    linkLive: 'https://zippy-mochi-673645.netlify.app/',
    linkSource: 'https://github.com/Kayonga99/Javascript-Capstone',
  },
  {
    id: 2,
    heading1: 'BOOK STORE',
    description: `A single page bookstore app that allows the user to add and remove books with Author,
       Category and Title. Build with React and Redux.`,
    featuredImage: 'img/bookstore-placehoher.png',
    languages: ['React', 'Redux'],
    linkLive: 'https://helpful-macaron-fb3edd.netlify.app/',
    linkSource: 'https://github.com/Kayonga99/Bookstore',
  },
  {
    id: 3,
    heading1: 'LEADERBOARD',
    description: `The leaderboard website displays scores submitted by different players.
     It also allows you to submit your score.
      All data is preserved thanks to the external Leaderboard API service..`,
    featuredImage: 'img/soon3.png',
    languages: ['html', 'css', 'javascript'],
    linkLive: 'https://shiny-travesseiro-4d513a.netlify.app/',
    linkSource: 'https://github.com/Kayonga99/Leaderboard',
  },
  {
    id: 4,
    heading1: 'SPACE TRAVELLERS',
    description: `Space Travellers is a single page application that allows a user
     to book and cancel a Rocket and also see some space missions,
      The app was developed during during Microverse group Capstone .`,
    featuredImage: 'img/rocket.webp',
    languages: ['React', 'Redux'],
    linkLive: 'https://space-travelers-mehdirh-kayonga99.netlify.app/',
    linkSource: 'https://github.com/Kayonga99/Space--Travellers',
  },
  {
    id: 5,
    heading1: 'COVID-19 TRACKING',
    description: `COVID-19-data-tracking is a project built using React and redux
     in this project information on the COVID-19 virus is being fetched from an API.
     This Application shows data on COVID-19 in European countries, 
    the information is on COVID-19 cases, deaths, people tested etc.`,
    featuredImage: 'img/covid1.jfif',
    languages: ['html', 'css', 'javascript'],
    linkLive: 'https://relaxed-kheer-37635b.netlify.app/',
    linkSource: 'https://github.com/Kayonga99/COVID-19-data-tracking',
  },
  {
    id: 6,
    heading1: 'COMING SOON',
    description: 'Hi I\'m still working on this project at the moment, it  will appear here as soon as its done.',
    featuredImage: 'img/soon2.webp',
    languages: ['soon', 'soon', 'soon'],
    linkLive: '',
    linkSource: '',
  },
  {
    id: 7,
    heading1: 'COMING SOON',
    description: 'Hi I\'m still working on this project at the moment, it  will appear here as soon as its done.',
    featuredImage: 'img/soon.jpg',
    languages: ['soon', 'soon', 'soon'],
    linkLive: '',
    linkSource: '',
  },
];

// Modal data
modalData.forEach((card) => {
  const temp = document.createElement('template');
  temp.innerHTML = `
  <div class="element-item grid" >
  <div class="effect-zoe">
      <img class="img-responsive" alt="Portfolio" src="${card.featuredImage}">
      <figcaption>
          <h2 class="hidden-xs"><span>${card.heading1}</span></h2>
          <p class="icon-links">
              <i class="fa fa-eye open-modal" id=${card.id}></i>
              <a href="${card.linkLive}"><i class="fa fa-dribbble"></i></a>
              <!-- <a href="#"><i class="fa fa-pinterest"></i></a> -->
          </p>
      </figcaption>
  </div>
</div>`;
  cards.appendChild(temp.content);
  const openModal = document.querySelectorAll('.fa-eye');

  openModal.forEach((card) => {
    card.addEventListener('click', (e) => {
      showPop(e.target.id);
    });
  });
});

const projectModal = (card, index) => {
  const projectModal = `
<div class="modal-container" >
  <span class="close-x">&times;</span>
  <ul class="project-name">
            <li class="project-tile">${card.heading1}</li>
        </ul>
  <img class="modal-image" src="${card.featuredImage}" alt="">
  <div class="row-flow">
  <p class="pro-drescription">${card.description}</p>
        <div class="t-n-btn">
        <ul class="tech-list1">
         ${card.languages.map((lang) => ` <li class="t-list ${index}">${lang}</li>`).join('')} 
        </ul>
        <div class="btn-cont">
        <a href="${card.linkLive} "> <button type="button" class="p-btn2">See Live <img src="./img//icons/btn-icon.png" alt="btton icon"> </button></a>
        <a href="${card.linkSource} "> <button type="button" class="p-btn22">See source <img src="./img/icons/blue-github.png" alt="github icon"> </button></a>
          </div>
          </div>
  </div>
</div>`;

  openData.innerHTML = projectModal;
  const closeModal = document.querySelector('.close-x');
  closeModal.addEventListener('click', () => {
    ourModal.style.display = 'none';
  });
};

function showPop(id) {
  modalData.find((card) => {
    if (Number(id) === Number(card.id)) {
      projectModal(card);
      ourModal.style.display = 'block';
    }
  });
}
