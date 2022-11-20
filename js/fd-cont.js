var gsPaddingCount = 0;
var gsTabCount = 0;

function gs() {

  if ($('.gs').length > 0) {

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
  
}

var slInCount = 0;

/* statistic layout toggle */
function statisticLayoutTgl() {

  var sl = $('.sl');
  var slList = sl.find('.sl_list');
  var slListLi = slList.find('li');
  var status = sCheck();
  
  slListLi.each(function(){
    var th = $(this);
    var thLink = th.find('> a');
    var thChild = th.find('> div');
    (thChild.length > 0) && (
      th.addClass('ltn_p'),
      thLink.addClass('ltn_l'),
      thChild.addClass('ltn_c')
    )
  });

  if (status === 't' || status === 'm') {
    if (slInCount === 0) {
      sl.removeClass('open');
      slInCount = 1;
    }
  } else {
    if (slInCount === 1) {
      sl.addClass('open');
      slInCount = 0;
    }
  }
  var btnTgl = sl.find('.btn_sltgl');

  btnTgl.click(function(){
    var isOpen = sl.hasClass('open');
    if (!isOpen) {
      sl.addClass('open');
    } else {
      sl.removeClass('open');
    }
    return false;
  });

  $(window).resize(function(){
    var status = sCheck();
    if (status === 't' || status === 'm') {
      if (slInCount === 0) {
        sl.removeClass('open');
        slInCount = 1;
      }
    } else {
      if (slInCount === 1) {
        sl.addClass('open');
        slInCount = 0;
      }
    }
  });

}

function complaintSlide() {

  var ct = $('.complaint_top');
  var ctct = ct.find('.ctc_t');
  var ctcb = ct.find('.ctc_b');
  var btnPause = ct.find('.btn_pause');
  var btnPlay = ct.find('.btn_play');

  if (ctct.length > 0 || ctcb.length > 0) {

    btnPause.show();
    btnPlay.hide();

    var ctctUlW = ctct.find('ul').outerWidth();
    for (var i = 0; i < (3840 / ctctUlW); i++) {
      ctct.append(ctct.find('> ul').clone()[0]);
    }
    
    var ctcbUlW = ctct.find('ul').outerWidth();
    for (var j = 0; j < (3840 / ctcbUlW); j++) {
      ctcb.append(ctcb.find('> ul').clone()[0]);
    }

    ctct.marquee({
      speed: 80,
      gap: 0,
      delayBeforeStart: 0,
      direction: 'left',
      duplicated: true,
      pauseOnHover: true
    });
    ctct.find('> div').css('transform', 'translateX(0)');

    ctcb.marquee({
      speed: 80,
      gap: 0,
      delayBeforeStart: 0,
      direction: 'right',
      duplicated: true,
      pauseOnHover: true
    });
    // 오른쪽 진행방향 marquee speed 변경하시면 마지막 요소 끝날때 쯤 라이브러리에서 animation 타임을 재설정하는데, 
    // 해당 style에 박혀있는 그 시간을 직접 넣어줘야 합니다.
    var animationTime = 49.5688;
    ctcb.find('> div').css({
      'transform': 'translateX(-4305.52px)',
      'animation': animationTime + 's linear 0s 1 normal none running marqueeAnimation-c'
    });

    btnPause.click(function(e){
      e.preventDefault();
      ctct.trigger('pause');
      ctcb.trigger('pause');
      $(this).hide();
      btnPlay.show();
    });

    btnPlay.click(function(e){
      e.preventDefault();
      ctct.trigger('resume');
      ctcb.trigger('resume');
      $(this).hide();
      btnPause.show();
    });

    ctct.on('mouseleave', function(){
      btnPause.show();
      btnPlay.hide();
    });

    ctcb.on('mouseleave', function(){
      btnPause.show();
      btnPlay.hide();
    });

  }
}

$(document).ready(function(){
  gs();
  tabCommon('.gs_tab_keyword');
  statisticLayoutTgl();
  afterHasCheck('.duc_view .dv_function .dvf_list > ul > li > div', domRatio, true, (1/1));
  complaintSlide();
});