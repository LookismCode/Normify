var ExtensionOn = false;
function click(e)
{
    if(ExtensionOn)
    {
        chrome.storage.sync.set({on: false});
        alert("Normify switched off.")
    }
    else if(!ExtensionOn)
    {
        alert("Normify switched on.")
        chrome.storage.sync.set({on: true});

    }
    ExtensionOn = !ExtensionOn;
}

chrome.browserAction.onClicked.addListener(click);
