const noBtn = document.getElementById("noBtn")
const yesBtn = document.getElementById("yesBtn")

noBtn.addEventListener("mouseover", () => {

    const x=Math.random() * (window.innerWidth-250);
    const y=Math.random() * (window.innerHeight-250);
    noBtn.style.left=`${x}px`;
    noBtn.style.top=`${y}px`;
    
    

}
);
yesBtn.addEventListener("click", () => {
    
    message.textContent="LMFAO DAWG I KNEW IT😂😂😂😂" ;
    message.style.background= "rgb(235, 203, 203)";

});