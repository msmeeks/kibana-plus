var expandTraceMenuItem = chrome.contextMenus.create({
  "title": "Expand Stack Trace",
  "contexts": ["page"],
  "onclick": function(info, tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {expand_trace_menu_click: {info, tab}});
    });
  }
}, function() {
  if (chrome.extension.lastError) {
    console.log("Got unexpected error: " + chrome.extension.lastError.message);
  }
});
