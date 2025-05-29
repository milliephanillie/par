function copyToClipboard() {
    // Get the text inside the code div
    var codeText = document.querySelector('.otslr-code').innerText;

    // Create a temporary input element to select the text
    var tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = codeText;  // Set the value to the text to be copied
    tempInput.select();          // Select the text

    // Execute the copy command
    document.execCommand('copy');

    // Remove the temporary input
    document.body.removeChild(tempInput);
}
