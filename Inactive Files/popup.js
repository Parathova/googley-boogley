
document.getElementById("help").addEventListener("click", help);

async function help () {
    //document.getElementById("help").style.backgroundColor= '#D9CFE1';
    
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const response = await chrome.tabs.sendMessage(tab.id, {action: "showDuck"});
    console.log(response);

}

/* infinite ducks
function help(){
    const img = document.createElement('img');
    img.src = chrome.runtime.getURL('uwuduck.png');
    document.body.append(img);
}
*/
/*
function init() {
    imgObj = document.getElementById('uwuduck');
    imgObj.style.position= 'relative'; 
    imgObj.style.left = '0px'; 
 }

function help() {
    console.log("clicked");
    var div = document.createElement("DIV");
    div.id = "someName";
    var img = document.createElement("IMG");
    img.src = chrome.runtime.getURL("uwuduck.png");
    div.appendChild(img);
    document.body.appendChild(div);
  }
  
function pickMeUp() {
    document.querySelector(".help").onclick = function() {
        console.log("clicked");
    }
}    */