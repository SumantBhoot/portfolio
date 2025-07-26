document.addEventListener('DOMContentLoaded', () => {
    const sticky = document.querySelector('.my-sticky');
    const sideFooter = document.querySelector('.my-sticky footer');

    let initialHeight = sticky.getBoundingClientRect().top;
    const header = document.querySelector('header');
    console.log(initialHeight);
    setTimeout(() => {
        initialHeight = header.getBoundingClientRect().bottom;
        console.log(initialHeight);
    }, 2500);

    let isStuck = false;
    function onScroll() {
        if (!isStuck && window.pageYOffset >= initialHeight) {
            sticky.classList.add('stuck');
            isStuck = true;

            sideFooter.classList.add('opacity-100');
        }
        else if (isStuck && window.pageYOffset < initialHeight) {
            sticky.classList.remove('stuck');
            isStuck = false;

            sideFooter.classList.remove('opacity-100');
        }
    }
    window.addEventListener('scroll', onScroll);


    const carousels = document.querySelectorAll('#project-gallery .carousel');
    carousels.forEach(carousel => {
        const car = new bootstrap.Carousel(carousel, {
            ride: false,
            interval: 2500,
            pause: false
        });
        car.pause();

        carousel.addEventListener('mouseenter', () => {
            car.cycle();
        });
        carousel.addEventListener('mouseleave', () => {
            car.pause();
        });
        carousel.addEventListener('click', () => {
            car.pause();
        });
    });


    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    const ttBtns = document.querySelectorAll('.click-tooltip-btn');
    const tts = [];
    const ttHidden = [];
    ttBtns.forEach((btn, i) => {
        tts[i] = new bootstrap.Tooltip(btn, {
            trigger: 'manual'
        });
        ttHidden[i] = true;

        btn.addEventListener('click', e => {
            e.preventDefault();

            if (ttHidden[i]) {
                tts[i].show();
                ttHidden[i] = false;

                setTimeout(() => {
                    ttHidden[i] = true;
                    tts[i].hide();
                }, 2300);
            }
        })
    })

    const vid = document.querySelector('.hover-video');
    vid.addEventListener('mouseenter', () => {
        vid.play();
    });
    vid.addEventListener('mouseleave', () => {
        vid.pause();
    });
});
