// eslint-disable-next-line no-undef
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'SCAN_PAGE') {
    // Example: Scan page for todos
    console.log('SCAN_PAGE');
  }
  // Keep the message channel open for async responses
  return true;
});
