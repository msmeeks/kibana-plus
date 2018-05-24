// FIXME: Automatically expand stack traces when the row is expanded
//var expandedNodes = {};
//function nodeInsertedCallback(event) {
//  if(event.relatedNode && event.relatedNode.className == "doc-viewer-value ng-binding" && expandedNodes[event.relatedNode] === undefined) {
//	  expandedNodes[event.relatedNode] = 1;
//	  KibanaPlus.expandStackTrace(event.relatedNode);
//  }
//};
//document.addEventListener('DOMNodeInserted', nodeInsertedCallback);

// Handle Kibana Plus Context Menu: Expand Stae Traces
chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
  if (request.expand_trace_menu_click) {
    KibanaPlus.expandStackTraces();
  }
});
