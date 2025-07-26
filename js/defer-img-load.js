const imgs = document.querySelectorAll('img.defer-load');
let loadedCount = 0;

function onLoad() {
    imgs.forEach(img => {
        img.classList.add('loaded');
    })
}

imgs.forEach(img => {
    const realSrc = img.dataset.src || img.getAttribute('src');
    img.src = realSrc;

    img.addEventListener('load', () => {
        loadedCount++;
        if (loadedCount === imgs.length) {
            onLoad();
        }
    });

    img.addEventListener('error', () => {
        console.error('Image failed to load:', img.src);
    });
});
