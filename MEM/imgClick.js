function showImage(imgId) {
    let timeout;
    let card = document.getElementById(imgId)
    if (card.classList.contains("hidden")){
        card.classList.remove("hidden");
        timeout = setTimeout(hideImage,1000,imgId);
    }
    else {
        card.classList.add("hidden");
    }
}
function hideImage(imgId) {
    let card = document.getElementById(imgId)
    if (!card.classList.contains("hidden")){
        card.classList.add("hidden");
    }
}
