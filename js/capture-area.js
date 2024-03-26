
export function captureAreaMove(ev) {
        const areaCut = document.querySelector('.new-area');
        let shiftX = ev.clientX - areaCut.getBoundingClientRect().left;
        let shiftY = ev.clientY - areaCut.getBoundingClientRect().top;
        
        areaCut.addEventListener('pointermove', myMove);
        
        function myMove(ev) {             
            moveArea(ev.pageX, ev.pageY);
        }
        
        function moveArea(pageX, pageY) {       
            let myX = pageX - shiftX;
            let myY = pageY - shiftY;
            
            areaCut.style.left = myX + 'px';
            areaCut.style.top = myY + 'px';
            
            // console.log(pageX, pageY);
            // keepCirclesInCorners(myX, myY);
        }
        
        function myUp() {
            areaCut.removeEventListener('pointermove', myMove);
            areaCut.onpointerdown = null;
            areaCut.onpointermove = null;
        }
        
        areaCut.addEventListener('pointerup', myUp);
    }
