const inName=document.getElementById("inName").value;
const inBirth=document.getElementById("inBirth").value;
const inField=document.getElementById("inName").value;
const inYear=document.getElementById("inBirth").value;
const inNum=document.getElementById("inBirth").value;

const preview=document.getElementById("preview");
preview.addEventListener("click",prev);

function prev(){
    const inName=document.getElementById("inName").value;
const inBirth=document.getElementById("inBirth").value;
const inField=document.getElementById("inName").value;
const inYear=document.getElementById("inBirth").value;
const inNum=document.getElementById("inBirth").value;

    const name=document.getElementById("name");
    const birth=document.getElementById("birth");
    const fieldYear=document.getElementById("fieldYear");
    const num=document.getElementById("num");


    name.innerHTML=inName;
    birth.innerHTML=inBirth;
    fieldYear.innerHTML=inField+"0"+inYear;
    num.innerHTML=inNum;


    
const canvas=document.getElementById("ressult");

canvas.height=canvas.width/1.616;
const ctx=canvas.getContext("2d");
ctx.font="20px helvetica";

ctx.fillstyle="#159";
ctx.rect(0,0,300,56);
ctx.fill();

ctx.fillstyle="#fff";
ctx.fillText("Campus Card,10,25");
ctx.font="16px Arial";
ctx.fillstyle("Undergraduate",15,45);
const logo=document.getElementById("logo");
ctx.drawImage(logo,230,3,50,50);
}

function loadImage(event){
    const imgdisplayed=document.getElementById("imageDiaplayed");
    Image.src=URL.createObjectURL(event.target.files[0]);
}

