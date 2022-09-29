function iniTable (n){
    a = randomSort(n);
    let content = "";
    for(let i=0; i<n; i++){
        content += `<div class="item" onClick="showImage('card${i}')"><img id="card${i}" class="hidden" src="MEM/chess_12/${a[i]}.svg" alt="${i}" ></div>`;
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