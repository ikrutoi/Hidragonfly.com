export function startPressActivation(elem) {
        elem.classList.add('press-active');

        setTimeout(() => {elem.classList.remove('press-active')}, 200);
    }
