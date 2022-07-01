(function($, Drupal){
  // console.log('herll')
 init = true;
  Drupal.behaviors.valueChain = {
    attach: function (context, settings) {
      if(init && $('.overview').length) {
        $('.hero-section + .header-section, .overview').wrapAll('<div class="overview-section" id="overview"></div>');
       init = false;
      }
    }
  };

  let initSlider = true;
  Drupal.behaviors.articleslider = {
    attach: function (context, settings) {
      if(initSlider && $('.articles-list-block').length) {
        $('.articles-list-block .item').each(function(index) {
          $(this).attr('data-slideto', index+1)
          // if (index == 0) {
          //   $(this).addClass('active');
          // }
        });
        initSlider = false;
      }
    }
  };


  let init1Slider = true;
  Drupal.behaviors.resourceslider = {
    attach: function (context, settings) {
      if(init1Slider && $('.resources__preview__list').length) {
        $('.resources__preview__list .preview__item').each(function(index) {
          $(this).attr('data-slideto', index+1)
          if (index == 0) {
            $(this).addClass('active');
          }
        });
        init1Slider = false;
      }
    }
  };

  // let initSlider = true;
  // Drupal.behaviors.articleslider = {
  //   attach: function (context, settings) {
  //     if(initSlider && $('.articles__right').length) {
  //       $('.articles__right .swiper-slide').each(function(index) {
  //         $(this).attr('data-swiper-slide-index', index + 1)
  //         if (index == 0) {
  //           $(this).addClass('swiper-slide-active');
  //         }
  //         $(this).addClass('swiper-slide-next');
  //       });
  //       initSlider = false;
  //     }
  //   }
  // };

})(jQuery, Drupal);

console.log('iiooo')