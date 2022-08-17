//

(function ($, sr) {
  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  const debounce = function (func, threshold, execAsap) {
    let timeout;
    return function debounced() {
      const obj = this; const
        args = arguments;
      function delayed() {
        if (!execAsap) func.apply(obj, args);
        timeout = null;
      }

      if (timeout) clearTimeout(timeout); else if (execAsap) func.apply(obj, args);
      timeout = setTimeout(delayed, threshold || 100);
    };
  };
  // smartresize
  jQuery.fn[sr] = function (fn) {
    return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
  };
}(jQuery, 'smartresize'));

$(() => {
  // Fix the Home Height

  const setHomeBannerHeight = function () {
	   const homeHeight = $(window).height();
	   $('#overlay-1').height(homeHeight);
  };
  setHomeBannerHeight();

  // Arrow drop effect

  const $scrollDownArrow = $('.bottom > a');

  // Smooth Scrolling and remove Hash tag from link

  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top,
        }, 1000, () => {

        });
        return false;
      }
    }
  });

  /// ////////////////////////////
  // Center Home Slideshow Text
  /// ////////////////////////////
  function centerHomeBannerText() {
    const bannerText = jQuery('#header .middle');
    const bannerTextTop = (jQuery('#header').actual('height') / 2) - (jQuery('#header .middle').actual('height') / 2) - 20;
    bannerText.css('padding-top', `${bannerTextTop}px`);
    bannerText.show();
  }
  centerHomeBannerText();

  jQuery(window).smartresize(() => {
    setHomeBannerHeight();
    centerHomeBannerText();
  });
});

$(() => {
  // init Isotope
  const $container = $('.isotope').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight(itemElem) {
        const weight = $(itemElem).find('.weight').text();
        return parseFloat(weight.replace(/[\(\)]/g, ''));
      },
    },
  });

  // filter functions
  const filterFns = {
    // show if number is greater than 50
    numberGreaterThan50() {
      const number = $(this).find('.number').text();
      return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium() {
      const name = $(this).find('.name').text();
      return name.match(/ium$/);
    },
  };

  // bind filter button click
  $('#filters').on('click', 'button', function () {
    let filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $container.isotope({ filter: filterValue });
  });

  // bind sort button click
  $('#sorts').on('click', 'button', function () {
    const sortByValue = $(this).attr('data-sort-by');
    $container.isotope({ sortBy: sortByValue });
  });

  // change is-checked class on buttons
  $('.button-group').each((i, buttonGroup) => {
    const $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });
});

function countUpTo(count, selector, max) {
  console.log(`count--> ${count}`);
  const div_by = count;
  const speed = Math.round(count / div_by);
  const $display = selector;
  let run_count = 1;
  const int_speed = 24;

  var int = setInterval(() => {
    if (run_count < div_by) {
      $display.text(speed * run_count);
      run_count++;
    } else if (parseInt($display.text()) < count) {
      const curr_count = parseInt($display.text()) + 1;
      let text = '';
      if (max > 99) {
        if (curr_count < 10) {
          text = `${text}00${curr_count}`;
        }
        /* else if(curr_count < 100 && curr_count >9){
                        text = text+"0"+curr_count;
                    } */
        else {
          text = curr_count;
        }
      } else if (max < 100 && max > 9) {
        if (curr_count < 10) {
          text = `${text}00${curr_count}`;
        }
        /* else if(curr_count < 100 && curr_count >9){
                        text = text+"0"+curr_count;
                    } */
        else {
          text = curr_count;
        }
      } else if (curr_count < 10) {
        text = `${text}00${curr_count}`;
      }
      /* else if(curr_count < 100 && curr_count >9){
                        text = text+"0"+curr_count;
                    } */
      else {
        text = curr_count;
      }

      $display.text(text);
    } else {
      clearInterval(int);
    }
  }, int_speed);
}

let firstTime = true;
$(document).scroll((event) => {
  const result = $('.count-timer').isOnScreen();

  if (result == true) {
    console.log('on screen');

    if (firstTime) {
      firstTime = false;

      const count1 = $('.count1');
      const count2 = $('.count2');
      const count3 = $('.count3');
      const count4 = $('.count4');
      const count5 = $('.count5');
      const count6 = $('.count6');
      count1Num = count1.text(),
      count2Num = count2.text(),
      count3Num = count3.text(),
      count4Num = count4.text(),
      count5Num = count5.text(),
      count6Num = count6.text();

      let max = Math.max(parseInt(count1Num), parseInt(count2Num));
      max = Math.max(max, parseInt(count6Num));
      console.log(max);

      countUpTo(count1Num, count1, max);
      countUpTo(count2Num, count2, max);
      countUpTo(count3Num, count3, max);
      countUpTo(count4Num, count4, max);
      countUpTo(count5Num, count5, max);
      countUpTo(count6Num, count6, max);
    }
  }
});

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



// form validation

function validateEmail(email, event, errorMsg) {
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    const msg = document.getElementById('form-div');
    msg.style.display = 'block';
    msg.innerText = errorMsg;
    msg.style.fontSize = '15px';
  }
}
const form = document.getElementById('form');
const email = document.getElementById('email')

email.addEventListener('click',() => {
  const msg = document.getElementById('form-div');
  msg.style.display = 'none';
})
form.addEventListener('submit', (event) => {
  const errorMessage = 'Please enter an email address without any upper-case letters.';
  validateEmail(form.elements.email.value, event, errorMessage);
});





// local-storage
const inputFields = document.forms['contact-form']
const mail = inputFields.email;
const messageInput = inputFields.comment;
const nameInput = inputFields.fullName;
const formElts = inputFields.querySelectorAll('input, textarea');


const saveToLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

const formData = getFromLocalStorage('formData');
if (formData !== null) {
  nameInput.value = formData.name;
  mail.value = formData.email;
  messageInput.value = formData.message;
  
}
formElts.forEach((fe) => {
  fe.addEventListener('input', () => {
    const objectForLocalStorage = {
      name: nameInput.value,
      email: mail.value,
      message: messageInput.value,
    };
    saveToLocalStorage('formData', objectForLocalStorage);
  });
}); 
