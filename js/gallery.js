function loadImage() {
    let imageArr = ["Apple.jpg", "Banana.jpg", "Orange.jpg", "Strawberry.jpg", "Grapes.jpg", "Kiwi.jpg"];
    console.log("Loading Images...");

    let currImg = document.querySelectorAll(".grid img")
    for (let i = 0; i < currImg.length; i++) {
        randImg = "images/" + imageArr[i];
        // For random images
        // randImg = "images/" + imageArr[Math.floor(Math.random() * imageArr.length)];

        currImg[i].src = randImg;

        currImg[i].setAttribute("tabindex", i + 1);
    }

    console.log("Finished loading images...");
}

function transferImage(currElement) {
    console.log("Update: Transferring Image");
    document.getElementById('display').style.backgroundImage = `url(${currElement.src})`;
    document.getElementById('display').innerHTML = currElement.alt;
}

function resetImage() {
    console.log("Update: Resetting Image");
    document.getElementById('display').style.backgroundImage = "url('')";
    document.getElementById('display').innerHTML = "Hover an image to display it here";
}