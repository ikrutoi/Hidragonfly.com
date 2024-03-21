export function dragNDrop() { 
    const circle = document.querySelectorAll('.crop-circle');
    
    circle.forEach((el) => {

        // el.onmouseover = function() {
        //     el.style.backgroundColor = 'red';
        // };

        // el.onmouseout = function() {
        //     el.style.backgroundColor = '#008aed';
        // };
                
        el.ondragstart = function() {
            return false;
        };
        
        el.onmousedown = function(ev) {
            const retreatBlockImgLeft = document.querySelector('.block-new-img').getBoundingClientRect().left;
            const retreatBlockImgTop = document.querySelector('.block-new-img').getBoundingClientRect().top;
            
            moveAt(ev.clientX, ev.clientY);
            
            function moveAt(pageX, pageY) {
                el.style.left = pageX  - retreatBlockImgLeft + 'px';
                el.style.top = pageY - retreatBlockImgTop + 'px';
        } 
        
        function onMouseMove(ev) {
            moveAt(ev.clientX, ev.clientY)
        }
        
        document.addEventListener('mousemove', onMouseMove);
        
        el.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            el.onmouseup = null;
        }
    };
})
};

export function increaseCropCircle() {
    const cropCircleShadow = document.querySelectorAll('.crop-circle-shadow');

    cropCircleShadow.forEach((el) => {
        el.onmouseover = function() {
            el.classList.add('active');
        };
        
        el.onmouseout = function() {
            el.classList.remove('active');
            el.classList.add('deactivation');
            
            function removeDeActivation() {
                el.classList.remove('deactivation');
            }

            setTimeout(removeDeActivation, 330);
        };
    })
}