export function newElem(toTag, tag, newClass, newStyle) {

    const newTag = document.createElement(tag);

    if (!!newClass) {
        for (const elem of newClass) {
            newTag.classList.add(elem);
        }
    }

    function addStyle(elem) {
        elem.forEach(function(elem, i, arr) {
            newTag.setAttribute(`${arr[0]}`, `${arr[1]}`);
        })
    }

    if (!!newStyle) {
        newStyle.forEach(el => {
            addStyle(el);
        })
    }
   
    toTag.append(newTag);        
}

export function newElemHTML(toTag, method, newTag) {
    toTag.insertAdjacentHTML(method, newTag);
}