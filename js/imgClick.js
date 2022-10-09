// let counter = 0;
let pairs = [];

function manageClick(imgId){
    if(document.getElementById(imgId).classList.contains("correct") || pairs.length ==2 || imgId == pairs[0]) return;
    pairs.push(imgId);
    if (pairs.length<2){
        showImage(imgId);
    }else if(pairs.length == 2){   
        console.log(checkCorrect());        
        showImage(imgId);
    }
}

function checkCorrect(){
    let img1 = document.getElementById(pairs[0]);
    let img2 = document.getElementById(pairs[1]);
    if (img1.getAttribute("src") == img2.getAttribute("src")){
        console.log(img1.getAttribute("src"));
        img1.classList.add("correct");
        img2.classList.add("correct");
        return true;
    }else return false;
}

function showImage(imgId) {    
    let card = document.getElementById(imgId)
    let keep = card.classList.contains("correct");
    if (card.classList.contains("hidden")){
        
        card.classList.remove("hidden");
        if(pairs.length==2){
            if(!keep){
                setTimeout(hideImage,1000,pairs[0]);
                setTimeout(hideImage,1000,pairs[1]);
            }else{
                pairs.pop();
                pairs.pop();
            }
        }        
    }
    else if(!keep) {
        card.classList.add("hidden");
    }
    endGame(12);
}
function hideImage(imgId) {
    let card = document.getElementById(imgId)
    if (!card.classList.contains("hidden")){
        card.classList.add("hidden");
    }
    pairs.pop();
    pairs.pop();
}
