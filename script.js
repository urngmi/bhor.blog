// Minimal Markdown blog system

// Update to always fetch from /content/ directory
function loadMarkdown(path) {
  fetch('/' + path.replace(/^\/?content\//, 'content/'))
    .then(response => response.text())
    .then(text => {
      document.getElementById('md-root').innerHTML = marked.parse(text);
      updateLinks();
    });
}

function updateLinks() {
  document.querySelectorAll('#md-root a[href$=".md"]').forEach(link => {
    link.onclick = function(e) {
      e.preventDefault();
      loadMarkdown(this.getAttribute('href'));
    };
  });
}

// Initial load
loadMarkdown('content/home.md');
