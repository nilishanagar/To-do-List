const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value==='')
    {
        alert("You must write something...!!!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);

        // we also add cross icon 
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);  
    }

    inputBox.value="";  
    saveData(); //we need to call save data everytime we add new data
}

//list task pr click krne pr check , uncheck ho jaye and cross pr click krne pr remove ho jaye
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);

//to save data on browser : all the inner html inside listcontainer will be saved in browser with data name
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

//we need to show data whenever we open website
function showTask(){
   listContainer.innerHTML= localStorage.getItem("data");
}

//just call this show function
showTask();