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
    
    $('.form-callback').on('submit', function() {
        var name = $('form.form-callback input.name').val();
        var email = $('form.form-callback input.email').val();
        var subject = $('form.form-callback input.subject').val();
        var content = $('form.form-callback textarea').val();
        var control = true;
        
        if (name == '') {
            $('form.form-callback input.name').css('border-bottom', '2px solid #f00');
            control = false;
        }
        if (email == '' || !email.match(/@/)) {
            $('form.form-callback input.email').css('border-bottom', '2px solid #f00');
            control = false; 
        }
        if (subject == '') {
            $('form.form-callback input.subject').css('border-bottom', '2px solid #f00');
            $('form.form-callback li label').innerHTML += "Lox"; 
            control = false;
        }
        if (content == '') {
            $('form.form-callback textarea').css('border-bottom', '2px solid #f00');
            control = false;
        }
        
        setTimeout(function() {
            $('form.form-callback input.name, form.form-callback input.email,form.form-callback input.subject,form.form-callback textarea' ).css('border-bottom', '1px solid #777');
        }, 2500);
        
        if(control) {
            var formData = new FormData(document.forms.callback);
            
            var xhr = new XMLHttpRequest();

            // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
            xhr.open('POST', 'mail.php', false);

            // 3. Отсылаем запрос
            xhr.send(formData);
            
            var text = document.getElementById("textPopup");
            // 4. Если код ответа сервера не 200, то это ошибка
            if (xhr.status != 200) {
              // обработать ошибку
              alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
            } else {
                if(xhr.responseText == 1 || xhr.responseText) {
                    text.innerHTML = "Сообщение отправлено";
                    $("div.background-popup").show();
                    
                } else {
                    text.innerHTML = "Сообщение не отправлено";
                    $("div.background-popup").show();
                }
                
            }
        }
        return false;
    });
});

