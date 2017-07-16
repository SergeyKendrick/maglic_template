$(document).ready(function() {
    
    $('.slider').slick({
        arrows: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1
    });
    
    $('.sliderClients').slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.sliderClients-desc'
    });
    
    $('.sliderClients-desc').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: true,
        asNavFor: '.sliderClients'
    });
    
    $('span.navbar-mini').on('click', function() {
        var control = $('ul.menu').css('display');
        
        if(control == "none") {
            $('ul.menu').css('display', 'block').animate({
                width: 300+'px',
                height: 40+'%',
                opacity: 1
            },1000);
        
            $('ul.menu').animate({
                width: 100 + '%',
                height: 100+'%',
                
            },1500);
            
        } else {
            $('ul.menu').animate({
                width: 300+'px',
                opacity: 1
            },1000);
        
            $('ul.menu').animate({
                width: 0,
                height: 0,
                borderBottomLeftRadius: 80+'%',
                opacity: 0
                
            },1500, function () {
                $('ul.menu').css("display", 'none') 
            });
        }
    });
    
    var show = true;
    var countbox = ".count-members";
    $(window).on("scroll load resize", function(){
 
        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
 
        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
 
        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа
 
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
 
        if(w_top+600 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement").spincrement({
                from: 0,
                thousandSeparator: "",
                duration: 3000
            });
 
            show = false;
        }
    });


    $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false; 
    });

});

