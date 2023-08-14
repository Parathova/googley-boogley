
document.getElementById("help").addEventListener("click", help);

function help(){
    const img = document.createElement('img');
    img.src = chrome.runtime.getURL('uwuduck.png');
    document.body.append(img);
}
/*
function init() {
    imgObj = document.getElementById('uwuduck');
    imgObj.style.position= 'relative'; 
    imgObj.style.left = '0px'; 
 }

/*
function help() {
    console.log("clicked");
    var div = document.createElement("DIV");
    div.id = "someName";
    var img = document.createElement("IMG");
    img.src = chrome.runtime.getURL("uwuduck.png");
    div.appendChild(img);
    document.body.appendChild(div);
  }
  */

  /*
function pickMeUp() {
    document.querySelector(".help").onclick = function() {
        console.log("clicked");
    }
}    */

/*chat gpt
document.getElementById("help").addEventListener("click", help); 

function help () {
    /*chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "showImageOverlay" });
    });*/
        //if (message.action === "showImageOverlay") {
            /*const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            overlay.style.zIndex = "9999";
        
            const image = document.createElement("img");
            image.src = "uwuduck.png"; // Replace with your image URL
            image.style.maxWidth = "80%";
            image.style.maxHeight = "80%";
            image.style.position = "absolute";
            image.style.top = "50%";
            image.style.left = "50%";
            image.style.transform = "translate(-50%, -50%)";
        
            overlay.appendChild(image);
            document.body.appendChild(overlay);
        
            /*Close overlay when clicked
            overlay.addEventListener("click", function () {
              document.body.removeChild(overlay);
            });*/
          //}

  //chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  //})
  
  