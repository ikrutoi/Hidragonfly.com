const root = document.getElementById('root');

function myCreateElement(myTeg, myClass, myAttribute) {
    console.log(myClass);
    let elem;
    elem = document.createElement(myTeg);
    if (myClass)
        for (let key of myClass) {
            elem.classList.add(key);
        }
    if (myAttribute)
        for (let key of myAttribute) {
            elem.setAttribute(key[0], key[1]);
        }
    return elem
}

export { root, myCreateElement };