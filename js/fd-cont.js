var gsPaddingCount = 0;
var gsTabCount = 0;

function gs() {

  // list padding
  var status = sCheck();
  var gstab = $('.gs .gs_tab');
  var gstabL = gstab.find('.sw_l');
  var gstabLi = gstab.find('.sw_l > a');
  var gstabLiLeng = gstabLi.length;
  var num = 0;
  var gsTabScroll = undefined;

  if ((status === 'l' || status === 'p') && gsPaddingCount === 0) {
    gstabLi.each(function(){
      num += $(this).outerWidth();
    });

    var lp = Math.floor((1400 - num) / (gstabLiLeng * 2));
    var pp = Math.floor((1200 - num) / (gstabLiLeng * 2));

    gstab.attr({
      'data-lp' : lp,
      'data-pp' : pp
    });

    gsPaddingCount = 1;
  }

  if (status === 'l') {
    gstabLi.css({
      'padding-left': gstab.attr('data-lp') + 'px',
      'padding-right': gstab.attr('data-lp') + 'px'
    });
  } else if (status === 'p') {
    gstabLi.css({
      'padding-left': gstab.attr('data-pp') + 'px',
      'padding-right': gstab.attr('data-pp') + 'px'
    });
  } else {
    gstabLi.removeAttr('style');
  }

  // tab scroll
  if ((status === 't' || status === 'm') && gsTabScroll === undefined) {
    gsTabScroll = new Swiper('.gs .gs_tab > div', {
      wrapperClass: "s_w",
      slideClass: "sw_l",
      slidesPerView: "auto",
      nested: true,
      freeMode: true
    });
    gsTabScroll.slideTo(gstab.find('.sw_l.on').index());
  } else if ((status === 'l' || status === 'p') && gsTabScroll !== undefined) {
    gsTabScroll.destroy(true, true);
    gsTabScroll = undefined;
  }

  // development
  gstabLi.click(function(e){

    e.preventDefault();
    
    var status = sCheck();
    var thP = $(this).parent();
    var thIndex = thP.index();

    thP.siblings().removeClass('on');
    thP.addClass('on');
    
    if (status === 't' || status === 'm') {
      gsTabScroll.slideTo(thIndex);
    }

    return false;

  });

  $(window).resize(function(){

    var status = sCheck();

    if ((status === 'l' || status === 'p') && gsPaddingCount === 0) {
      gstabLi.each(function(){
        num += $(this).outerWidth();
      });
  
      var lp = Math.floor((1400 - num) / (gstabLiLeng * 2));
      var pp = Math.floor((1200 - num) / (gstabLiLeng * 2));
  
      gstab.attr({
        'data-lp' : lp,
        'data-pp' : pp
      });
  
      gsPaddingCount = 1;
    }
  
    if (status === 'l') {
      gstabLi.css({
        'padding-left': gstab.attr('data-lp') + 'px',
        'padding-right': gstab.attr('data-lp') + 'px'
      });
    } else if (status === 'p') {
      gstabLi.css({
        'padding-left': gstab.attr('data-pp') + 'px',
        'padding-right': gstab.attr('data-pp') + 'px'
      });
    } else {
      gstabLi.removeAttr('style');
    }

    if ((status === 't' || status === 'm')) {
      if (gsTabScroll === undefined) {
        gsTabScroll = new Swiper('.gs .gs_tab > div', {
          wrapperClass: "s_w",
          slideClass: "sw_l",
          slidesPerView: "auto",
          nested: true,
          freeMode: true
        });
      }
      gsTabScroll.slideTo(gstab.find('.sw_l.on').index());
    } else if ((status === 'l' || status === 'p') && gsTabScroll !== undefined) {
      gsTabScroll.destroy(true, true);
      gsTabScroll = undefined;
    }

  });
  
}

$(document).ready(function(){
  gs();
  tabCommon('.gs_tab_keyword');
});