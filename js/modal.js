// const modalData = [
//    {   id: 1,
//     heading1: 'NAC',
//     heading2: ['CANOPY', 'Back End Dev', '2022'],
//     description: 'New apostolic church pentocst devine service 2022 Capstone project.',
//     featuredImage: './photos/newp/first-bg.jpg',
//     languages: ['html', 'css', 'javascript'],
//     linkLive: 'https://kayonga99.github.io/Capstone',
//     linkSource: 'https://github.com/Kayonga99/Capstone',
//   },
//   {   id: 1,
//     heading1: 'NAC',
//     heading2: ['CANOPY', 'Back End Dev', '2022'],
//     description: 'New apostolic church pentocst devine service 2022 Capstone project.',
//     featuredImage: './photos/newp/first-bg.jpg',
//     languages: ['html', 'css', 'javascript'],
//     linkLive: 'https://kayonga99.github.io/Capstone',
//     linkSource: 'https://github.com/Kayonga99/Capstone',
//   },
//   {   id: 1,
//     heading1: 'NAC',
//     heading2: ['CANOPY', 'Back End Dev', '2022'],
//     description: 'New apostolic church pentocst devine service 2022 Capstone project.',
//     featuredImage: './photos/newp/first-bg.jpg',
//     languages: ['html', 'css', 'javascript'],
//     linkLive: 'https://kayonga99.github.io/Capstone',
//     linkSource: 'https://github.com/Kayonga99/Capstone',
//   },
//   {   id: 1,
//     heading1: 'NAC',
//     heading2: ['CANOPY', 'Back End Dev', '2022'],
//     description: 'New apostolic church pentocst devine service 2022 Capstone project.',
//     featuredImage: './photos/newp/first-bg.jpg',
//     languages: ['html', 'css', 'javascript'],
//     linkLive: 'https://kayonga99.github.io/Capstone',
//     linkSource: 'https://github.com/Kayonga99/Capstone',
//   },
//   {   id: 1,
//     heading1: 'NAC',
//     heading2: ['CANOPY', 'Back End Dev', '2022'],
//     description: 'New apostolic church pentocst devine service 2022 Capstone project.',
//     featuredImage: './photos/newp/first-bg.jpg',
//     languages: ['html', 'css', 'javascript'],
//     linkLive: 'https://kayonga99.github.io/Capstone',
//     linkSource: 'https://github.com/Kayonga99/Capstone',
//   },
//   {   id: 1,
//     heading1: 'NAC',
//     heading2: ['CANOPY', 'Back End Dev', '2022'],
//     description: 'New apostolic church pentocst devine service 2022 Capstone project.',
//     featuredImage: './photos/newp/first-bg.jpg',
//     languages: ['html', 'css', 'javascript'],
//     linkLive: 'https://kayonga99.github.io/Capstone',
//     linkSource: 'https://github.com/Kayonga99/Capstone',
//   },
//   {   id: 1,
//     heading1: 'NAC',
//     heading2: ['CANOPY', 'Back End Dev', '2022'],
//     description: 'New apostolic church pentocst devine service 2022 Capstone project.',
//     featuredImage: './photos/newp/first-bg.jpg',
//     languages: ['html', 'css', 'javascript'],
//     linkLive: 'https://kayonga99.github.io/Capstone',
//     linkSource: 'https://github.com/Kayonga99/Capstone',
//   },
//   {   id: 1,
//     heading1: 'NAC',
//     heading2: ['CANOPY', 'Back End Dev', '2022'],
//     description: 'New apostolic church pentocst devine service 2022 Capstone project.',
//     featuredImage: './photos/newp/first-bg.jpg',
//     languages: ['html', 'css', 'javascript'],
//     linkLive: 'https://kayonga99.github.io/Capstone',
//     linkSource: 'https://github.com/Kayonga99/Capstone',
//   },
// ];

// function popData(card) {
//   const temp = document.createElement('template');
//   temp.innerHTML += `<section class="card-list-23">
//   <div class="desk-top">
//     <div class="">
//       <div class="x-class">
//         <h3 class="tonic-class-23">${card.heading1}</h3>
//         <h4 class="close-x">&times;</h4>
//       </div>
//         <div class="canopy">
//           <ul class="cards-ul">
//           ${card.heading2.map((heading, index) => `<li class="info${index}">${heading}</li>`).join('')}
//           </ul>
//         </div>
//         <img class="card" src="${card.featuredImage}" alt="work1Snapshot" />
//         <img class="nature-animated" src="${card.featuredImage2}" alt="nature animated picture" />
//         <div class="src-div">
//       <p class="src-description">
//         ${card.description2}
//       </p>
//       <div class="div-src">
//       <ul class="tools-src src-tools">
//         <li class="tools-li-src"> html</li>
//         <li class="tools-li-src">css</li>
//         <li class="tools-li">javaScript</li>
//         <li class="extra">github</li>
//         <li class="extra">ruby</li>
//         <li class="extra">Bootstraps  </li>
//       </ul>
//       <div class="view-project">
//         <a class="src-btn" href="${card.linkLive} ">See live <img src="./photos/icons/btn-icon.png" alt="button-icon"> </a>
//         <a class="src-btn" href="${card.linkSource}">See Source <img src="./photos/icons/blue-github.png" alt="github-icon"> </a>
//       </div>
//     </div>
//     </div>
// </section>
// `;
//   const box = document.getElementById('pop-up-modal');
//   box.appendChild(temp.content);
// }

// const popUp = document.querySelectorAll(".fa-eye")

// popUp.addEventListener("click", () => { 
  
// })





const openEls = document.querySelectorAll(".fa-eye");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});


const openModal = document.querySelectorAll(".fa-eye")

const ourModal = document.querySelector(".openModal")

openModal.forEach((e) => {
  e.addEventListener("click", () =>{
    ourModal.style.display = "block";
  })
})
