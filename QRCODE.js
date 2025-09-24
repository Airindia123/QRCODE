//here we start code js
let btn=document.querySelector("#btn");
let qrimg=document.querySelector("#qrimg");


let imgbox=document.querySelector("#imgbox");
let inputbox=document.querySelector("#inputbox");
function QRCodeGenerator() {
let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputbox.value;
qrimg.src = url;
imgbox.classList.add("show-image");
}
btn.addEventListener("click",()=>{
    QRCodeGenerator();
})


