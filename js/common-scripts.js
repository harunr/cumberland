(function($){
	$(function(){

        // Phone nav click function
        $('.hamburger').click(function() {
            $('body').toggleClass('nav-shown');
        });

        $(".main-nav ul > li").find("section").parent("li").addClass("show");
        $(".main-nav ul > li").find("section").parent("li").addClass("has-sub-nav");
       
        if ($(window).width() < 769){
            $(".main-nav ul > li.has-sub-nav > a").bind('click', 'touchend', function (e) {
                e.preventDefault();
                $(".main-nav ul > li").find("> section:visible").slideUp()
                $(".main-nav ul > li").removeClass("active")
                if ($(this).parent().find("> section:visible").length) {
                    $(this).removeClass("active")
                    $(this).parent().find("> section").slideUp()
                } else {
                    $(this).addClass("active")
                    $(this).parent().find("> section").slideDown()
                }
            })
        }

        $('input, textarea').keyup(function () {
            $(this).closest("div").addClass('populated')
        })


        $('input, textarea').blur(function () {
            if (!this.value) {
                this.value = this.defaultValue;
            }
            if (this.value == this.defaultValue) {
                $(this).closest("div").removeClass('populated')
            }
        });

         $(document).on('gform_post_render', function () {
            $('input, textarea').keyup(function () {
                $(this).closest("div").addClass('populated')
            })



             $("input, textarea").each(function(){
            var $this = $(this);
                if ($this.val().length > 0) {
                    $this.closest("div").addClass('populated');
                  } else {
                    $this.closest("div").removeClass('populated');
                  }
              })
        });
        
        // Headroom init function
        var header = new Headroom(document.querySelector(".header-wrap"), {
            tolerance: 5,
            offset : 205,
            classes: {
                initial: "headroom",
                pinned: "slideDown",
                unpinned: "slideUp"
            },
            onPin : function() {
                $('body').addClass('breadcrumb-bottom');
            },
            onUnpin : function() {
                $('body').removeClass('breadcrumb-bottom');
            },
        });
        header.init();
        
        $(window).scroll(function() {
            if ($(document).scrollTop() > 205) {
                $('body').addClass('breadcrumb-top');
            }
            else {
                $('body').removeClass('breadcrumb-top');
            }
        });
        
        var delayTime = 0.2 
        $('.main-nav ul li').each(function(i){
            $(this).find(' > a').css({
                'transition-delay'  : delayTime + (i * .15) + 's'
            });
        })
        
        if ($('.hypnotherapy-wrap .hypnotherapy-item-wrap').length) {
            $('.hypnotherapy-wrap .hypnotherapy-item-wrap').slick({
                arrows:true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 1500,
                navigation:false,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots:false,
                centerMode: false,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 500,
                            swipe: true,
							touchThreshold:6000

                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            autoplay: false,
                            speed: 500,
                            swipe: true,
							touchThreshold: 6000,
							 settings: "unslick"

                        }
                    }

                ]
            })
        }
        if ($('.further-wrap .hypnotherapy-item-wrap').length) {
            $('.further-wrap .hypnotherapy-item-wrap').slick({
                arrows:true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 1500,
                navigation:false,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots:false,
                centerMode: false,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,

                        }
                    },
                    {
                        breakpoint: 769,
                        settings: "unslick"
                        },

                ]
            });
            $(window).on('resize', function () {
                $('.further-wrap .hypnotherapy-item-wrap').slick('resize');
                
                });
                
        }
        
        $('.footer-widget ul li').addClass('inview animate-from-bottom');
        $('#gform_fields_1 > div, .gform_footer.top_label, .blog-single-right .single-thumb + div').addClass('inview animate-from-bottom');


        var $animation_elements = $('.inview');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top - 50;
                var element_top_positionmobi = $element.offset().top - 160;
                var element_bottom_position = (element_top_position + element_height);
                //check to see if this current container is within viewport
                if ($(window).width() < 768){
                    if (element_top_positionmobi <= window_bottom_position) {
                        $element.addClass('in-view');
                    } else {
                        $element.removeClass('in-view');
                    }
                } else{
                    if (element_top_position <= window_bottom_position) {
                        $element.addClass('in-view');
                    } else {
                        $element.removeClass('in-view');
                    }
                }
            });
        }

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
        
        
        if ($('.session-slider-item-wrap').length) {
            $('.session-slider-item-wrap').slick({
                arrows:true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 4000,
                speed: 1500,
                navigation:false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true,
                centerMode: false,
                focusOnSelect: true,
                fade: true,
                
            })
        }

        $('.owl-carousel').on('initialized.owl.carousel changed.owl.carousel', function(e) {
            if (!e.namespace)  {
                return;
            }
            var carousel = e.relatedTarget;
            $('.slider-counter').text(carousel.relative(carousel.current()) + 1 +  ' of '  + carousel.items().length);
        }).owlCarousel({
            items: 3,
            loop:true,
            margin:0,
            nav:true,
            responsive : {
                0 : {
                    items: 1,
                    slideBy: 1,
                    stagePadding: 30,
                    center:true,
                },
                768 : {
                    items: 2,
                    slideBy: 1,
                },
                992 : {
                    items: 3,
                    slideBy: 1,
                },
            }
        });

        
        
        
        //go to second section
        $(function () {
            $('.down-icon a[href*="#"]:not([href="#"])').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
        });

        // blog

        //blog code.

         if ($('.blog-hero-inner').length) {
            $('.blog-hero-inner').slick({
                arrows:false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 4000,
                navigation:false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true,
                centerMode: false,
                focusOnSelect: true,
                fade: false,
                responsive: [
                    {
                      breakpoint: 769,
                      settings: {
                        touchThreshold: 6000,
                      }
                }]
            })
        }

        $(".breadcrumb-blog-wrap .common-wrap > ul > li").find(".breadcrumb-blog-nav").parent("li").addClass("has-sub-dropdown")

        $('.breadcrumb-blog-nav ul li').each(function () {
            var $$_this = $(this);
            $$_this.click(function (e) {
               
                var $_this = $(this)
                if ($$_this.find('> .blog-active')) {
                    $('.breadcrumb-blog-nav ul li a').removeClass('blog-active')
                    $$_this.find('> a').addClass('dropdown-active');
                } else {
                    $('.breadcrumb-dropdown-nav ul li a').removeClass('blog-active')
                    $$_this.find('> a').addClass('blog-active')
                }
            })
        })
        
        $(".breadcrumb-blog-wrap ul li a").click(function (e) {
            $val2 = $('.breadcrumb-blog-wrap .common-wrap > ul > li.has-sub-dropdown > em');
            var $_this = $(this)
            $val = $_this.text();

            $val2.find('a').remove()
            $($val2).append('<a href="javascript:void(0)">' + $val + '</a>');
            window.location.href=$(this).attr('href');
        });

        $('.breadcrumb-blog-wrap .common-wrap > ul > li.has-sub-dropdown').find('> em a').click(function (e) {
            e.preventDefault();
        })
        $('.breadcrumb-blog-wrap .common-wrap > ul > li.has-sub-dropdown').find('> em').click(function (e) {

            var $_This = $(this)
            $_This.parents('.has-sub-dropdown').find('.breadcrumb-blog-nav').fadeIn();
        })

        $('.breadcrumb-blog-wrap ul li a').click(function (e) {
            $(this).parents('.breadcrumb-blog-nav').fadeOut();
        })





        if ($('.achieve-item-wrap').length) {
            $('.achieve-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 2,
                arrows:true,
                dots: true,
                responsive: [
                    {
                     breakpoint: 999999,
                     settings: 'unslick'
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows:true,
                            dots: true,
                        }
                    },
                ]
            })
        
            $(window).on('resize', function () {
                $('.achieve-item-wrap').slick('resize');
                });
        }

        $(".question-content-info").each(function(){
            var $this = $(this);
            $this.find(" > h5").on("click touch", function(){
                $(".question-content-info").removeClass("accordion-active")
                $(".question-content-text").slideUp();
                if($this.find(".question-content-text:visible").length){
                    $(".question-content-info").removeClass("accordion-active")
                    $(".question-content-text").slideUp();
                }
                else{
                    $this.addClass("accordion-active")
                    $(".question-content-text").slideUp();
                    $this.find(" > .question-content-text").slideDown();
                }
            })
        })

        if ($('.treatments').length){
            $('body').addClass('treatments-page');
        } 
   
        
       
        $(window).scroll(function () {
            var scrollDistance = $(window).scrollTop();
            $('.page-section').each(function (i) {
                if ($(this).position().top <= scrollDistance) {
                    $('.breadcrumb-nav ul li a.active').removeClass('active');
                    $('.breadcrumb-nav ul li a').eq(i).addClass('active');
                }
            });
        }).scroll();
        $(function () {
            $('.breadcrumb-nav a[href*="#"]:not([href="#"])').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html, body').animate({
                            scrollTop: target.offset().top + 10
                        }, 1000);
                        return false;
                    }
                }
            });
        });
        

        // Contact Page
        $(' .expert-item-wrap').slick({
            slidesToShow: 2,
            slidesToScroll: 2,
             arrows: true,
             dots: false,
             autoplay: false,
             responsive: [
                 {
                     breakpoint: 769,
                     settings: {
                         arrows: true,
                         dots: true,
                         slidesToShow: 1,
                         slidesToScroll: 1
                     }
                 },
                 {
                     breakpoint: 480,
                     settings: {
                         arrows: true,
                         dots: true,
                         slidesToShow: 1,
                         slidesToScroll: 1
                     }
                 }
             ]
         });

        
        

        
        
	})// End ready function.
    
   

    
    $(".breadcrumb-dropdown-wrap .common-wrap > ul > li").find(".breadcrumb-dropdown-nav").parent("li").addClass("has-sub-dropdown")

    $('.breadcrumb-dropdown-nav ul li').each(function () {
        var $$_this = $(this);
        $$_this.click(function (e) {
            e.preventDefault();
            var $_this = $(this)
            if ($$_this.find('> .dropdown-active')) {
                $('.breadcrumb-dropdown-nav ul li a').removeClass('dropdown-active')
                $$_this.find('> a').addClass('dropdown-active');
            } else {
                $('.breadcrumb-dropdown-nav ul li a').removeClass('dropdown-active')
                $$_this.find('> a').addClass('dropdown-active')
            }
        })
    })

    if ($(window).width() > 767){
        $(".breadcrumb-dropdown-nav ul li a").click(function (e) {
            e.preventDefault();
            $val2 = $('.breadcrumb-dropdown-wrap .common-wrap > ul > li.has-sub-dropdown > em');
            var $_this = $(this)
            $val = $_this.text();

            $val2.find('a').remove()
            $($val2).append('<a href="javascript:void(0)">' + $val + '</a>');
        });

        $('.breadcrumb-dropdown-wrap .common-wrap > ul > li.has-sub-dropdown').find('> em a').click(function (e) {
            e.preventDefault();
        })
        $('.breadcrumb-dropdown-wrap .common-wrap > ul > li.has-sub-dropdown').find('> em').click(function (e) {

            var $_This = $(this)
            $_This.parents('.has-sub-dropdown').find('.breadcrumb-dropdown-nav').fadeIn();
        })

        $('.breadcrumb-dropdown-nav ul li a').click(function (e) {
            e.preventDefault();
            $(this).parents('.breadcrumb-dropdown-nav').fadeOut();
        })
    }
    if ($(window).width() < 768){

        $(".breadcrumb-dropdown-nav ul li a").click(function (e) {
            e.preventDefault();
            $val2 = $('.select-dropdown-trigger em');
            var $_this = $(this)
            $val = $_this.text();

            $val2.find('a').remove()
            $($val2).append('<a href="javascript:void(0)">' + $val + '</a>');
            
            $('.select-dropdown-trigger').removeClass('select-active')
        });

        $('.select-dropdown-trigger').find('> em a').click(function (e) {
            e.preventDefault();
        })
        $('.select-dropdown-trigger').find('> em').click(function (e) {

            var $_This = $(this)
            $_This.parents('.select-dropdown-inner').find('.breadcrumb-dropdown-nav').slideDown();
            $('.select-dropdown-trigger').addClass('select-active')
        })

        $('.breadcrumb-dropdown-nav ul li a').click(function (e) {
            e.preventDefault();
            $(this).parents('.breadcrumb-dropdown-nav').slideUp();
        })
    }

    
})(jQuery)

