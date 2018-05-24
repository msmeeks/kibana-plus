// Make sure KibanaPlus namespace is defined
if (typeof KibanaPlus == "undefined" || !KibanaPlus) {
  KibanaPlus = {};
}

KibanaPlus.expandStackTrace = function(node, target, replacement) {
  var $node = $(node);
  var html = $node.html();

  html = html.replace(target, replacement);
  $node.html(html);
};

KibanaPlus.expandStackTraces = function() {
  chrome.storage.sync.get({
    stack_trace_line_break_pattern: KibanaPlus.settings.stack_trace_line_break_pattern.default,
    stack_trace_line_break_replacement: KibanaPlus.settings.stack_trace_line_break_replacement.default,
  }, function(items) {
    var pattern = items.stack_trace_line_break_pattern;
    var regex = new RegExp(pattern, "g")

    var replacement = items.stack_trace_line_break_replacement;

    traceCells = $('td:contains("stack trace")');
    traceCells.each(function(i, node) {
      KibanaPlus.expandStackTrace(node, regex, replacement);
    });
  });
};

KibanaPlus.settings = {
    stack_trace_line_break_pattern: {
        description: "Regex pattern to match tack trace line breaks in your logs",
        default: " (#\\d+ )",
    },
    stack_trace_line_break_replacement: {
        description: "Replacement for matched tack trace line breaks from your logs",
        default: ' <br/>$1',
    }
};
