document.addEventListener('DOMContentLoaded', () => {
    const pointers = document.querySelectorAll('[data-hobby]');
    const targets = document.querySelectorAll('[data-id]');

    let targetMap = {};
    targets.forEach((target) => {
        targetMap[target.dataset.id] = target
    })

    pointers.forEach((ptr) => {
        ptr.addEventListener('click', () => {
            const target = targetMap[ptr.dataset.hobby];
            if (target) {
                target.scrollIntoView({ behaviour: "smooth", block: "start" });
            }
            else {
                console.log(`target: ${ptr.dataset.hobby} not found!`);
            }
        })
    })
});
