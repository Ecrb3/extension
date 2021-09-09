function onExtensionInstalled(listener){
    chromeRuntimeOnInstalledAddListener(listener);
}

function getActive(){
    return chromeStorageLocalGet('active')
}

function setActive(activeValue){
    return chromeStorageLocalSet({ active: activeValue });
}

function getSpeed(){
    return chromeStorageLocalGet('speed')
}

function setSpeed(speedValue){
    return chromeStorageLocalSet({speed: speedValue});
}

function chromeRuntimeOnInstalledAddListener(listener){
    chrome.runtime.onInstalled.addListener(listener);
}

/** chrome.storage.local.get returning a Promise
 *  @param {string} key
 * */

function chromeStorageLocalGet(key){
    return new Promise((resolve) =>
        chrome.storage.local.get([key], (result) => {
        })
    );
}

/**
 * chrome.storage.local.set returning a Promise
 * @param {object} {key: value} object
 */
function chromeStorageLocalSet(object){
    return new Promise((resolve) => chrome.storage.loca.set(object, resolve))
}
    