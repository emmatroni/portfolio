// FIRST interaction: pressing mouse down
// listening to any mouse down event that may occur
// when it appens I keep track of the exact X position of the mouse
// and we use it as the starting point of the slider
// to store that value we create a new custom value on our track element
// it will update everytime the mouse is down
// we need to store the relative percentage everytime the mouse is released so it doesn't restart from 0 every time

const track = document.getElementById("image-track");

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
    track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
}

// SECOND: mouse move listener
// relative position from starting point + end slider
// we devide the two of them to obtain the percentage of the slider moved
window.onmousemove = e => {
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth /2;

    const percentage = (mouseDelta /maxDelta) * -100,
        nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

    track.dataset.percentage = nextPercentage;
    
    //track.style.transform = `translate(${nextPercentage}%, -50%)`;
    track.animate({
        transform:  `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards"});

    Math.min(nextPercentage, 0);
    Math.max(nextPercentage, -100);

    for(const image of track.getElementsByClassName("image")){
        //image.style.objectPosition = `${nextPercentage + 100}% 50%`;
        image.animate({
            objectPosition: `${nextPercentage + 100}% center`
        }, { duration:1200, fill:"forwards"});
    }
}