/*const img = document.createElement("img");
img.src = chrome.runtime.getURL('uwuduck.png');
document.body.appendChild(img);*/

var div = document.createElement("DIV");
div.id = "someName";
var img = document.createElement("IMG");
img.src = chrome.runtime.getURL('uwuduck.png');
div.appendChild(img);
document.body.appendChild(div);

