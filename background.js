// // chrome.browserAction.onClicked.addListener(function () {
// chrome.browserAction.onClicked.addListener(
//     () => {
//         console.log('qwe')
//     }
// )

// chrome.tabs.onUpdated.addListener((tabId, tab) => {

//     console.log('index page')
//     // alert('asd')
//     // chrome.tabs.create({ url: chrome.runtime.getURL("index.html") });
// });

// browser.browserAction.onClicked.addListener((tab) => {
//     console.log('rty')
//     // disable the active tab
//     // browser.browserAction.disable(tab.id);
//     // requires the "tabs" or "activeTab" permission, or host permissions for the URL
//     // console.log(tab.url);
// });

// chrome.tabs.onClicked.addListener(
//     console.log('qqqqqqqqq')
// )

chrome.action.onClicked.addListener(
    console.log('qwe')  
)