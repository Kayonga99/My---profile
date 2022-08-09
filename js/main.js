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

const popUp = document.querySelectorAll(".fa-eye")

