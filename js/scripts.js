(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';		
		// DOM ready, take it away

		$("#feature-row-thum img").eq(0).show();
        $(".acordian-item h6").each(function (i) {
            $(this).click(function () {
                $(".accordion-content").slideUp()
                $(".acordian-item").removeClass("active")

                if ($(this).parent().find(".accordion-content:visible").length) {
                    $(this).parent().find(".accordion-content").slideUp()
                    $(this).parent().removeClass("active")
                    $("#feature-row-thum img").hide();
                } else {
                    $(this).parent().find(".accordion-content").slideDown()
                    $(this).parent().addClass("active");

                    $("#feature-row-thum img").eq(i).show();

                }


                if ($(this).hasClass("active")) return false

                else {
                    $(".acordian-item h6.active").removeClass("active")
                    $(this).addClass('active')

                    $("#feature-row-thum img").hide();
                    $("#feature-row-thum img").eq(i).show();
                }

            })
        })

        $("#request-demo").click(function (e) {
            e.stopPropagation()
            $(".modal-wrap").fadeIn()
        })

        $("body").click(function () {
            $(".modal-wrap").fadeOut()
        })

        /*$('.main-nav > ul > li').each(function () {
            var navName = $(this).find('> a').text()
            $(this).find('.sub-menu-container').addClass(navName);
        })*/


        $('.main-nav > ul > li').find('.sub-menu-wrap').parent().addClass('hasSubnav');


        if ($('div.article-thumb').length) {
            $(this).find('a.thumb').parent('div.article-thumb').addClass('gotten')
        }

        if ($('div.team-item').length) {
            $(this).find('figure').parent('div.team-item').addClass('Teamget')
        }

        $('div.phone-nav').click(function () {
            $(this).toggleClass('expanded')
            $('.nav-wrap').slideToggle();
        })

        if ($(window).width() < 1025) {
            $('.main-nav > ul > li.hasSubnav > a').click(function (e) {
                e.preventDefault()

                $('.sub-menu-wrap').slideUp()
                $('.main-nav > ul > li.hasSubnav a.active').removeClass("active")

                if ($(this).parent().find(".sub-menu-wrap:visible").length) {
                    $(this).parent().find(".sub-menu-wrap").slideUp()
                    $(this).removeClass("active")
                } else {
                    $(this).parent().find(".sub-menu-wrap").slideDown()
                    $(this).addClass("active");


                }
            })
        }

        $('.main-nav > ul > li.hasSubnav > a').click(function (e) {
            e.preventDefault()
        })

        /*function team() {
            $(".team-item").each(function () {
                var itemFigureHeight = $(this).outerHeight();
                $(this).click(function (e) {
                    console.log(itemFigureHeight)
                    $(this).find('.team-deals').css({
                        'height': itemFigureHeight,

                    })
                    $('.team-deals').fadeOut();
                    $(this).find('.team-deals').fadeIn();

                    $('.team-deals').click(function (e) {
                        e.stopPropagation();
                    })
                })
            })
        }*/
        
        if ($(window).width() > 1279) {
            $(".team-item").each(function () {
                var itemFigureHeight = $(this).outerHeight();
                $(this).click(function (e) {
                    console.log(itemFigureHeight)
                    $(this).find('.team-deals').css({
                        'height': itemFigureHeight,

                    })
                    $('.team-deals').fadeOut();
                    $(this).find('.team-deals').fadeIn();

                    $('.team-deals').click(function (e) {
                        e.stopPropagation();
                    })
                })
            })
        } else {            
            $(window).resize(function () {
                if ($(window).width() > 1279) {    
                    $(".team-item").each(function () {
                        var itemFigureHeight = $(this).outerHeight();
                        $(this).click(function (e) {
                            console.log(itemFigureHeight)
                            $(this).find('.team-deals').css({
                                'height': itemFigureHeight,

                            })
                            $('.team-deals').fadeOut();
                            $(this).find('.team-deals').fadeIn();

                            $('.team-deals').click(function (e) {
                                e.stopPropagation();
                            })
                        })
                    })
                }
            })
        };


        $(".team-item .close-icon").click(function () {
            $(this).parent().fadeOut();


        })

        $.fn.outerHTML = function () {
            var doc = this[0] ? this[0].ownerDocument : document;
            return $('<div>', doc).append(this.eq(0).clone()).html();
        };


        $('.hero-thum').parally({
            speed: 0.07,
            mode: 'transform',
            offset: -1

        });

        /*   $(window).resize(function () {
               if ($(window).width() < 1024) {
                   $('.hero-thum').parally({
                       speed: 0,
                       mode: 'transform',
                       offset: 0

                   });
               } else {
                   $('.hero-thum').parally({
                       speed: 0.07,
                       mode: 'transform',
                       offset: -1

                   });
               }
           })*/

        /*if ($(window).width() > 1024) {
            $('.join-us-thum img').parally({
                speed: 0.05,
                mode: 'transform',
                offset: -50

            });
        }*///!CURRENTLY CONFLICTS WITH LOAD MORE AJAX



        if ($('#comunity-slider').length) {
            $('#comunity-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                asNavFor: '#tab-content',
                dots: true
            });

            $('#tab-content').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: false,
                asNavFor: '#comunity-slider',
                dots: false,
                prevArrow: false,
                nextArrow: false,
                centerMode: false,
                focusOnSelect: true,
                adaptiveHeight: true,
                responsive: [
                    {
                        breakpoint: 769,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '0',
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                },
                    {
                        breakpoint: 767,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '0',
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                },
              ]
            });
        }



        if ($('.counter').length) {
            $('.counter').countUp({
                'time': 2000,
                'delay': 50
            });
        }


        if ($(window).width() < 768) {
            $("#accordion").accordion({ heightStyle: "content" });
            $("#accordion").accordion({ collapsible: true });
            var index = $('#accordion > li').index($('#accordion > li.active'));
            $('#accordion').accordion("option","active", false);
        }
        window.onresize = function() {
            if (window.innerWidth < 768) {
                $("#accordion").accordion({ heightStyle: "content" });
                $("#accordion").accordion({ collapsible: true });
                var index = $('#accordion > li').index($('#accordion > li.active'));
                $('#accordion').accordion("option","active", false);
            }
        }
		
	});//End jQqery ready

	$(window).on("load",function() {

		
	});//End jQuery load
	
})(jQuery, this);
