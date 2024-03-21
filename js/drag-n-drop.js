export function dragNDrop() { 
    const circle = document.querySelectorAll('.crop-circle');
    
    circle.forEach((elem) => {

        elem.onmouseover = function() {
            elem.style.backgroundColor = 'red';

            
        };

        elem.onmouseout = function() {
            elem.style.backgroundColor = '#008aed';
        };
                
        elem.ondragstart = function() {
            return false;
        };
        
        elem.onmousedown = function(event) {
            // console.log('elem:', elem.getBoundingClientRect());
            // console.log('blockImgTop:', document.querySelector('.block-new-img').getBoundingClientRect().top);

            // const heightHeader = document.querySelector('.header').clientHeight;
            // const heightNav = document.querySelector('.nav').clientHeight;
            const retreatBlockImgLeft = document.querySelector('.block-new-img').getBoundingClientRect().left;
            const retreatBlockImgTop = document.querySelector('.block-new-img').getBoundingClientRect().top;

            
            // const shiftX = event.clientX - elem.getBoundingClientRect().left;
            // const shiftY = event.clientY - elem.getBoundingClientRect().top;
            
            moveAt(event.clientX, event.clientY);
            
            function moveAt(pageX, pageY) {
                elem.style.left = pageX  - retreatBlockImgLeft + 'px';
                elem.style.top = pageY - retreatBlockImgTop + 'px';
        } 
        
        function onMouseMove(event) {
            moveAt(event.clientX, event.clientY)
        }
        
        document.addEventListener('mousemove', onMouseMove);
        
        elem.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            elem.onmouseup = null;
        }
    };
})
};



// function addBlockImg(pageX, pageY, height, width) {
//     const fullBlockImg = document.querySelector('.full-block-img');
//     fullBlockImg.setAttribute('style', `left: ${pageX}px; top: ${pageY}px; heingth: ${height}px; width: ${width}px;`);

//     console.log(fullBlockImg.getBoundingClientRect());
// }
