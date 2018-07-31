$(document).ready(function() {
    // Счетчик
    (function () {
        let countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();
        let $daysBlock = $('#countdown__days'),
            $hoursBlock = $('#countdown__hours'),
            $minsBlock = $('#countdown__mins'),
            $secsBlock = $('#countdown__secs');

        let x = setInterval(() => {
            let now = new Date().getTime();
            let distance = countDownDate - now;

            $daysBlock.text("" + Math.floor(distance / (1000 * 60 * 60 * 24)));
            $hoursBlock.text("" + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            $minsBlock.text("" + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            $secsBlock.text("" + Math.floor((distance % (1000 * 60)) / 1000));

            if (distance < 0) {
                clearInterval(x);
            }
        }, 1000);
    })();
    // Табы
    (function () {
        let tabHeader1 = document.querySelector('.about__tab-switcher-1'),
            tabHeader2 = document.querySelector('.about__tab-switcher-2'),
            tab1 = document.querySelector('.about__tab-1'),
            tab2 = document.querySelector('.about__tab-2');
    
        tabHeader1.addEventListener('click', function () {
            tab1.classList.add('about__tab--active');
            tab2.classList.remove('about__tab--active');
        });
    
        tabHeader2.addEventListener('click', function () {
            tab2.classList.add('about__tab--active');
            tab1.classList.remove('about__tab--active');
        });
    })();
    // Faq
    (function () {
        let $selectHeader = $('.select__header');

        $selectHeader.click(function() {
            $(this).parent().find('.select__list').slideToggle(100);
            $(this).parent().find('[class^="icon-"]').toggleClass('rotate');
        });
    })();
    // Анимация
    (function () {
        new WOW({
            boxClass: 'wow',
            offset: 0,
            mobile: true,
            live: true
        }).init();
    })();
});