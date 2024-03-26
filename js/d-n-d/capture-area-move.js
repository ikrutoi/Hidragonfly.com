import { keepCirclesInCorners } from "./keep-circles-in-corners.js";

export function captureAreaMove(ev) {
        const areaCut = document.querySelector('.new-area');
        const widthArea = areaCut.getBoundingClientRect().width;
        const heightArea = areaCut.getBoundingClientRect().height;
        // console.log(areaCut.getBoundingClientRect().width);
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
            keepCirclesInCorners(myX, myY, widthArea, heightArea);
        }
        
        function myUp() {
            areaCut.removeEventListener('pointermove', myMove);
            areaCut.onpointerdown = null;
            areaCut.onpointermove = null;
        }
        
        areaCut.addEventListener('pointerup', myUp);
    };