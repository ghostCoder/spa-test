var style = document.createElement('style');

// Add some CSS to the style element
style.textContent = `
    body {
        background-color: #f0f0f0;
    }
    h1 {
        color: #333;
    }
`;

// Append the style element to the head of the document
document.head.appendChild(style);
