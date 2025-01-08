console.log('Content script loaded');

// Example of messaging to background script
chrome.runtime.sendMessage({ type: 'contentScriptLoaded' }, response => {
    console.log('Response from background:', response);
});