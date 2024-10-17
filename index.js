 
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl=document.getElementById("save-el");
let countEl=document.getElementById("count-el");

console.log(saveEl);
let count =0;
function increment(){
    count=count+1;
    // countEl.innerText= count;
    countEl.textContent=count;
    console.log( count);
    
}
 
// 1. Create a function, save(), which logs out the count when it's called
function save(){
    let countStr = count + "-";
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText

    // saveEl.innerText+= countStr;  //after see for changes
    saveEl.textContent += countStr;
    // NB: Make sur e to not delete the existing content of the paragraph
    countEl.textContent = 0;
    count=0;


    // console.log(count);
}
 

