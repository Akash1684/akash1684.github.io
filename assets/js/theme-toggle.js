(function() {
  var saved = localStorage.getItem('theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
  // dark is default — no attribute needed

  document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function() {
      var isLight = document.documentElement.getAttribute('data-theme') === 'light';
      var next = isLight ? 'dark' : 'light';
      if (next === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.removeItem('theme');
      } else {
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
      }
    });
  });
})();
