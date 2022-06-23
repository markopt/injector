let script = "<script src="https://cdn.split.io/sdk/split-browser-0.6.0.full.min.js"></script>";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ script });
  console.log('Injecting Split Browser SDK');
});
