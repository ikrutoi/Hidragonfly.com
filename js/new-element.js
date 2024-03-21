export function newElem(toTag, tag, newClass, newStyle) {
    const newTag = document.createElement(tag);

    for (const el of newClass) {
        newTag.classList.add(el);
    }

    if (!!newStyle) {
        newTag.setAttribute('style', `${newStyle}`);
    };
    
    toTag.append(newTag);        
}
