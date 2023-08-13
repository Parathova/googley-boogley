chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgetText ({
        text: "OFF",
    });
});