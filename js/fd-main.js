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

function mc01menuTgl() {

    var btnOpen = $('.mc01 .btn_menu');
    var mc01menu = $('.mc01 .mc01_menu');
    var bs = $('.body_shadow');
    var btnClose = mc01menu.find('.btn_popup_close');

    mc01menu.css({
        'opacity': 0,
        'transition' : 'transform 0.16s ease-out, opacity 0.16s ease-out'
    }).hide();

    btnOpen.click(function() {
        var isOpen = mc01menu.hasClass('open');
        if (!isOpen) {
            bs.addClass('visible');
            mc01menu.show();
            setTimeout(function(){
                mc01menu.addClass("open").css('opacity', 1);
                btnClose.focus();
            }, 160);
        } else {
            bs.removeClass('visible');
            mc01menu.removeClass("open").css('opacity', 0);
            setTimeout(function(){
                mc01menu.hide();
            }, 160);
            btnOpen.focus();
        }
        
        return false;
    });

    btnClose.click(function() {
        bs.removeClass('visible');
        mc01menu.removeClass("open").css('opacity', 0);
        setTimeout(function(){
            mc01menu.hide();
        }, 160);
        btnOpen.focus();
        return false;
    });
    
}

function mc05() {

    var mc05 = $('.mc05');
    var mc05lb = mc05.find('.mc05l_b');
    var mc05lbt = mc05lb.find('.mc05lb_t');
    var mc05lbt_li = mc05lbt.find('> div');

    mc05lbt_li.find('a').click(function(){
        var isOpen = mc05lb.hasClass('open');
        if (!isOpen) {
            mc05lb.addClass('open');
        } else {
            mc05lb.removeClass('open');
        }
        return false;
    });
}
function mc07() {

    var mc07 = $('.mc07');
    var mc07lb = mc07.find('.mc07l_b');
    var mc07lbt = mc07lb.find('.mc07lb_t');
    var mc07lbt_li = mc07lbt.find('> div');

    mc07lbt_li.find('a').click(function(){
        var isOpen = mc07lb.hasClass('open');
        if (!isOpen) {
            mc07lb.addClass('open');
        } else {
            mc07lb.removeClass('open');
        }
        return false;
    });
}

$(document).ready(function(){
  afterHasCheck('.qnb', qnbScrollEvent);
  fnSlide({dom: '.mc01_slide', loop: true, auto: true, effect: 'fade'});
  mc01menuTgl();
  fnSlide({dom: '.mc02_slide', loop: true, auto: false, breakPoint: ['t', 'm']});
  fnSlide({dom: '.mc03_slide', loop: true, auto: true});
  fnSlide({dom: '.mc05_slide', loop: true, auto: false, effect: 'fade'});
  mc05();
  fnSlide({dom: '.mc06_slide', loop: true, auto: false});
  fnSlide({dom: '.mc07_slide', loop: true, auto: false, effect: 'fade'});
  mc07();
  tabAccess('.mc08_b');
  fnSlide({dom: '.mc09_slide', loop: true, auto: true, effect: 'fade'});
  afterHasCheck('.mc09_slide', domRatio, true, (1/1));
});