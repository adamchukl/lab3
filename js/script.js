let currentImage = 1;
let currentStory = 1;

function showImage() {
    if (currentStory == 1) {
        if (currentImage == 1) {
            document.getElementById("storyImage").src = "images/treat.png";
            document.getElementById("storyText").innerHTML = "A tasty treat was left on the table...";
        } 
        else if (currentImage == 2) {
            document.getElementById("storyImage").src = "images/dog.png";
            document.getElementById("storyText").innerHTML = "A suspicious dog was seen lurking around the house...";
        } 
        else if (currentImage == 3) {
            document.getElementById("storyImage").src = "images/empty.png";
            document.getElementById("storyText").innerHTML = "The treat was gone! Who could have taken it?";
        } 
    }
    else if (currentStory == 2) {
        if (currentImage == 1) {
            document.getElementById("storyImage").src = "images/empty.png";
            document.getElementById("storyText").innerHTML = "An empty plate was waiting...";
        } 
        else if (currentImage == 2) {
            document.getElementById("storyImage").src = "images/dog.png";
            document.getElementById("storyText").innerHTML = "Someone wait patiently for the treat.";
        } 
        else if (currentImage == 3) {
            document.getElementById("storyImage").src = "images/treat.png";
            document.getElementById("storyText").innerHTML = "The treat was finally given to the dog!";
        }
    }
}


function nextImage() {
    if (currentImage < 3) {
        currentImage += 1;
    }
    showImage();
}

function previousImage() {
    if (currentImage > 1) {
        currentImage -= 1;
    }
    showImage();
}

function story1() {
    currentStory = 1;
    currentImage = 1;
    showImage();
}

function story2() {
    currentStory = 2;
    currentImage = 1;
    showImage();
}

document.getElementById("nextButton").addEventListener("click", nextImage);
document.getElementById("previousButton").addEventListener("click", previousImage);

document.getElementById("button1").addEventListener("click", story1);
document.getElementById("button2").addEventListener("click", story2);