document.addEventListener("DOMContentLoaded", function() {
    const inputText = document.getElementById("inputText");
    const charCount = document.getElementById("charCount");

    inputText.addEventListener("input", function() {
        const text = inputText.value;
        const charLength = text.length;
        charCount.textContent = charLength + " characters";
    });
});
