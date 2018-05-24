// Make sure KibanaPlus namespace is defined
if (typeof KibanaPlus == "undefined" || !KibanaPlus) {
  KibanaPlus = {};
}

KibanaPlus.expandStackTrace = function(node) {
  var $node = $(node);
  var html = $node.html();
  html = html.replace(/ (#\d+) /g, ' <br/>$1 ');
  $node.html(html);
};

KibanaPlus.expandStackTraces = function() {
  traceCells = $('td:contains("stack trace")');
  traceCells.each(function(i, node) {
    KibanaPlus.expandStackTrace(node);
  });
};
