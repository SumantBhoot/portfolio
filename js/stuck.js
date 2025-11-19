const stickies = document.querySelectorAll('.my-sticky');

const initialHeights = [];
const isStuck = [];
stickies.forEach((ele, i) => {
    initialHeights[i] = ele.getBoundingClientRect().top;
    isStuck[i] = false;
});

function onScroll() {
    stickies.forEach((ele, i) => {
        if (!isStuck[i] && window.pageYOffset >= initialHeights[i]) {
            ele.classList.add('stuck');
            isStuck[i] = true;
        }
        else if (isStuck[i] && window.pageYOffset < initialHeights[i]) {
            ele.classList.remove('stuck');
            isStuck[i] = false;
        }
    });
}

window.addEventListener('scroll', onScroll);
