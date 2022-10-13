$(function(){
    let pairs = [];
    let nCard = 12;
    let moveCount = 0;	
    let startTime = 0;
    let actTime = 0;
    let finishCrono=false;
        // document.getElementById("btnStart").remove();
    startGame = (n) => {
        // document.getElementById("btnStart").remove();
        $(".start_container").css("top","-1000vh");

        nCard = n;
        iniStats();
        iniTable(n);
    }
    iniStats = () =>{
        start  = new Date();
        moveCount=0;
        finishCrono=false
        setChrono();
        setMoves();
    }
    setChrono = () =>{
        actTime = new Date();
        let diff = actTime - start;
        diff = new Date(diff);
        let ms = diff.getMilliseconds();
        let mn = diff.getMinutes();
        let sc = diff.getSeconds();
        let hr = diff.getHours() - 1 ;

        ms = ms < 10 ? '0' + ms : ms;
        sc = sc < 10 ? '0' + sc : sc;
        mn = mn < 10 ? '0' + mn : mn;
        hr = hr < 10 ? '0' + hr : hr;
        let content = `<p>Your time: ${hr} : ${mn} : ${sc} : ${ms}</p>`;
        $('#chrono').html(content);
        if(!finishCrono)setTimeout(setChrono,10);
    }   
    setMoves = () => {
        let content = `<p>Your move nº:  ${moveCount}</p>`;
        $('#moves').html(content);
    } 
    function endGame() {
        let finished = true;
        for (let i = 0; i < nCard; i++) {
            let card = $(`#card${i}`);
            console.log(card);
            if (!card.hasClass("correct")){
                finished = false;
                break;
            }
        }
        console.log("finished:", finished);
        if (finished){
            finishCrono=true;
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
                moveCount += 1;
                setMoves();
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
        endGame();
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