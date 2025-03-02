// Function to load and display markdown content
function loadMarkdownContent(markdownFile, elementId) {
    fetch(markdownFile)
        .then(response => response.text())
        .then(markdown => {
            const converter = new showdown.Converter();
            const htmlContent = converter.makeHtml(markdown);
            document.getElementById(elementId).innerHTML = htmlContent;
        })
        .catch(error => console.error('Error loading markdown file:', error));
}

// Load content for the Teaching section
loadMarkdownContent('assets/markdown/teaching.md', 'teaching-markdown-content');

// Load content for the Education section
loadMarkdownContent('assets/markdown/education.md', 'education-markdown-content');

// Load content for the Talks & Seminars section
loadMarkdownContent('assets/markdown/talks.md', 'talks-markdown-content');
