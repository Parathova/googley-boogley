chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "showDuck") {
      /*const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      overlay.style.zIndex = "9999";*/
  
      const image = document.createElement("img");
      image.src = chrome.runtime.getURL('uwuduck.png'); // Replace with your image URL
      image.style.maxWidth = "80%";
      image.style.maxHeight = "80%";
      image.style.position = "absolute";
      image.style.top = "50%";
      image.style.left = "50%";
      image.style.transform = "translate(-50%, -50%)";
      
      document.body.appendChild(image);
      //document.body.appendChild(overlay);
    }
})