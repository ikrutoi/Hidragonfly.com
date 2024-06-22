export function startPressActivation(elem) {
    elem.classList.add('press-active');
    setTimeout(() => {elem.classList.remove('press-active')}, 200);
}

export function addClassHover() {
    this.classList.add('hover');
}

export function delClassHover() {
    this.classList.remove('hover');
}
