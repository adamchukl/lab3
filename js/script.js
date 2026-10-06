let currentImage = 1;
let currentStory = 1;

function showImage() {
    if (currentStory == 1) {
        if (currentImage == 1) {
            document.getElementById("storyImage").src = "images/treat.png";
            document.getElementById("storyImage").alt = "A treat on the table";
            document.getElementById("storyText").innerHTML = "A tasty treat was left on the table...";
        } 
        else if (currentImage == 2) {
            document.getElementById("storyImage").src = "images/dog.png";
            document.getElementById("storyImage").alt = "A dog looking at a treat on a plate";
            document.getElementById("storyText").innerHTML = "A suspicious dog was seen lurking around the house...";
        } 
        else if (currentImage == 3) {
            document.getElementById("storyImage").src = "images/empty.png";
            document.getElementById("storyImage").alt = "An empty plate";
            document.getElementById("storyText").innerHTML = "The treat was gone! Who could have taken it?";
        } 
    }
    else if (currentStory == 2) {
        if (currentImage == 1) {
            document.getElementById("storyImage").src = "images/empty.png";
            document.getElementById("storyImage").alt = "An empty plate";
            document.getElementById("storyText").innerHTML = "An empty plate was waiting...";
        } 
        else if (currentImage == 2) {
            document.getElementById("storyImage").src = "images/treat.png";
            document.getElementById("storyImage").alt = "A treat on the plate";
            document.getElementById("storyText").innerHTML = "Someone waited patiently for the treat.";
        } 
        else if (currentImage == 3) {
            document.getElementById("storyImage").src = "images/dog.png";
            document.getElementById("storyImage").alt = "A dog happily looking at a treat";
            document.getElementById("storyText").innerHTML = "The treat was finally given to the dog!";
        }
    }
    updateButtons();

    document.getElementById("imageNumber").innerHTML = currentImage + " / 3";
}

function updateButtons() {
    if (currentImage == 1) {
        document.getElementById("previousButton").disabled = true;
        document.getElementById("nextButton").disabled = false;
    } 
    else if (currentImage == 2) {
        document.getElementById("previousButton").disabled = false;
        document.getElementById("nextButton").disabled = false;
    }
    else if (currentImage == 3) {
        document.getElementById("previousButton").disabled = false;
        document.getElementById("nextButton").disabled = true;
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

    document.getElementById("storyTitle").innerHTML = "The Missing Treat";
    document.getElementById("button1").classList.add("active");
    document.getElementById("button2").classList.remove("active");

    showImage();
}

function story2() {
    currentStory = 2;
    currentImage = 1;

    document.getElementById("storyTitle").innerHTML = "A Treat is Coming";
    document.getElementById("button2").classList.add("active");
    document.getElementById("button1").classList.remove("active");
    showImage();
}

document.getElementById("nextButton").addEventListener("click", nextImage);
document.getElementById("previousButton").addEventListener("click", previousImage);

document.getElementById("button1").addEventListener("click", story1);
document.getElementById("button2").addEventListener("click", story2);

updateButtons();
