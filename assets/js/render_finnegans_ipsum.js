(function() {
    // Get lines
    let lines = text.split('\n');

    // Remove all empty lines
    lines = lines.filter((line) => !!line);

    let render = function() {
        // Get the number of lines
        let numLines = document.getElementById('num_lines').value || 0;

        // Get random number between 0 and the total number of lines
        let lineNumber = Math.floor(Math.random() * (lines.length));

        // Use a loop to generate the string so that the rendering will loop
        let rendered = '';
        while (numLines > 0) {
            lineNumber = lineNumber >= lines.length ? 0 + numLines : lineNumber;
            
            // Get the new line
            let newLine = lines[lineNumber];
            lineNumber += 1;

            rendered += lines[lineNumber] + '\n\n';
            numLines -= 1;
        }

        // Set the output
        document.getElementById('out').innerText = rendered;
    }

    // Explicitly add this function to the window
    window.render = render;
})();
