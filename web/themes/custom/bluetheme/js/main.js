(function ($, Drupal) {

  $(document).ready(function () {

    // COMPONENT : ACCORDION

    if ($('[data-accordiontrigger]').length > 0) {
      $('[data-accordiontrigger]').on('click', function (e) {
        e.preventDefault();

        const PARENT = $(this).closest('[data-accordionparent]');
        const TRIGGERS = PARENT.find('[data-accordiontrigger]');
        const CONTENTS = PARENT.find('[data-accordioncontent]');

        if (!$(this).hasClass('active')) {
          TRIGGERS.removeClass('active');
          CONTENTS.slideUp();

          $(this).addClass('active');
          $(this).siblings('[data-accordioncontent]').slideDown();
        }
      })
    }


    // COMPONENT : SWIPER WITH PREVIEW
    console.log('1')
    if ($('[data-sliderblock]').length > 0) {
      $('.swiper-preview').each(function () {
        const SLIDER = $(this).closest('[data-sliderblock]');
        const LINKS_TO_SLIDES = SLIDER.find('[data-slideto]');

        const mySwiper = new Swiper($(this)[0], {
          slidesPerView: 1,
          loop: true,
          on: {
            slideChange: function () {
              LINKS_TO_SLIDES.removeClass('active');
              SLIDER.find(`[data-slideto="${(this.realIndex + 1)}"]`).addClass('active');
            },
          }
        });

        LINKS_TO_SLIDES.on('click', function (e) {
          const SLIDE_INDEX = $(this).data('slideto');
          mySwiper.slideTo(SLIDE_INDEX);
        })
      });
    }


    // COMPONENT : ANCHOR NAV

    if ($('.header__nav a[href^="#"]').length > 0) {
      $('.header__nav a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        const LINKS = $(this).closest('.header__nav').find('a');
        const ID = $(this).attr('href');

        LINKS.removeClass('active');
        $(this).addClass('active');

        $('html, body').animate({
          scrollTop: $(ID).offset().top
        }, ($(ID).offset().top / 1000) * 250);
      });
    }


    // COMPONENT : MOBILE NAV

    if ($('[data-nav]').length > 0) {
      $('[data-nav]').each(function () {
        const $TH = $(this);
        const HEADER = $TH.closest('header');
        const BTN_TOGGLE = HEADER.find('[data-navtoggle]');

        BTN_TOGGLE.on('click', function (e) {
          e.preventDefault();
          $TH.toggleClass('active');
        });
      });
    }


    // SECTION : SOLUTIONS | Swiper

    if ($('.swiper-solutions').length > 0) {
      $('.swiper-solutions').each(function () {
        const mySwiper = new Swiper($(this)[0], {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          spaceBetween: 35,
          slidesPerView: 1,
          loop: true,
          loopAdditionalSlides: 3
        });
      });
    }


    if ($(".hero-section__cnt:contains('360')").html(function (_, html) {
      return html.replace(/(360)/g, '<span class="color--blue">$1</span>')
    }));

    // $('.insulating-block__header').eq(2).each(function () {
    //   if $("#parent").prepend($("#child")); {
    //       $(this).insertBefore($(this).prev('.insulating-block-right__img'));
    //   }
  // });

  function myGeeks() {
    $('.insulating-block__header').eq(2).prepend($("#insulating-block-right__img"));
  }

  });

})(jQuery, Drupal);
