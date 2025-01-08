/* eslint-disable no-undef */

// @ts-ignore
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

// Listen for messages from content scripts or popup

// @ts-ignore
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Message received:', request);
  // Handle messages here
  sendResponse({ status: 'received' });
});
