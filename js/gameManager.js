function startGame(n) {
    // document.getElementById("btnStart").remove();
    document.getElementsByClassName("start_container")[0].style.top="-1000vh";
    iniTable(n);
}
function endGame(n) {
    let finished = true;
    for (let i = 0; i < n; i++) {
        let card = document.getElementById(`card${i}`);
        // console.log(`card${i}`);
        if (!card.classList.contains("correct")){
            finished = false;
            break;
        }
    }
    console.log("finished:", finished);
    if (finished){
        document.getElementsByClassName("start_container")[0].style.top="20%";
    } 
}