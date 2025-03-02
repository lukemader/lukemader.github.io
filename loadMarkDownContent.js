async function loadMarkdownContent(markdownFile, elementId) {
    try {
        const repo = "https://raw.githubusercontent.com/lukemader/lukemader.github.io/master/";
        const file = repo + markdownFile;
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Failed to load ${file}. Status: ${response.status}`);
        }

        const markdown = await response.text();
        const converter = new showdown.Converter();
        const htmlContent = converter.makeHtml(markdown);
        document.getElementById(elementId).innerHTML = htmlContent;
    } catch (error) {
        console.error('Error loading markdown file:', error);
        document.getElementById(elementId).innerHTML = `Error: ${error.message}`;
    }
}

window.onload = function() {
    loadMarkdownContent("assets/markdown/talks.md", "talks-markdown-content");
    loadMarkdownContent("assets/markdown/education.md", "education-markdown-content");
    loadMarkdownContent("assets/markdown/teaching.md", "teaching-markdown-content");
};
