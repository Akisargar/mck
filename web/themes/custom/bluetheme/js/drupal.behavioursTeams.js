(function($, Drupal){



  Drupal.behaviors.Teams = {
    attach: function (context, settings) {
      $('[data-accordioncontent]').hide();

      let  firstContainer = $('.team-accordion .views-element-container').first();
      firstContainer.find('.title').addClass('active');
      firstContainer.find('[data-accordioncontent]').show();

      $('[data-accordiontrigger]').once('triggerAccordion').click(function(e) {
        e.preventDefault();
        console.log('hello')
        const PARENT = $(this).closest('[data-accordionparent]');
        const TRIGGERS = PARENT.find('[data-accordiontrigger]');
        const CONTENTS = PARENT.find('[data-accordioncontent]');
        if(!$(this).hasClass('active')){
          TRIGGERS.removeClass('active');
          CONTENTS.slideUp();
          $(this).addClass('active');
          $(this).siblings('[data-accordioncontent]').slideDown();
        }
      })
    }
  };
})(jQuery, Drupal);

