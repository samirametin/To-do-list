 let button=document.querySelector(".addbtn");
 let i=0;
 let task1=document.querySelector(".task1");
 const texts=[];
 button.addEventListener("click",function(){
    if (i<5){
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
    img.classList.add("remove")
    inputText.value="";
    i=i+1;
    if (i==5){
        task1.style.display="none";
    }else{
        task1.style.display="flex"
    }
    texts.push(pFile.innerText)
    
}
})
// let remove=document.querySelector(".remove")
// remove.addEventListener("click",function(e){
//     let removeImage=e.target;
//     let mustRemove=removeImage.parentElement;
//     mustRemove.remove();
// })
console.log(texts.sort((a,b)=>{a>b}))