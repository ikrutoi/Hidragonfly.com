const root = document.getElementById('root');

function myCreateElement(myTeg, myClass) {
    let elem;
    elem = document.createElement(myTeg);
    if (myClass != undefined)
        elem.classList.add(myClass);

    return elem
}

export { root, myCreateElement };