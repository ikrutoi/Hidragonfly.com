export function dragNDrop() { 
    const circle = document.querySelectorAll('.crop-circle');
    const circle1 = document.querySelector('.crop-circle-1');
    const circle2 = document.querySelector('.crop-circle-2');
    const circle3 = document.querySelector('.crop-circle-3');
    const circle4 = document.querySelector('.crop-circle-4');

    circle.forEach((el) => {            
        el.ondragstart = function() {
            return false;
        };
        
        el.onmousedown = function(ev) {
            // console.log(el.getBoundingClientRect());
            const retreatBlockImgLeft = document.querySelector('.new-img').getBoundingClientRect().left;
            const retreatBlockImgTop = document.querySelector('.new-img').getBoundingClientRect().top;
            
            moveAt(ev.clientX, ev.clientY);
            
            function moveAt(pageX, pageY) {
                const elLeft = pageX  - retreatBlockImgLeft - el.getBoundingClientRect().width / 2 + 'px';
                const elTop = pageY - retreatBlockImgTop - el.getBoundingClientRect().height / 2 + 'px';

                el.style.left = elLeft;
                el.style.top = elTop;

                el.className.split(' ').forEach((nameClass) => {
                    if(
                        nameClass == 'crop-circle-1' || 
                        nameClass == 'crop-circle-2' || 
                        nameClass == 'crop-circle-3' || 
                        nameClass == 'crop-circle-4') {
                            recordStyleTopLeft(nameClass);
                        } 
                })
                
                function recordStyleTopLeft(nameClass) {
                    switch (nameClass) {
                        case 'crop-circle-1': 
                        circle2.style.top = elTop;
                        circle4.style.left = elLeft;
                        break;
                        case 'crop-circle-2': 
                        circle1.style.top = elTop;
                        circle3.style.left = elLeft;
                        break;
                        case 'crop-circle-3': 
                        circle4.style.top = elTop;
                        circle2.style.left = elLeft;
                        break;
                        case 'crop-circle-4': 
                        circle3.style.top = elTop;
                        circle1.style.left = elLeft;
                        break;       
                    }
                }
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
    });
};
