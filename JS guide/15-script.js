var start = new Date().getTime();

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

var elShape = document.getElementById("shape");
var elShapeStyle = elShape.style;

function makeShapeAppear() {
    var top = Math.random() * 400;
    var left = Math.random() * 400;
    var width = (Math.random() * 200) + 100;

    if (Math.random() > 0.5) {
        elShapeStyle.borderRadius = "50%";
    } else {
        elShapeStyle.borderRadius = "0";
    }

    elShapeStyle.backgroundColor = getRandomColor();
    elShapeStyle.width = width + "px";
    elShapeStyle.height = width + "px";
    elShapeStyle.top = top + "px";
    elShapeStyle.left = left + "px";
    elShapeStyle.display = "block";

    start = new Date().getTime();
}

function appearAfterDelay() {
    setTimeout(makeShapeAppear, Math.random() * 2000);
}

appearAfterDelay();

elShape.onclick = function () {
    elShapeStyle.display = "none";

    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;

    document.getElementById("timeTaken").innerHTML = timeTaken + "s";

    appearAfterDelay();
}
