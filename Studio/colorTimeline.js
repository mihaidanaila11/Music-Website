function getRandomColor() {
    red = Math.floor(Math.random() * 255) + 1;
    green = Math.floor(Math.random() * 255) + 1;
    blue = Math.floor(Math.random() * 255) + 1;

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function colorTimeline() {
    elements = document.getElementsByClassName("selected_track");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = getRandomColor();
    }
}

window.onload = colorTimeline();