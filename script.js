const verifyBtn=document.getElementById("verifyBtn");
const codeInput=document.getElementById("codeInput");
const loginBox=document.getElementById("loginBox");
const viewer=document.getElementById("viewer");
const loopImage=document.getElementById("loopImage");
const error=document.getElementById("error");
const images=["wle.png","wle2.png"];
let index=0;
function startLoop(){
  loopImage.src=images[0];
  setInterval(()=>{index=(index+1)%images.length;loopImage.src=images[index];},500);
}
verifyBtn.addEventListener("click",()=>{
  if(codeInput.value==="3204"){
    loginBox.style.display="none";
    viewer.classList.remove("hidden");
    viewer.style.display="flex";
    startLoop();
  }else error.textContent="Kode salah!";
});
codeInput.addEventListener("keydown",e=>{if(e.key==="Enter")verifyBtn.click();});