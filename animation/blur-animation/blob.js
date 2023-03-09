// define blob
const blob = document.getElementById("blob");
// make it follow my pointer: give the exact coordinates

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 3000, fill: "forwards" });
}

//var blob = document.getElementById("blob");
//document.addEventListener('mousemove', function (e) {
//    var x = e.clientX;
//    var y = e.clientY;
//    blob.style.left = x + "px";
//    blob.style.top = y + "px";
//});
