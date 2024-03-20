const circle = document.querySelectorAll('.crop-circle');

circle.onmousedown = function(event) {
    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        circle.style.left = pageX - circle.offsetWidth / 2 + 'px';
        circle.style.top = pageY - circle.offsetHeight / 2 + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    circle.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
    }
};

circle.ondragstart = function() {
    return false;
};

