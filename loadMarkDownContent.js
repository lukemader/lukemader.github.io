// // Function to load and display markdown content
// function loadMarkdownContent(markdownFile, elementId) {
//     github_repo = "https://raw.githubusercontent.com/lukemader/lukemader.github.io/master/"
//     file = github.concat(markdownFile)
//     fetch(file)
//         .then(response => response.text())
//         .then(markdown => {
//             const converter = new showdown.Converter();
//             const htmlContent = converter.makeHtml(markdown);
//             document.getElementById(elementId).innerHTML = htmlContent;
//         })
//         .catch(error => console.error('Error loading markdown file:', error));
// }

async function loadMarkdownContent(markdownFile, elementId) {
    try {
        repo = "https://raw.githubusercontent.com/lukemader/lukemader.github.io/master/";
        file = repo.concat(markdownFile);
        const response = await fetch(file);
        const markdown = await response.text();
        const converter = new showdown.Converter();
        const htmlContent = converter.makeHtml(markdown);
        document.getElementById(elementId).innerHTML = htmlContent;
    } catch (error) {
        document.getElementById(elementId).innerHTML = error;
    }
}

// Load content for the Teaching section
loadMarkdownContent('assets/markdown/teaching.md', 'teaching-markdown-content');

// Load content for the Education section
loadMarkdownContent('assets/markdown/education.md', 'education-markdown-content');

// Load content for the Talks & Seminars section
loadMarkdownContent('assets/markdown/talks.md', 'talks-markdown-content');
