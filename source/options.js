// Saves options to chrome.storage
function save_options() {
  var stack_trace_line_break_pattern = document.getElementById('stack_trace_line_break_pattern').value;
  var stack_trace_line_break_replacement = document.getElementById('stack_trace_line_break_replacement').value;

  chrome.storage.sync.set({
    stack_trace_line_break_pattern: stack_trace_line_break_pattern,
    stack_trace_line_break_replacement: stack_trace_line_break_replacement,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 1000);
  });
}

function set_options(items) {
    document.getElementById('stack_trace_line_break_pattern').value = items.stack_trace_line_break_pattern;
    document.getElementById('stack_trace_line_break_replacement').value = items.stack_trace_line_break_replacement;
}

// Loads options fields  using the preferences stored in chrome.storage.
function load_options() {
  // Use default values from KibanaPlus.settings
  chrome.storage.sync.get({
    stack_trace_line_break_pattern: KibanaPlus.settings.stack_trace_line_break_pattern.default,
    stack_trace_line_break_replacement: KibanaPlus.settings.stack_trace_line_break_replacement.default,
  }, function(items) {
    set_options(items);
  });
}

// Loads options fields using the default values.
function reset_options() {
    var items = {
      stack_trace_line_break_pattern: KibanaPlus.settings.stack_trace_line_break_pattern.default,
      stack_trace_line_break_replacement: KibanaPlus.settings.stack_trace_line_break_replacement.default,
    };
    set_options(items);
}

document.addEventListener('DOMContentLoaded', load_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('reset').addEventListener('click', reset_options);
