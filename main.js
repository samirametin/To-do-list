 let button=document.querySelector(".addbtn");
 let i=0;
 button.addEventListener("click",function(){
    if (i<4){
    let inputText=document.querySelector("input");
    let tasks=document.querySelector(".tasks")
    let div=document.createElement("div");
    tasks.append(div);
    div.classList.add("task");
    let pFile=document.createElement("p");
    pFile.innerText=inputText.value;
    div.append(pFile);
    let img=document.createElement("img");
    div.append(img)
    img.setAttribute("src","/img/Group 77.jpg")
    inputText.value="";
    i=i+1;
}
})
let remove=document.querySelector("imimg")
