/* qnb scroll event */
function qnbScrollEvent() {

  var $q = $(this),
      $b = $('.qnb_base'),
      $f = $('.footer'),
      $w = $(window),
      qH = $q.outerHeight() || 0,
      bT = $b.offset().top || 0,
      fT = $f.offset().top || 0,
      fH = $f.outerHeight() || 0,
      wH = $w.scrollTop() || 0,
      num_t = bT,
      num_c = fT - qH,
      num_b = fH;

  if (wH >= 0 && wH < num_t) {
      $q.css({
          'position': 'absolute',
          'top': num_t,
          'bottom': 'initial'
      });
  } else if (wH >= num_t && wH < num_c) {
      $q.css({
          'position': 'fixed',
          'top': 0,
          'bottom': 'initial'
      });
  } else if (wH >= num_c) {
      $q.css({
          'position': 'absolute',
          'top': 'initial',
          'bottom': num_b
      });
  }

  $w.on('resize', function(){

      qH = $q.outerHeight() || 0;
      bT = $b.offset().top || 0;
      bH = $b.outerHeight() || 0;
      fT = $f.offset().top || 0;
      fH = $f.outerHeight() || 0;
      wH = $w.scrollTop() || 0;
      num_t = bT;
      num_c = fT - qH;
      num_b = fH;

      if (wH >= 0 && wH < num_t) {
          $q.css({
              'position': 'absolute',
              'top': num_t,
              'bottom': 'initial'
          });
      } else if (wH >= num_t && wH < num_c) {
          $q.css({
              'position': 'fixed',
              'top': 0,
              'bottom': 'initial'
          });
      } else if (wH >= num_c) {
          $q.css({
              'position': 'absolute',
              'top': 'initial',
              'bottom': num_b
          });
      }
  });

  $w.on('scroll', function(){

      wH = $w.scrollTop() || 0;

      if (wH >= 0 && wH < num_t) {
          $q.css({
              'position': 'absolute',
              'top': num_t,
              'bottom': 'initial'
          });
      } else if (wH >= num_t && wH < num_c) {
          $q.css({
              'position': 'fixed',
              'top': 0,
              'bottom': 'initial'
          });
      } else if (wH >= num_c) {
          $q.css({
              'position': 'absolute',
              'top': 'initial',
              'bottom': num_b
          });
      }

  });
}

$(document).ready(function(){
  afterHasCheck('.qnb', qnbScrollEvent);
  fnSlide({dom: '.mc01_slide', loop: true, auto: true, effect: 'fade'});
  fnSlide({dom: '.mc02_slide', loop: true, auto: false, breakPoint: ['t', 'm']});
  fnSlide({dom: '.mc03_slide', loop: true, auto: true});
  fnSlide({dom: '.mc05_slide', loop: true, auto: false, effect: 'fade'});
  fnSlide({dom: '.mc06_slide', loop: true, auto: false});
  tabCommon('.mc07_b');
  fnSlide({dom: '.mc09_slide', loop: true, auto: true, effect: 'fade'});
});