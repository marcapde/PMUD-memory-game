$(function(){
    let pairs = [];
        // document.getElementById("btnStart").remove();
    startGame = (n) => {
        // document.getElementById("btnStart").remove();
        document.getElementsByClassName("start_container")[0].style.top="-1000vh";
        iniTable(n);
    }
       
    function endGame(n) {
        let finished = true;
        for (let i = 0; i < n; i++) {
            let card = $(`#card${i}`);
            // console.log(`card${i}`);
            if (!card.hasClass("correct")){
                finished = false;
                break;
            }
        }
        console.log("finished:", finished);
        if (finished){
            $(".start_container").css("top","20%");
        } 
    }

    function randomSort(n) {
        a = new Array(n);
        for (let i=0; i<n;i++) {
            a[i] = "figure" + i%(n/2);
        }
        return a.sort(()=>{return Math.random() - 0.5})
    }
    function iniTable (n){
        a = randomSort(n);
        let content = "";
        let folder = "";
        if (n==12){
            folder = "chess_12";
        }else if(n==16){
            folder = "food_16";
        }else{
            folder = "balls_8";
        }
        for(let i=0; i<n; i++){
            content += `<div class="item" onClick="manageClick('card${i}')"><img id="card${i}" class="hidden" src="imgs/${folder}/${a[i]}.svg" alt="${i}" ></div>`;
        }
        $("#memContainer").html(content);
    }
        
    
    


     manageClick = (imgId) =>{
        if($(`#${imgId}`).hasClass("correct") || pairs.length ==2 || imgId == pairs[0]) return;
        pairs.push(imgId);
        if (pairs.length<2){
            showImage(imgId);
        }else if(pairs.length == 2){   
            console.log(checkCorrect());        
            showImage(imgId);
        }
    }
    
    function checkCorrect(){
        let img1 = $(`#${pairs[0]}`);
        let img2 = $(`#${pairs[1]}`);
        if (img1.attr("src") == img2.attr("src")){
            console.log(img1.attr("src"));
            img1.addClass("correct");
            img2.addClass("correct");
            return true;
        }else return false;
    }
    
    function showImage(imgId) {    
        let card = $(`#${imgId}`)
        let keep = card.hasClass("correct");
        if (card.hasClass("hidden")){            
            card.removeClass("hidden");
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
            card.addClass("hidden");
        }
        endGame(12);
    }
    function hideImage(imgId) {
        let card = $(`#${imgId}`)
        if (!card.hasClass("hidden")){
            card.addClass("hidden");
        }
        pairs.pop();
        pairs.pop();
    }
});