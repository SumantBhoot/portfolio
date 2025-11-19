const smallScreen = window.matchMedia('(max-width: 768px), (max-height: 500px)');
const isLandscape = window.matchMedia('(orientation: landscape)');

function initInViewObserver() {
    if (!smallScreen) return;

    const cardboxes = document.querySelectorAll('.cardbox');
    if (!cardboxes.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const e1 = entry.target;
                if (entry.isIntersecting) {
                    e1.classList.add('in-view');
                }
                else {
                    e1.classList.remove('in-view');
                }
            });
        },
        {
            root: null,
            rootMargin: '0px',
            threshold: isLandscape.matches ? 0.4 : 0.7,
        }
    );

    cardboxes.forEach((box) => observer.observe(box));
}

initInViewObserver();

smallScreen.addEventListener('change', (e) => {
    window.location.reload();
});

isLandscape.addEventListener('change', (e) => {
    window.location.reload();
});
