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


chrome.runtime.onMessage.addListener(function (request) {

    function saveToLocalStorage(arg) {
        return localStorage.setItem(arg, arg);
    }

    chrome.tabs.create({
        active: false,
        url: 'https://tharaka4146.github.io/'
    }, function (tab) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: saveToLocalStorage,
            args: [Object.keys(request)[0]]
        }, function () {
            chrome.tabs.remove(tab.id);
        });
    });
});

// chrome.action.onClicked.addListener(
//     console.log('qwe')
// )

// chrome.tabs.create({
//     url: 'shorts.html'
// });

// function saveToLocalStorage() {
//     localStorage.setItem("asd", "wer");
// }

// chrome.tabs.create({
//     active: false,
//     url: 'https://tharaka4146.github.io/'
// }, function (tab) {
//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         func: saveToLocalStorage,
//     }, function () {
//         chrome.tabs.remove(tab.id);
//     });
// });

// console.log('ff')
