function logoAnimation(){
    var $logo = $('header .logo');
    var y = parseInt($logo.css('background-position').split(' ')[1]);
    var step = 200;
    var speed = 50;
    var longSpeed = 3000;
    var frame = 0;
    var maxframe = 41;
    function goToFrame(){
        var bgpX = parseInt($logo.css('background-position').split(' ')[0]);
        var bgpY = parseInt($logo.css('background-position').split(' ')[1]);
        var newY = y - (step * frame);
        $logo.css('background-position',bgpX + 'px ' + newY + 'px');
    }
    function logoAnim(){
        goToFrame();
        frame++;
        if(frame > maxframe){
            frame = 0;
            setTimeout(function(){logoAnim();},longSpeed);
        } else {
            setTimeout(function(){logoAnim();},speed);
        }
    }
    var timer = setTimeout(function(){logoAnim();},speed);
}
function brandSlider(){
    var $brandSliderWrap = $('.sidebar .brands-slider-wrap');
    var $brandSliderSubWrap = $('.sidebar .brand-slider-subwrap');
    var $brandsSlider = $brandSliderSubWrap.find('.brands-slider');
    var $toup = $brandSliderWrap.find('.toup');
    var $todown = $brandSliderWrap.find('.todown');
    var siderWindowHeight = $brandsSlider.height();
    var siderWrapHeight = $brandSliderSubWrap.height();
    var scrolling = siderWindowHeight > siderWrapHeight;
    var scrollstep = siderWrapHeight;
    var speed = 200;
    var minTop = 0;
    var maxTop = (siderWindowHeight - siderWrapHeight) * (-1);
    $toup.on('click', function(){
        if(scrolling){
            var top = parseInt($brandsSlider.css('top'));
            var newTop = top + scrollstep;
            if(newTop > minTop){
                newTop = minTop;
            }
            $brandsSlider.animate({top:newTop+'px'},speed);
        }
        return false;
    });
    $todown.on('click', function(){
        if(scrolling){
            var top = parseInt($brandsSlider.css('top'));
            var newTop = top - scrollstep;
            if(newTop < maxTop){
                newTop = maxTop;
            }
            $brandsSlider.animate({top:newTop+'px'},speed);
        }
        return false;
    });
}

$(document).ready(function(){
//    $('#main > header nav ul li ul.ins a').on('click', function(){
//        var $this = $(this);
//        $('#main > header nav ul li ul.ins li').removeClass('active');
//        $this.parent().addClass('active');
//        return false;
//    });
//    $('.sidebar ul.brands-slider li a').on('click', function(){
//        var $this = $(this);
//        $('.sidebar ul.brands-slider li').removeClass('active');
//        $this.parent().addClass('active');
//        return false;
//    });



    $('.js-submit').on('click', function(){
        var $form = $(this).closest('form');
        $form.trigger('submit');
        return false;
    });

    $('.mainSlider').flexslider({
        animation: "slide",
        start: function(){
            var $flexControlNav = $('.flex-control-nav');
            var pages = $flexControlNav.find('li').length;
            var w = 27;
            if(pages > 0){
                var width = pages * w;
                $flexControlNav.css('width',width + 'px');
                $('<li class="w-before"></li>').prependTo($flexControlNav);
                $('<li class="w-after"></li>').appendTo($flexControlNav);
            }
        }
    });

    if ($('.fancybox_modal').length !== 0) {
        $('.fancybox_modal').fancybox({
                  hideOnOverlayClick: true,
                  fitToView : false,
                  autoSize  : true,
                  showCloseButton  : false,
                  openEffect  : 'none',
                  closeEffect : 'none',
                  padding   : '0',
                  tpl     : {
                    wrap    : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>'
                  }
        });
    }
    $('.fancybox_ajax').fancybox({
        padding   : 0,
        margin: 30,
        autoSize  : true,
        fitToView : false,
        showCloseButton  : true,
            tpl : {wrap    : '<div class="fancybox-wrap ajax-popup-item" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div><div class="popup-shadow-window"></div></div>'
        },
        beforeLoad : function(){
            window.last = this.element;
        }
    });
    $('.fancybox_image').fancybox({
        showCloseButton  : true,
        margin: 30,
            tpl : {wrap    : '<div class="fancybox-wrap ajax-popup-image" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>'
        },
        helpers : {
            thumbs  : {
                width   : 57,
                height  : 86
            }
        },
        afterClose : function (){
            jQuery(window.last).trigger('click');
        }
    });
    $('.js-checkbox').on('click', function(){
        var $this = $(this);
        var $checkbox = $this.parent().find('input:checkbox');
        if($this.hasClass('checked')){
            $checkbox.attr('checked',false);
            $this.removeClass('checked');
        } else {
            $checkbox.attr('checked',true);
            $this.addClass('checked');
        }
        return false;
    });
    $('#caruselMore').flexslider({
        animation: "slide",
        animationLoop: false,
        slideshow: false,
        itemWidth: 160,
        itemMargin: 15
    });
    logoAnimation();
    brandSlider();
});

