 let button=document.querySelector(".addbtn");
 let i=0;
 let task1=document.querySelector(".task1");
 let tasks=document.querySelector(".tasks")
 let texts=[];
 let pElements=[];
 button.addEventListener("click",function(){
    if (i<5){
    let inputText=document.querySelector("input");
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
    let remove=document.querySelectorAll(".remove")
    remove.forEach(element=> element.addEventListener("click",function(e){
        let removeImage=e.target;
        let mustRemove=removeImage.parentElement;
        mustRemove.remove();
    }) )
    inputText.value="";
    i=i+1;
    if (i==5){
        task1.style.display="none";
    }else{
        task1.style.display="flex"
    }
    
    }
})
const upSort=document.querySelector(".sort-icon svg:firstChild")
const downSort=document.querySelector(".sort-icon svg:lastChild")

downSort.addEventListener("click",function(){
    this.style.display="none";
    upSort.style.display = "inline";
    const taskp=[...document.querySelectorAll(".task")];
    taskp.sort((a,b)=>{
      return  parseInt(b.innerText) - parseInt(a.innerText);
    })
    tasks.replaceChildren(...tasks.children, ...taskp)
})

upSort.addEventListener("click",function(){
    this.style.display="none";
    downSort.style.display = "inline";
    const taskp=[...document.querySelectorAll(".task")];
    taskp.sort((a,b)=>{
      return  parseInt(a.innerText) - parseInt(b.innerText);
    })
    tasks.replaceChildren(...tasks.children, ...taskp)
})