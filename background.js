
// chrome.runtime.onMessage.addListener((msg, sender, response) => {
//     console.log(msg)
//     // if (msg.name === "message") {
//     //     //Send response
//     //     response({ text: "This isaresponse..." });
//     // }
// });
// chrome.tabs.create({ url: './index.html', selected: true, active: true });

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


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {


    if (Object.values(request)[0] == "add") {

        function getMaxId() {

            let idIntArray = []

            let idArray = Object.keys(localStorage)

            for (values in idArray) {
                idIntArray.push(Number(idArray[values]))
            }

            // return Object.values(idIntArray).sort((a, b) => b - a)

            console.log('Math.max(...idIntArray)', Math.max(...idIntArray))
            return Math.max(...idIntArray);



        }

        chrome.tabs.create({
            active: false,
            url: 'https://tharaka4146.github.io/'
        }, function (tab) {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: getMaxId,
            }, function (val) {
                // let temp = JSON.stringify(val)
                console.log('value of max ids', val["0"].result)
                chrome.tabs.remove(tab.id);

                let count = 0

                if (val["0"].result === null) {
                    count = 0
                } else {
                    count = Number(val["0"].result) + 1
                }

                function saveToLocalStorage(arg, count) {
                    return localStorage.setItem(Number(count), arg);
                }

                chrome.tabs.create({
                    active: false,
                    url: 'https://tharaka4146.github.io/'
                }, function (tab) {
                    chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        func: saveToLocalStorage,
                        args: [Object.keys(request)[0], count]
                    }, function () {
                        chrome.tabs.remove(tab.id);
                    });
                });

            });
        });

    } else if (Object.values(request)[0] == "remove") {

        function findKey(value) {
            return Object.keys(localStorage).find(key => localStorage[key] === value)
        }

        chrome.tabs.create({
            active: false,
            url: 'https://tharaka4146.github.io/'
        }, function (tab) {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: findKey,
                args: [Object.keys(request)[0]]
            }, function (val) {
                // let temp = JSON.stringify(val)
                console.log('key--', val["0"].result)
                chrome.tabs.remove(tab.id);

                function removeFromSaved(key) {
                    return localStorage.removeItem(key);
                }

                chrome.tabs.create({
                    active: false,
                    url: 'https://tharaka4146.github.io/'
                }, function (tab) {
                    chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        func: removeFromSaved,
                        args: [val["0"].result]
                    }, function () {
                        chrome.tabs.remove(tab.id);
                    });
                });

            });
        });
    } else if (Object.values(request)[0] == "search") {

        function findKey(value) {
            return Object.keys(localStorage).find(key => localStorage[key] === value)
        }

        chrome.tabs.create({
            active: false,
            url: 'https://tharaka4146.github.io/'
        }, function (tab) {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: findKey,
                args: [Object.keys(request)[0]]
            }, function (val) {
                // let temp = JSON.stringify(val)
                console.log('val--', val)
                console.log('key--', val["0"].result)
                chrome.tabs.remove(tab.id);
            });
        });
        sendResponse("uuu");

    }

    // function saveToLocalStorage(arg) {
    //     return localStorage.setItem(arg, arg);
    // }

    // chrome.tabs.create({
    //     active: false,
    //     url: 'https://tharaka4146.github.io/'
    // }, function (tab) {
    //     chrome.scripting.executeScript({
    //         target: { tabId: tab.id },
    //         func: saveToLocalStorage,
    //         args: [Object.keys(request)[0]]
    //     }, function () {
    //         chrome.tabs.remove(tab.id);
    //     });
    // });
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
