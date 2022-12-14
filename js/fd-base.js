/* Responsive Status Check */
function sCheck(){
	
	var	wc	=	$('.s_check'),
		wcL	=	wc.find('.sc_l').css('display'),
		wcP	=	wc.find('.sc_p').css('display'),
		wcT	=	wc.find('.sc_t').css('display'),
		wcM	=	wc.find('.sc_m').css('display');
	
	
	return "block" === wcL ? "l" : "block" === wcP ? "p" : "block" === wcT ? "t" : "block" === wcM ? "m" : void 0

}

/* Slide */
function fnSlide({ dom, loop, auto, center, direct, effect, breakPoint }) {

    var $dom = $(dom),
        $domP = $dom.parents('.s_o'),
        status = sCheck();

    var sSlide;

    if ($dom.length > 0) {

        /* s: set */
        var strSW = 's_w',
            strSL = 'sw_l'
            sL = $domP.find('.' + strSL),
            sLleng = sL.length,
            sC = $domP.find('.s_c'),
            btnPrev = $domP.find('.btn_prev'),
            btnNext = $domP.find('.btn_next'),
            btnPause = $domP.find('.btn_pause'),
            btnPlay = $domP.find('.btn_play'),
            isBtn = (btnPrev.length > 0) || (btnNext.length > 0),
            sP = $domP.find('.s_p'),
            sPleng = sP.length,
            sG = $domP.find('.s_g');

        sLleng === 0 && (sC.hide(),sP.hide(),btnPrev.hide(),btnNext.hide(),btnPause.hide(),btnPlay.hide());
        !auto && (btnPlay.hide(), btnPause.hide());

        sSlide = new Swiper(dom, {
            wrapperClass: strSW,
            slideClass: strSL,
            loop: loop,
            autoplay: auto,
            centeredSlides: !center ? false : true,
            direction: !direct ? 'horizontal' : direct,
            effect: !effect ? 'slide' : effect,
            slidesPerView: "auto",
            slidesPerGroup: 1,
            nested: true,
            pagination: sPleng > 0 && {
                el: sP[0],
                clickable: true,
                renderBullet: function(i, c) {
                    return '<span class="' + c + '">' + (i + 1) + "</span>";
                }
            },
            navigation: isBtn && {
                prevEl: btnPrev[0],
                nextEl: btnNext[0]
            },
            on: {
                init: function(a) {
                    var $wrap = $(a.el).parents('.s_o');
                    var isCount = $wrap.find('.s_c').length > 0;
                    var listleng = $wrap.find('.sw_l:not(".swiper-slide-duplicate")').length;
                    isCount && ($wrap.find('.s_c strong').text(1), $wrap.find('.s_c span').text(listleng));
                    $wrap.find('.swiper-slide-duplicate a').attr('tabindex', '-1');

                    // mc01
                    $wrap.hasClass('mc01') && isCount && ($wrap.find('.s_c strong').text(String(1).padStart(2, 0)), $wrap.find('.s_c span').text(String(listleng).padStart(2, 0)));

                    // mc05
                    if ($wrap.hasClass('mc05')) {
                        var mc05lb = $wrap.find('.mc05l_b');
                        var mc05lbt = mc05lb.find('.mc05lb_t');
                        var mc05lbt_li = mc05lbt.find('> div');
                        var mc05lbb = mc05lb.find('.mc05lb_b');
                        var mc05lbb_li = mc05lbb.find('li');

                        mc05lbt_li.removeClass('on');
                        mc05lbt_li.eq(0).addClass('on');
                        mc05lbb_li.removeClass('on');
                        mc05lbb_li.eq(0).addClass('on');
                    }

                    // mc07
                    if ($wrap.hasClass('mc07')) {
                        var mc07lb = $wrap.find('.mc07l_b');
                        var mc07lbt = mc07lb.find('.mc07lb_t');
                        var mc07lbt_li = mc07lbt.find('> div');
                        var mc07lbb = mc07lb.find('.mc07lb_b');
                        var mc07lbb_li = mc07lbb.find('li');

                        mc07lbt_li.removeClass('on');
                        mc07lbt_li.eq(0).addClass('on');
                        mc07lbb_li.removeClass('on');
                        mc07lbb_li.eq(0).addClass('on');
                    }
                },
                transitionStart: function(a) {
                    var $wrap = $(a.el).parents('.s_o');
                    var isGauge = $wrap.find('.s_g').length > 0;
                    if (isGauge) {
                        $wrap.find('.s_g i').removeAttr('style');
                        setTimeout(function(){
                            $wrap.find('.s_g i').css({
                                'width': '100%',
                                'transition': 'width 2.99s linear'
                            });
                        }, 10);
                    }
                },
                transitionEnd: function(a) {
                    var $wrap = $(a.el).parents('.s_o');
                    var isCount = $wrap.find('.s_c').length > 0;
                    var listleng = $wrap.find('.sw_l:not(".swiper-slide-duplicate")').length;
                    isCount && ($wrap.find('.s_c strong').text(a.realIndex + 1), $wrap.find('.s_c span').text(listleng));
                    if (auto) {
                        if ($wrap.find('.btn_pause').css('display') !== 'none') {
                            a.autoplay.start();
                        } else {
                            a.autoplay.stop();
                        }
                    }

                    // mc01
                    $wrap.hasClass('mc01') && isCount && ($wrap.find('.s_c strong').text(String(a.realIndex + 1).padStart(2, 0)), $wrap.find('.s_c span').text(String(listleng).padStart(2, 0)));

                    // mc05
                    if ($wrap.hasClass('mc05')) {
                        var mc05lb = $wrap.find('.mc05l_b');
                        var mc05lbt = mc05lb.find('.mc05lb_t');
                        var mc05lbt_li = mc05lbt.find('> div');
                        var mc05lbb = mc05lb.find('.mc05lb_b');
                        var mc05lbb_li = mc05lbb.find('li');

                        mc05lbt_li.removeClass('on');
                        mc05lbt_li.eq(a.realIndex).addClass('on');
                        mc05lbb_li.removeClass('on');
                        mc05lbb_li.eq(a.realIndex).addClass('on');
                    }

                    // mc07
                    if ($wrap.hasClass('mc07')) {
                        var mc07lb = $wrap.find('.mc07l_b');
                        var mc07lbt = mc07lb.find('.mc07lb_t');
                        var mc07lbt_li = mc07lbt.find('> div');
                        var mc07lbb = mc07lb.find('.mc07lb_b');
                        var mc07lbb_li = mc07lbb.find('li');

                        mc07lbt_li.removeClass('on');
                        mc07lbt_li.eq(a.realIndex).addClass('on');
                        mc07lbb_li.removeClass('on');
                        mc07lbb_li.eq(a.realIndex).addClass('on');
                    }
                }
            }
        });

        /* custom event */
        var $wrap = $(sSlide.el).parents('.s_o');
        var domLastFocus = loop ? $wrap.find('.sw_l[data-swiper-slide-index="' + (sLleng - 1) + ' a"]') : $wrap.find('.sw_l:last-child a');

        if (auto) {
            btnPlay.hide();
            btnPause.click(function() {
                if (sSlide !== undefined) {
                    sSlide.autoplay.stop();
                    $(this).next().show();
                    $(this).hide();
                    return false;
                }
            });
            btnPlay.click(function() {
                if (sSlide !== undefined) {
                    sSlide.autoplay.start();
                    $(this).prev().show();
                    $(this).hide();
                    return false;
                }
            });
        }

        $wrap.find('.s_w .sw_l a').focusin(function() {
            if (sSlide !== undefined) {
                var isFirstIndex = loop ? $(this).parents('.sw_l').attr('data-swiper-slide-index') === '0' : $(this).parents('.sw_l').index() === 0;
                if (auto) {
                    sSlide.autoplay.stop();
                    $wrap.find('.btn_pause').hide();
                    $wrap.find('.btn_play').show();
                }
                loop ? (isFirstIndex && sSlide.slideToLoop(0)) : (isFirstIndex && sSlide.slideTo(0));
            }
        });

        $wrap.find('.s_w').focusout(function() {
            if (sSlide !== undefined) {
                if (auto) {
                    sSlide.autoplay.start();
                    $wrap.find('.btn_pause').show();
                    $wrap.find('.btn_play').hide();
                }
            }
        });

        domLastFocus.keydown(function(e) {
            if (sSlide !== undefined) {
                var keyCode = e.keyCode || e.which;
                if (keyCode === 9) {
                    sSlide.slideTo(0);
                    if (auto) {
                        sSlide.autoplay.start();
                        $wrap.find('.btn_pause').show();
                        $wrap.find('.btn_play').hide();
                    }
                }
            }
        });

        // mc05
        if ($wrap.hasClass('mc05')) {

            var mc05lb = $wrap.find('.mc05l_b');
            var mc05lbb = mc05lb.find('.mc05lb_b');
            var mc05lbb_li = mc05lbb.find('li');
            var mc05lbb_link = mc05lbb_li.find('> a');

            mc05lbb_link.click(function(){

                var thP = $(this).parent();
                var thPIndex = thP.index();
                
                // mc05lbb_li.removeClass('on');
                // thP.addClass('on');
                mc05lb.removeClass('open');
                sSlide.slideToLoop(thPIndex);

                return false;
            });

        }

        // mc07
        if ($wrap.hasClass('mc07')) {

            var mc07lb = $wrap.find('.mc07l_b');
            var mc07lbb = mc07lb.find('.mc07lb_b');
            var mc07lbb_li = mc07lbb.find('li');
            var mc07lbb_link = mc07lbb_li.find('> a');

            mc07lbb_link.click(function(){

                var thP = $(this).parent();
                var thPIndex = thP.index();
                
                // mc07lbb_li.removeClass('on');
                // thP.addClass('on');
                mc07lb.removeClass('open');
                sSlide.slideToLoop(thPIndex);

                return false;
            });

        }

        /* e: set */

        if (breakPoint !== undefined) {

            $(window).on('resize', $.debounce(80, function(){

                var status = sCheck(),
                    isSame = breakPoint.includes(status);

                if (isSame) {
                    if (sSlide !== undefined) {
                        return;
                    } else {

                        /* s: set */
                        var strSW = 's_w',
                            strSL = 'sw_l'
                            sL = $domP.find('.' + strSL),
                            sLleng = sL.length,
                            sC = $domP.find('.s_c'),
                            btnPrev = $domP.find('.btn_prev'),
                            btnNext = $domP.find('.btn_next'),
                            btnPause = $domP.find('.btn_pause'),
                            btnPlay = $domP.find('.btn_play'),
                            isBtn = (btnPrev.length > 0) || (btnNext.length > 0),
                            sP = $domP.find('.s_p'),
                            sPleng = sP.length;

                        sLleng === 0 && (sC.hide(),sP.hide(),btnPrev.hide(),btnNext.hide(),btnPause.hide(),btnPlay.hide());
                        !auto && (btnPlay.hide(), btnPause.hide());

                        sSlide = new Swiper(dom, {
                            wrapperClass: strSW,
                            slideClass: strSL,
                            loop: loop,
                            autoplay: auto,
                            centeredSlides: !center ? false : true,
                            direction: !direct ? 'horizontal' : direct,
                            effect: !effect ? 'slide' : effect,
                            slidesPerView: "auto",
                            slidesPerGroup: 1,
                            nested: true,
                            pagination: sPleng > 0 && {
                                el: sP[0],
                                clickable: true,
                                renderBullet: function(i, c) {
                                    return '<span class="' + c + '">' + (i + 1) + "</span>";
                                }
                            },
                            navigation: isBtn && {
                                prevEl: btnPrev[0],
                                nextEl: btnNext[0]
                            },
                            on: {
                                init: function(a) {
                                    var $wrap = $(a.el).parents('.s_o');
                                    var isCount = $wrap.find('.s_c').length > 0;
                                    var listleng = $wrap.find('.sw_l:not(".swiper-slide-duplicate")').length;
                                    isCount && ($wrap.find('.s_c strong').text(1), $wrap.find('.s_c span').text(listleng));
                                    $wrap.find('.swiper-slide-duplicate a').attr('tabindex', '-1');
                                },
                                transitionEnd: function(a) {
                                    var $wrap = $(a.el).parents('.s_o');
                                    var isCount = $wrap.find('.s_c').length > 0;
                                    var listleng = $wrap.find('.sw_l:not(".swiper-slide-duplicate")').length;
                                    isCount && ($wrap.find('.s_c strong').text(a.realIndex + 1), $wrap.find('.s_c span').text(listleng));
                                    if (auto) {
                                        if ($wrap.find('.btn_pause').css('display') !== 'none') {
                                            a.autoplay.start();
                                        } else {
                                            a.autoplay.stop();
                                        }
                                    }
                                }
                            }
                        });

                        /* custom event */
                        var $wrap = $(sSlide.el).parents('.s_o');
                        var domLastFocus = loop ? $wrap.find('.sw_l[data-swiper-slide-index="' + (sLleng - 1) + ' a"]') : $wrap.find('.sw_l:last-child a');

                        if (auto) {
                            btnPlay.hide();
                            btnPause.click(function() {
                                if (sSlide !== undefined) {
                                    sSlide.autoplay.stop();
                                    $(this).next().show();
                                    $(this).hide();
                                    return false;
                                }
                            });
                            btnPlay.click(function() {
                                if (sSlide !== undefined) {
                                    sSlide.autoplay.start();
                                    $(this).prev().show();
                                    $(this).hide();
                                    return false;
                                }
                            });
                        }

                        $wrap.find('.s_w .sw_l a').focusin(function() {
                            if (sSlide !== undefined) {
                                var isFirstIndex = loop ? $(this).parents('.sw_l').attr('data-swiper-slide-index') === '0' : $(this).parents('.sw_l').index() === 0;
                                if (auto) {
                                    sSlide.autoplay.stop();
                                    $wrap.find('.btn_pause').hide();
                                    $wrap.find('.btn_play').show();
                                }
                                loop ? (isFirstIndex && sSlide.slideToLoop(0)) : (isFirstIndex && sSlide.slideTo(0));
                            }
                        });

                        $wrap.find('.s_w').focusout(function() {
                            if (sSlide !== undefined) {
                                if (auto) {
                                    sSlide.autoplay.start();
                                    $wrap.find('.btn_pause').show();
                                    $wrap.find('.btn_play').hide();
                                }
                            }
                        });

                        domLastFocus.keydown(function(e) {
                            if (sSlide !== undefined) {
                                var keyCode = e.keyCode || e.which;
                                if (keyCode === 9) {
                                    sSlide.slideTo(0);
                                    if (auto) {
                                        sSlide.autoplay.start();
                                        $wrap.find('.btn_pause').show();
                                        $wrap.find('.btn_play').hide();
                                    }
                                }
                            }
                        });

                        /* e: set */
    
                    }
                } else {
                    if (sSlide === undefined) {
                        return;
                    } else {
                        sSlide.destroy(true, true);
                        sSlide = undefined;
                    }
                }

            }));

            var isSame = breakPoint.includes(status);

            if (!isSame) {
                sSlide.destroy(true, true);
                sSlide = undefined;
            }

        }
    
    }
    
}

/* slide tab */
function fnSlideTab() {

    if ($('.tab_scrl').length > 0) {
        new Swiper('.tab_scrl', {
            wrapperClass: "s_w",
            slideClass: "sw_l",
            slidesPerView: "auto",
            nested: true,
            freeMode: true
        });
    }
    
}

/* Tab Common */
function tabCommon(wrapClass) {

    var tabWrap = $(wrapClass),
        tabList = tabWrap.find(".tab_list li"),
        tabContent = tabWrap.find(".tab_content");

    tabList.removeClass("on");
    tabList.first().addClass("on");
    tabList.find("a .hdn").remove();
    tabList.first().find("a").append('<em class="hdn">????????? ???</em>');
    tabContent.removeClass("on");
    tabContent.first().addClass("on");

    tabList.find("a").click(function() {

        var 
        	thP = $(this).parent(),
            thPIdx = thP.index(),
        	isOn = thP.hasClass("on");

        if (!isOn) {
            tabList.removeClass("on");
            tabList.find("a .hdn").remove();
            thP.addClass("on");
            $(this).append('<em class="hdn">????????? ???</em>');
            tabContent.removeClass("on");
            tabContent.eq(thPIdx).addClass('on');
        }

        var isGstk = $(this).parents('.gs_tab_keyword').length > 0;
        isGstk && $(this).parents('.gs_tab_keyword').addClass('open');
        
        var sTab = $(this).parents('.s_tab'),
        	isSTab = sTab.length > 0,
        	thPIdx = thP.index(),
	        thPLeft = thPIdx === 0 ? (thP.position().left - 8) : (thP.position().left);
        
        if (isSTab) {
        	sTab.animate({ scrollLeft: thPLeft }, 160, 'swing');
        }

        return false;
    });
    
}

/* Tab Accessibility */
function tabAccess(wrapClass) {

    var tabWrap = $(wrapClass),
        tabBox = tabWrap.find(".tab_box"),
        tabTitle = tabWrap.find(".tab_box .tab_title a");

    tabBox.removeClass("on");
    tabBox.first().addClass("on");
    tabBox.find(".tab_title a .hdn").remove();
    tabBox.first().find(".tab_title a").append('<em class="hdn">????????? ???</em>');

    tabTitle.click(function() {
        tabBox.removeClass("on");
        $(this).parents(".tab_box").addClass("on");
        tabBox.find(".tab_title a .hdn").remove();
        $(this).append('<em class="hdn">????????? ???</em>');

        return false;
    });

}

/* after hasCheck */
function afterHasCheck(dom, f, isResize, ratio) {
    var $dom = $(dom);
    $dom.length > 0 && $dom.each(!ratio ? f : function(){
        f($(this), ratio);
    });
    isResize && $(window).on('resize', $.debounce(80, function(){
        $dom.length > 0 && $dom.each(!ratio ? f : function(){
            f($(this), ratio);
        });
    }));
}

/*
    className : ltn_l
    afterHasCheck('.ltn_l', listToggleNear)
 */
function listToggleNear() {

    var th = $(this),
        thP = th.parent('.ltn_p'),
        isOpen = thP.hasClass("open");

    !isOpen ? (th.append('<em class="hdn">??????</em>')) : (th.append('<em class="hdn">??????</em>'));

    th.click(function() {

        var thP = $(this).parent('.ltn_p'),
            isOpen = thP.hasClass("open"),
            thTxt = $(this).find(".hdn");

        !isOpen ? (thP.addClass("open"), thTxt.text("??????")) : (thP.removeClass("open"), thTxt.text("??????"));

        var thPP = $(this).parent('.ltn_ap'),
            thPPLinkText = thPP.find('.ltn_al .hdn'),
            thPPList = thPP.find('.ltn_p'),
            thPPListLeng = thPPList.length,
            checkNum = 0;

        thPPList.each(function(){
            var isOpen = $(this).hasClass('open');
            isOpen ? checkNum += 1 : checkNum -= 1;
        });

        if (checkNum === thPPListLeng) {
            thPP.addClass('open');
            thPPLinkText.text('??????');
        } else if (checkNum === thPPListLeng * -1) {
            thPP.removeClass('open');
            thPPLinkText.text('??????');
        }

        return false;

    });
}

/*
    className : lt_l
    afterHasCheck('.lt_l', listToggle)
 */
function listToggle() {

    var th = $(this),
        thP = th.parents('.lt_p'),
        isOpen = thP.hasClass("open");

    !isOpen ? (th.append('<em class="hdn">??????</em>')) : (th.append('<em class="hdn">??????</em>'));

    th.click(function() {

        var thP = $(this).parents('.lt_p'),
            isOpen = thP.hasClass("open"),
            thTxt = $(this).find(".hdn");

        !isOpen ? (thP.addClass("open"), thTxt.text("??????")) : (thP.removeClass("open"), thTxt.text("??????"));

        var thPP = $(this).parents('.lt_ap'),
            thPPLinkText = thPP.find('.lt_al .hdn'),
            thPPList = thPP.find('.lt_p'),
            thPPListLeng = thPPList.length,
            checkNum = 0;

        thPPList.each(function(){
            var isOpen = $(this).hasClass('open');
            isOpen ? checkNum += 1 : checkNum -= 1;
        });

        if (checkNum === thPPListLeng) {
            thPP.addClass('open');
            thPPLinkText.text('??????');
        } else if (checkNum === thPPListLeng * -1) {
            thPP.removeClass('open');
            thPPLinkText.text('??????');
        }

        return false;

    });
}
function listAllToggle() {

    var th = $(this),
        thP = th.parents('.lt_ap'),
        isOpen = thP.hasClass("open"),
        thPlist = thP.find('.lt_p');

    !isOpen ? (th.append('<em class="hdn">??????</em>'), thPlist.removeClass('open')) : (th.append('<em class="hdn">??????</em>'), thPlist.addClass('open'));

    th.click(function(){

        var thP = $(this).parents('.lt_ap'),
            thTxt = $(this).find(".hdn"),
            isOpen = thP.hasClass("open"),
            thPlist = thP.find('.lt_p'),
            thPlistLinkTxt = thPlist.find('.lt_l .hdn');

        if (!isOpen) {
            thP.addClass("open");
            thTxt.text("??????");
            thPlist.addClass('open');
            thPlistLinkTxt.text('??????');
        } else {
            thP.removeClass("open");
            thTxt.text("??????");
            thPlist.removeClass("open");
            thPlistLinkTxt.text('??????');
        }

        return false;

    });
}

/*
    className : dt_l
    afterHasCheck('.dt_l', targetToggle)
 */
function targetToggle() {

    var th = $(this),
        thTargetDiv = $("." + th.attr("data-target")),
        thBtnCloseTop = $(thTargetDiv.find(".btn_popup_close")[0]);
        thBtnCloseBottom = $(thTargetDiv.find(".btn_popup_close")[1])
        isIbw = thTargetDiv.find('.ib_w').length > 0,
        bdShadow = $('.body_shadow');

    thTargetDiv.length > 0 && thTargetDiv.css({
        'opacity': 0,
        'transition' : 'opacity 0.16s ease-out'
    }).hide();

    th.click(function() {
        var isOpen = thTargetDiv.hasClass('open');
        var isBody = th.hasClass('bd_on');
        if (!isOpen) {
            isBody && bdShadow.addClass('open');
            thTargetDiv.show();
            setTimeout(function(){
                thTargetDiv.addClass("open").css('opacity', 1);
                thBtnCloseTop.focus();
            }, 160);
            (isIbw && afterHasCheck('.ib_w', inlineBlockWidth));
        } else {
            isBody && bdShadow.removeClass('open');
            thTargetDiv.removeClass("open").css('opacity', 0);
            setTimeout(function(){
                thTargetDiv.hide();
            }, 160);
        }
        return false;
    });

    thBtnCloseTop.click(function() {
        var isBody = th.hasClass('bd_on');
        isBody && bdShadow.removeClass('open');
        thTargetDiv.removeClass("open").css('opacity', 0);
        setTimeout(function(){
            thTargetDiv.hide();
        }, 160);
        th.focus();

        return false;
    });

    thBtnCloseBottom.click(function() {
        var isBody = th.hasClass('bd_on');
        isBody && bdShadow.removeClass('open');
        thTargetDiv.removeClass("open").css('opacity', 0);
        setTimeout(function(){
            thTargetDiv.hide();
        }, 160);
        th.focus();

        return false;
    });

}
/*
    className : a
    afterHasCheck('a', newWindow)
 */
function newWindow() {
    var th = $(this),
        thTarget = th.attr("target"),
        thTitle = th.attr("title");

    if (thTarget === "_blank") {
        th.append('<i class="ico_window"><em class="hdn">??????</em></i>');    
        (thTitle === undefined || thTitle === null || thTitle === "") && th.attr("title", "??????");
    }
}
/*
    className : [class^="tab_"] .on a
    afterHasCheck('[class^="tab_"] .on a', tabSelected)
 */
function tabSelected() {
    $(this).attr("title", '????????? ???');
}
/* 
    className : target 
    afterHasCheck(target, domRatio, true, ratio)
*/
function domRatio(th, ratio) {
    th.css('height', th.outerWidth() * ratio);
}
/* 
    className : ib_w 
    afterHasCheck('.ib_w', inlineBlockWidth)
*/
function inlineBlockWidth() {
    var thClass = $(this).parent().attr('class');
    var isPdl = thClass && thClass.includes('pd_l');
    var pdVal = isPdl ? Number(thClass.split(' ')[0].split('pd_l')[1]) : 0;
    $(this).parent().css({
        'width': $(this).outerWidth() + pdVal
    });
}
/* 
    className : f_unit
    afterHasCheck('.f_unit', fUnitTextWidth)
*/
function fUnitTextWidth() {
    $(this).find('input').css({
        'padding-right': $(this).find('.f_txt').outerWidth()
    })
}
/* 
    className : form_area
    afterHasCheck('.form_area', formAreaTitleWidth)
*/
function formAreaTitleWidth() {

    var arr = [],
        th = $(this),
        thList = th.find('> ul > li'),
        thtitle = th.find('.fa_title'),
        isTitle = thtitle.length > 0,
        isPdNone = th.hasClass('pd_n'),
        per = 16;

    if (isPdNone) return;

    if (isTitle) {
        thList.each(function(){
            arr.push($(this).find('.fa_title').outerWidth());
        });
        arr.sort(function(a, b){ return b - a });
        thList.css('padding-left', arr[0] + per);
    }

}
/* 
    className : s_tab
    afterHasCheck('.s_tab', subTabScroll)
*/
function subTabScroll() {

    var th = $(this),
        thW = th.outerWidth(),
        thUl = th.find('ul'),
        thLi = th.find('li'),
        liOn = th.find('.on'),
        liOnPosX = liOn.position().left,
        thPd = 16,
        x = 0;

    th.scrollLeft(liOnPosX - (thPd / 2));
    thLi.each(function(){
        x =  x + $(this).outerWidth();
    });
    thW < x ? thUl.css('width', x + thPd) : thUl.removeAttr('style');

}

function boardLinkWidth() {

    var th = $(this),
        isEps = th.hasClass('board_link_elps'),
        thLink = th.find('.bl_link'),
        thLinkNot = th.find('> *').not('.bl_link'),
        totalWidth = 0;

    if (isEps) {
        thLinkNot.each(function(){
            totalWidth += $(this).outerWidth() + 8;
        });
    }

    thLink.css('max-width', 'calc(100% - ' + parseInt(totalWidth + 16) + 'px)');

}

function fCheckToggle() {

    var fci = $('.f_check input');

    fci.keydown(function(e){
        var codeKey = e.keyCode || e.which;
        if (codeKey === 13) {
            $(this).trigger('click');
        }
    });

}

function layerAlert({th, tit, cont, pf, cf, nf}){
    var $body = $('body');
    var la = `<div class="layer_alert">
        <div>
            <button class="btn_close">??????</button>
            <div class="la_t">
                <h3>${!!tit ? tit : '??????'}</h3>
            </div>
            <div class="la_c">
                ${cont}
            </div>
            <div class="la_b">
                ${!!pf ? '<button class="btn_confirm">??????</button>' : ''}
                ${!!cf ? '<button class="btn_common">??????</button>' : ''}
                <button class="btn_cancel">??????</button>
            </div>
        </div>
    </div>
    `;
    $body.append(la);
    $('.layer_alert .btn_close').focus();
    $('.layer_alert .btn_close').click(function(){
        $('.layer_alert').remove();
        $(th).focus();
    });
    $('.layer_alert .btn_cancel').click(function(){
        !!nf && nf();
        $('.layer_alert').remove();
        $(th).focus();
    })
    !!pf && $('.layer_alert .btn_confirm').click(function(){
        pf();
        $('.layer_alert').remove();
        $(th).focus();
    });
    !!cf && $('.layer_alert .btn_common').click(function(){
        cf();
        $('.layer_alert').remove();
        $(th).focus();
    });
};



/* header relate function */

var glhCount = 0;
var gphCount = 0;

function gnbTgl() {

    var status = sCheck(),
        bs = $('.body_shadow'),
        h = $('.header'),
        g = $('.gnb'),
        hH = 118,
        gLi = g.find('> ul > li');
    var gs = $('.global_search'),
        mm = $('.my_menu'),
        mc01menu = $('.mc01_menu');

    if (status === 'l' && glhCount === 0) {
        var arr = [];
        gLi.each(function(){
            var childH = $(this).find('> div').outerHeight() || 0;
            arr.push(childH);
        });
        g.attr('data-l-height', Math.max.apply(null, arr) + hH);
        glhCount = 1;
    } else if (status === 'p' && gphCount === 0) {
        var arr = [];
        gLi.each(function(){
            var childH = $(this).find('> div').outerHeight() || 0;
            arr.push(childH);
        });
        g.attr('data-p-height', Math.max.apply(null, arr) + hH);
        gphCount = 1;
    }

    gLi.on('mouseenter', function(){

        gs.hasClass('open') && (
            gs.removeClass("open").css('opacity', 0),
            setTimeout(function(){
                gs.hide();
            }, 160),
            gs.find('.gs_form input').val('')
        );
        mm.hasClass('open') && (
            mm.find('.mm_b').removeClass('open'),
            mm.removeClass("open").css('opacity', 0),
            bs.removeClass('visible_mm'),
            setTimeout(function(){
                mm.hide();
            }, 160)
        );
        mc01menu.hasClass('open') && (
            mc01menu.removeClass("open").css('opacity', 0),
            bs.removeClass('visible'),
            setTimeout(function(){
                mc01menu.hide();
            }, 160)
        );

        var status = sCheck();
        bs.addClass('visible');
        status === 'l' ? h.css('height', g.attr('data-l-height')) : h.css('height', g.attr('data-p-height'));
        gLi.css('height', (status === 'l' ? (80 + g.attr('data-l-height')) : (80 + g.attr('data-p-height'))));
        gLi.removeClass('over');
        $(this).addClass('over');
    });

    g.on('mouseleave', function(){
        bs.removeClass('visible');
        h.removeAttr('style');
        gLi.removeClass('over');
    });

    gLi.on('focusin', function(){

        gs.hasClass('open') && (
            gs.removeClass("open").css('opacity', 0),
            setTimeout(function(){
                gs.hide();
            }, 160),
            gs.find('.gs_form input').val('')
        );
        mm.hasClass('open') && (
            mm.find('.mm_b').removeClass('open'),
            mm.removeClass("open").css('opacity', 0),
            bs.removeClass('visible_mm'),
            setTimeout(function(){
                mm.hide();
            }, 160)
        );
        mc01menu.hasClass('open') && (
            mc01menu.removeClass("open").css('opacity', 0),
            bs.removeClass('visible'),
            setTimeout(function(){
                mc01menu.hide();
            }, 160)
        );

        var status = sCheck();
        bs.addClass('visible');
        status === 'l' ? h.css('height', g.attr('data-l-height')) : h.css('height', g.attr('data-p-height'));
        gLi.css('height', (status === 'l' ? (80 + g.attr('data-l-height')) : (80 + g.attr('data-p-height'))));
        gLi.removeClass('over');
        $(this).addClass('over');
    });

    g.on('focusout', function(){
        bs.removeClass('visible');
        h.removeAttr('style');
        gLi.removeClass('over');
    });

    $(window).resize(function(){
        var status = sCheck();
        if (status === 'l' && glhCount === 0) {
            var arr = [];
            gLi.each(function(){
                var childH = $(this).find('> div').outerHeight() || 0;
                arr.push(childH);
            });
            g.attr('data-l-height', Math.max.apply(null, arr) + hH);
            glhCount = 1;
        } else if (status === 'p' && gphCount === 0) {
            var arr = [];
            gLi.each(function(){
                var childH = $(this).find('> div').outerHeight() || 0;
                arr.push(childH);
            });
            g.attr('data-p-height', Math.max.apply(null, arr) + hH);
            gphCount = 1;
        }
    });
    
}

function mymenuTgl() {

    var btnOpen = $('.header .btn_mymenu');
    var btnOpen_ = $('.global_menu .gm_t .btn_mymenu');
    var mm = $('.my_menu');
    var bs = $('.body_shadow');
    var btnClose = mm.find('.mm_t .btn_close');

    mm.css({
        'opacity': 0,
        'transition' : 'transform 0.16s ease-out, opacity 0.16s ease-out'
    }).hide();

    btnOpen.click(function() {
        var isOpen = mm.hasClass('open');
        if (!isOpen) {
            bs.addClass('visible_mm');
            mm.show();
            setTimeout(function(){
                mm.addClass("open").css('opacity', 1);
                btnClose.focus();
            }, 160);
        } else {
            mm.find('.mm_b').removeClass('open');
            bs.removeClass('visible_mm');
            mm.removeClass("open").css('opacity', 0);
            setTimeout(function(){
                mm.hide();
            }, 160);
            btnOpen.focus();
        }

        // var gs = $('.global_search');
        // var gsIsOpen = gs.hasClass('open');

        // if (gsIsOpen) {
        //     bs.removeClass('visible');
        //     gs.removeClass("open").css('opacity', 0);
        //     setTimeout(function(){
        //         gs.hide();
        //     }, 160);
        //     gs.find('.gs_form input').val('');
        // }
        
        // var mc01menu = $('.mc01_menu');
        // var mc01menuIsOpen = mc01menu.hasClass('open');

        // if (mc01menuIsOpen) {
        //     bs.removeClass('visible');
        //     mc01menu.removeClass("open").css('opacity', 0);
        //     setTimeout(function(){
        //         mc01menu.hide();
        //     }, 160);
        // }
        
        return false;
    });

    btnOpen_.click(function() {
        var isOpen = mm.hasClass('open');
        if (!isOpen) {
            bs.addClass('visible_mm');
            mm.show();
            setTimeout(function(){
                mm.addClass("open").css('opacity', 1);
                btnClose.focus();
            }, 160);
        } else {
            mm.find('.mm_b').removeClass('open');
            bs.removeClass('visible_mm');
            mm.removeClass("open").css('opacity', 0);
            setTimeout(function(){
                mm.hide();
            }, 160);
            btnOpen_.focus();
        }

        // var gs = $('.global_search');
        // var gsIsOpen = gs.hasClass('open');

        // if (gsIsOpen) {
        //     bs.removeClass('visible');
        //     gs.removeClass("open").css('opacity', 0);
        //     setTimeout(function(){
        //         gs.hide();
        //     }, 160);
        //     gs.find('.gs_form input').val('');
        // }
        
        // var mc01menu = $('.mc01_menu');
        // var mc01menuIsOpen = mc01menu.hasClass('open');

        // if (mc01menuIsOpen) {
        //     bs.removeClass('visible');
        //     mc01menu.removeClass("open").css('opacity', 0);
        //     setTimeout(function(){
        //         mc01menu.hide();
        //     }, 160);
        // }
        
        return false;
    });

    btnClose.click(function() {
        mm.find('.mm_b').removeClass('open');
        bs.removeClass('visible_mm');
        mm.removeClass("open").css('opacity', 0);
        setTimeout(function(){
            mm.hide();
        }, 160);
        btnOpen.focus();
        return false;
    });

    var btnSettingOpen = mm.find('.mm_util .mmu_btns .btn_setting');
    var mmb = mm.find('.mm_b');
    var btnSettingClose = mmb.find('.mmb_t .btn_close');

    btnSettingOpen.click(function() {
        var isOpen = mmb.hasClass('open');
        if (!isOpen) {
            mmb.addClass('open');
            btnSettingClose.focus();
        } else {
            mmb.removeClass('open');
            btnSettingOpen.focus();
        }
        return false;
    });

    btnSettingClose.click(function() {
        mmb.removeClass('open');
        btnSettingOpen.focus();
        return false;
    });

}

function globalsearchTgl() {

    var btnOpen = $('.header .btn_globalsearch');
    var gs = $('.global_search');
    var gsFormInput = gs.find('.gs_form input');
    var bs = $('.body_shadow');
    var btnClose = gs.find('.gs_t .btn_close');

    gs.css({
        'opacity': 0,
        'transition' : 'transform 0.16s ease-out, opacity 0.16s ease-out'
    }).hide();

    btnOpen.click(function() {

        // var mm = $('.my_menu');
        // var mmb = mm.find('.mm_b');
        // var mmIsOpen = mm.hasClass('open');

        // if (mmIsOpen) {
        //     mm.find('.mm_b').removeClass('open'),
        //     bs.removeClass('visible_mm');
        //     mm.removeClass("open").css('opacity', 0);
        //     mmb.removeClass('open');
        //     setTimeout(function(){
        //         mm.hide();
        //     }, 160);
        // }
        
        // var mc01menu = $('.mc01_menu');
        // var mc01menuIsOpen = mc01menu.hasClass('open');

        // if (mc01menuIsOpen) {
        //     bs.removeClass('visible');
        //     mc01menu.removeClass("open").css('opacity', 0);
        //     setTimeout(function(){
        //         mc01menu.hide();
        //     }, 160);
        // }

        var isOpen = gs.hasClass('open');
        if (!isOpen) {
            bs.addClass('visible');
            gs.show();
            setTimeout(function(){
                gs.addClass("open").css('opacity', 1);
                gsFormInput.focus();
            }, 160);
        } else {
            bs.removeClass('visible');
            gs.removeClass("open").css('opacity', 0);
            setTimeout(function(){
                gs.hide();
            }, 160);
            gs.find('.gs_form input').val('');
            btnOpen.focus();
        }
        
        return false;
    });

    btnClose.click(function() {
        bs.removeClass('visible');
        gs.removeClass("open").css('opacity', 0);
        setTimeout(function(){
            gs.hide();
        }, 160);
        gs.find('.gs_form input').val('');
        btnOpen.focus();
        return false;
    });

    gsFormInput.on('focusin', function(){
        if ($(this).val() !== '') {
            gs.find('.gs_result').addClass('open');
            gs.find('.gs_b').removeClass('open');
            console.log('??????');
        } else {
            gs.find('.gs_result').removeClass('open');
            gs.find('.gs_b').addClass('open');
            console.log('??????');
        }
        console.log('??????????????????');
    });
    // gsFormInput.on('focusout', function(){
    //     $('.gs_b').removeClass('open');
    //     console.log('??????????????????');
    // });
    gsFormInput.on("propertychange change keyup paste input", function(){
        if ($(this).val() !== '') {
            gs.find('.gs_result').addClass('open');
            gs.find('.gs_b').removeClass('open');
            console.log('??????');
        } else {
            gs.find('.gs_result').removeClass('open');
            gs.find('.gs_b').addClass('open');
            console.log('??????');
        }
    });

}

function globalmenuTgl() {

    var btnOpen = $('.header .btn_globalmenu');
    var gm = $('.global_menu');
    var gmt = gm.find('.gm_t');
    var gmc = gm.find('.gm_c');
    var gmb = gm.find('.gm_b');
    var bd = $('body');
    var btnClose = gm.find('.gm_t .btn_close');

    gm.css({
        'opacity': 0,
        'transition' : 'opacity 0.16s ease-out'
    }).hide();

    btnOpen.click(function() {

        var gs = $('.global_search');
        var bs = $('.body_shadow');
        var gsIsOpen = gs.hasClass('open');

        if (gsIsOpen) {
            bs.removeClass('visible');
            gs.removeClass("open").css('opacity', 0);
            setTimeout(function(){
                gs.hide();
            }, 160);
            gs.find('.gs_form input').val('');
        }
        
        var mc01menu = $('.mc01_menu');
        var mc01menuIsOpen = mc01menu.hasClass('open');

        if (mc01menuIsOpen) {
            bs.removeClass('visible');
            mc01menu.removeClass("open").css('opacity', 0);
            setTimeout(function(){
                mc01menu.hide();
            }, 160);
        }
        
        bd.addClass('of_h');
        gm.show();
        gmb.css('height', 'calc(100% - ' + (gmt.outerHeight() + gmc.outerHeight()) + 'px)');
        setTimeout(function(){
            gm.addClass("open").css('opacity', 1);
            btnClose.focus();
        }, 160);

        return false;
    });

    btnClose.click(function() {
        bd.removeClass('of_h');
        gm.removeClass("open").css('opacity', 0);
        setTimeout(function(){
            gm.hide();
        }, 160);
        btnOpen.focus();
        return false;
    });

    var gmLi = gm.find('.gm_list > ul > li');
    gmLi.each(function(){
        var hasChild = $(this).find('ul').length > 0;
        hasChild && (
            $(this).addClass('lt_p'),
            $(this).find('> a').addClass('lt_l'),
            $(this).find('> div').addClass('lt_c')
        )
    });

    $(window).resize(function(){
        var status = sCheck();
        var isOpen = gm.hasClass('open');
        ((status === 'l' || status === 'p') && isOpen) && (
            bd.removeClass('of_h'),
            gm.removeClass("open").css('opacity', 0),
            setTimeout(function(){
                gm.hide();
            }, 160)
        )
    });

}

var dtScrlCount = 0;

function dataTableScroll() {

    var status = sCheck();
    var dt = $('[class^="data_table_"]');
    var dtscrl = dt.find('.dt_scrl');
    var e1, e2;

    if (status === 't' || status === 'm') {
        if (dtScrlCount === 0) {
            clearTimeout(e1);
            clearTimeout(e2);
            dtscrl.show();
            dtscrl.addClass('open');
            e1 = setTimeout(function(){
                dtscrl.removeClass('open');
            }, 1000);
            e2 = setTimeout(function(){
                dtscrl.hide();
            }, 1160);
            dtScrlCount = 1;
        }
    } else {
        dtscrl.removeClass('open');
        dtscrl.hide();
        dtScrlCount = 0;
    }

    $(window).resize(function(){
        var status = sCheck();
        if (status === 't' || status === 'm') {
            if (dtScrlCount === 0) {
                clearTimeout(e1);
                clearTimeout(e2);
                dtscrl.show();
                dtscrl.addClass('open');
                e1 = setTimeout(function(){
                    dtscrl.removeClass('open');
                }, 1000);
                e2 = setTimeout(function(){
                    dtscrl.hide();
                }, 1160);
                dtScrlCount = 1;
            }
        } else {
            dtscrl.removeClass('open');
            dtscrl.hide();
            dtScrlCount = 0;
        }
    });

}

function imgExpand() {
    var imgExpand = $('.img_expand');
    imgExpand.each(function(){
        var th = $(this);
        var thImgSrc = th.find('> img').attr('src');
        var isPbm = th.find('> .pb_m').length > 0;
        isPbm && (thImgSrc = th.find('> .pb_m').attr('src'));
        th.append('<a href="' + thImgSrc + '" class="btn_expand"><em class="hdn">????????? ????????????</em></a>')
    });
}

$(document).ready(function(){

    gnbTgl();
    mymenuTgl();
    globalsearchTgl();
    globalmenuTgl();

    afterHasCheck('a', newWindow);
    setTimeout(function(){
        afterHasCheck('.ltn_l', listToggleNear);
        afterHasCheck('.lt_l', listToggle);
        afterHasCheck('.lt_al', listAllToggle);
        afterHasCheck('.dt_l', targetToggle);
    }, 80);
    afterHasCheck('.ib_w', inlineBlockWidth);
    afterHasCheck('.f_unit', fUnitTextWidth);
    // afterHasCheck('.s_tab', subTabScroll);
    afterHasCheck('.board_link', boardLinkWidth);
    afterHasCheck('[class^="tab_"] .on a', tabSelected);
    afterHasCheck('.form_area', formAreaTitleWidth);
    fCheckToggle();
    fnSlideTab();
    $('.scrollbar-inner').scrollbar();
    dataTableScroll();

    imgExpand();

});

$(document).mouseup(function (e){
    
    var bs = $('.body_shadow');

    var mm = $('.my_menu');
    var mmIsOpen = mm.hasClass('open');
    if (mm.has(e.target).length === 0) {
        if (mmIsOpen) {
            mm.find('.mm_b').removeClass('open');
            bs.removeClass('visible_mm');
            mm.removeClass("open").css('opacity', 0);
            setTimeout(function(){
                mm.hide();
            }, 160);
        }
    }

    var gs = $('.global_search');
    var gsIsOpen = gs.hasClass('open');
    var isNotGsBtn = !($(e.target).hasClass('btn_globalsearch')) && !($(e.target).parent().hasClass('btn_globalsearch'));
    if (gs.has(e.target).length === 0 && isNotGsBtn) {
        if (gsIsOpen) {
            console.log(1);
            bs.removeClass('visible');
            gs.removeClass("open").css('opacity', 0);
            setTimeout(function(){
                gs.hide();
            }, 160);
            gs.find('.gs_form input').val('');
        }
    }

    var gm = $('.global_menu');
    var gmIsOpen = gm.hasClass('open');
    if (gm.has(e.target).length === 0) {
        if (gmIsOpen) {
            bd.removeClass('of_h');
            gm.removeClass("open").css('opacity', 0);
            setTimeout(function(){
                gm.hide();
            }, 160);
        }
    }

    var mc01menu = $('.mc01 .mc01_menu');
    var mc01menuIsOpen = mc01menu.hasClass('open');
    if (mc01menu.has(e.target).length === 0) {
        if (mc01menuIsOpen) {
            bs.removeClass('visible');
            mc01menu.removeClass("open").css('opacity', 0);
            setTimeout(function(){
                mc01menu.hide();
            }, 160);
            btnOpen.focus();
        }
    }

    var ltp = $('.lt_p');
    ltp.each(function(){
        var th = $(this);
        if (th.has(e.target).length === 0) {
            var ltpIsOpen = th.hasClass('open');
            if (ltpIsOpen) {
                th.removeClass('open');
                th.find('.lt_l em.hdn').text('??????');
            }
        }
    });

});