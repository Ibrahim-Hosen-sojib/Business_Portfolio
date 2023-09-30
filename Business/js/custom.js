(function () {
    "use strict";









        /*------ main slider js-----*/
        $('.slider-area-start ').owlCarousel({
            animateOut: 'animate_fadeOutLeft',
            animateIn: 'animate_fadeInRight',
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }

        });




        /*--------about area parallax--------*/
        $('.parallax-window').parallax({
            imageSrc: 'images/about.jpg',
            zIndex: 2,
            iosFix: true,
            androidFix: true
        });


        /*-------breadcrumb parallax-----*/
        $('.breadcrumb-area-start').parallax({
            imageSrc: 'images/about.jpg',
            iosFix: true,
            androidFix: true
        });

        /*--------testimonial area parallax------*/

        $('.testimonial-area-start').parallax({
            imageSrc: 'images/about.jpg',
            iosFix: true,
            androidFix: true
        });


        /*---------testimonial slider---------*/
        $('.testimonial-slider-active').owlCarousel({
            animateOut: 'animate_fadeOutLeft',
            animateIn: 'animate_fadeInRight',
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }

        });


        /*-------------------logo area slider-----------------*/
        $('.logo-area-content').owlCarousel({
            animateOut: 'animate_fadeOutLeft',
            animateIn: 'animate_fadeInRight',
            loop: true,
            margin: 0,
            autoplay: true,
            nav: false,
            dots: false,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 5
                },
                1000: {
                    items: 7
                },
            }

        });




        /*
         *----------(portfolio page js)-----------
         */


        $('.portfolio-button button').click(function () {
            //alert('clicked');
            $('.portfolio-button button').removeClass('active');
            $(this).addClass('active');
        });

        $('.portfolio-button button').click(function () {
            var filterValue = $(this).attr('data-filter');
            $grid1.isotope({
                filter: filterValue
            });
        });

        var $grid1 = $('.portfolio-grid').isotope({
            itemSelector: '.single-portfolio',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.single-portfolio'
            }
        });



        $('.mag-image').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'portfolio-grid',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            }
        });

        /*--------------bottom t0 top js-----------*/
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.bottom-to-top').show();
            } else {
                $('.bottom-to-top').hide();
            }
        });

        $('.bottom-to-top').click(function () {
            $('html, body').animate({
                scrollTop: 0,
            }, 1000);
        });


        /*----------navigation js------------*/

        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.nav-area-start').addClass('fixed');
            }
            if ($(this).scrollTop() <= 49) {
                $('.nav-area-start').removeClass('fixed');
            }
        });







        /*----------practice page js------*/


        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.element-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-sizer'
            }
        });
        // filter items on button click
        $('.filter-button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });


        /*---chart-----*/

        var ctx = document.getElementById('myChart').getContext('2d');
        ctx.canvas.parentNode.style.height = '400px';
        ctx.canvas.parentNode.style.width = '100%';
        var chart = new Chart(ctx, {

            // The type of chart we want to create
            type: 'bar',

            // The data for our dataset
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'October', 'December'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: '#1ABC9C',
                    borderColor: '#ffffff',
                    data: [0, 10, 5, 2, 20, 30, 45, 100, 92, 80]
        }]
            },

            // Configuration options go here
            options: {
                maintainAspectRatio: false
            }
        });





}(jQuery));
