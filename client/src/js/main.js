const swiper1 = new Swiper(".swiper-container-1", {
  navigation: {
    nextEl: ".swiper-button-next-1",
    prevEl: ".swiper-button-prev-1",
  },
  autoplay: {                         
          delay: 5000,  
      },  
  mousewheel: true,
  keyboard: true,
});

const carouselButton = document.querySelector('.carousel-button button');
if (carouselButton) {
carouselButton.addEventListener('mousedown', function(event) {
  event.stopPropagation();
});
}

var thumbsSwiper = new Swiper(".mySwiper", {  
spaceBetween: 10,
slidesPerView: 8,
freeMode: true,
watchSlidesVisibility: true,
watchSlidesProgress: true,
});

var mainSwiper = new Swiper(".mySwiper2", {
spaceBetween: 10,
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
thumbs: {
  swiper: thumbsSwiper,
},
});

let coll = document.getElementsByClassName('goods__details-top');
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    let content = this.nextElementSibling;
    content.style.display = (content.style.display === 'block') ? 'none' : 'block';
  });
}

const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Скрыть все карточки
      tabContents.forEach(content => {
        content.querySelectorAll('.products__card').forEach(card => {
          card.style.display = 'none';
        });
      });

      // Показать только карточки с нужным data-tab
      const tabName = button.dataset.tab;
      document.querySelectorAll(`[data-tab="${tabName}"]`).forEach(card => {
        card.style.display = 'block';
      });

      // Пометить выбранный таб
      tabButtons.forEach(button => {
        button.classList.remove('active');
      });
      button.classList.add('active');
    });
  });

  // Показать карточки в первом табе при загрузке страницы
  const tabButton = document.querySelector('.tab-button');
if (tabButton) {
  tabButton.click();
}

  $('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(400);
  });

  $('.close-popup').click(function() {
    $('.popup-bg').fadeOut(400);
  });