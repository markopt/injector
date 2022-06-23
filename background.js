// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, execute the Split's Browser SDK script
	chrome.tabs.executeScript(tab.ib, {
		file: 'inject.js'
	});
});
