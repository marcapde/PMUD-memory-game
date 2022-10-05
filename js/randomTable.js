function iniTable (n){
    a = randomSort(n);
    let content = "";
    let folder = "";
    if (n==12){
        folder = "chess_12";
    }else if(n==16){
        folder = "food_16";
    }
    for(let i=0; i<n; i++){
        content += `<div class="item" onClick="manageClick('card${i}')"><img id="card${i}" class="hidden" src="imgs/${folder}/${a[i]}.svg" alt="${i}" ></div>`;
    }
    document.getElementById("memContainer").innerHTML = content;
}
const randomSort = n => {
    a = new Array(n);
    for (let i=0; i<n;i++) {
        a[i] = "figure" + i%(n/2);
    }
    return a.sort(()=>{return Math.random() - 0.5})
}