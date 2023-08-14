
var messages = new Array ("uwuduck.png", "hedge.png", "dog.png", "hang.png", "tennis.png", "redpanda.png", "duck.png", "giraffe.png");
var randomNum = Math.floor(Math.random() * messages.length);


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "showDuck") {
      sendResponse({message: "hi"});
      const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
      const image = document.createElement("img");
      image.src = chrome.runtime.getURL(messages[randomNum]);
      image.style.maxWidth = "80%";
      image.style.maxHeight = "80%";
      image.style.position = "absolute";
      image.style.top = "50%";
      image.style.left = "50%";
      image.style.transform = "translate(-50%, -50%)";
      image.style.zIndex = "2389499";
      
      document.body.appendChild(overlay);
      document.body.appendChild(image);

      overlay.addEventListener("click", function () {
        document.body.removeChild(image);
      });
    }
});