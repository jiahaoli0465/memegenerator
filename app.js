


const url = document.querySelector("#imageUrl");
const topText = document.querySelector("#topText");
const bottomText = document.querySelector("#bottomText")
const formElement = document.querySelector("form");
const memeSection = document.querySelector(".memeSection");


formElement.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const imageUrl = url.value;
    if (!imageUrl){
        return;
    }
    const topTxt = topText.value.trim();
    const bottomTxt = bottomText.value.trim();
    
    console.log(imageUrl);
    console.log(topTxt);
    console.log(bottomTxt);
    makeMeme(imageUrl, topTxt, bottomTxt);
    formElement.reset();
});


function makeMeme (imageUrl, topTxt, bottomTxt){
    const imageSpace = document.createElement("div");
    imageSpace.classList.add("actualMeme");
    imageSpace.classList.add("memeContainer");


    const imgMeme = document.createElement("img");
    imgMeme.src = imageUrl;

    const topMemeText = document.createElement("div");
    topMemeText.classList.add("topText");
    const bottomMemeText = document.createElement("div");
    bottomMemeText.classList.add("bottomText");

    topMemeText.textContent = topTxt;
    bottomMemeText.textContent= bottomTxt;
    
    imageSpace.appendChild(imgMeme);
    imageSpace.appendChild(topMemeText);
    imageSpace.appendChild(bottomMemeText);
    memeSection.appendChild(imageSpace); 

        // Create the overlay
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    // Create the "X" icon
    const closeIcon = document.createElement("div");
    closeIcon.classList.add("closeIcon");
    closeIcon.textContent = "X";
    imageSpace.appendChild(overlay);
    imageSpace.appendChild(closeIcon);

    imgMeme.addEventListener("click", function() {
        imageSpace.remove(); 
    });


}

