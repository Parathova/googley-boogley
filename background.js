chrome.browserAction.onClicked.addListener(function(activeTab)
{
    chrome.windows.create({ 
        
        url: chrome.runtime.getURL("ACTIVE.html"), 
        type: "popup" ,
        width: 320,
        height: 490

    
    });
});