const baseText = "I'm a "; // Base text to prepend
const texts = ["Example sentence one", "Example sentence two", "Example sentence three"].map(text => baseText + text); // Prepend "I'm a " to each text
let index = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
    // Handle typing or deleting
    if (isDeleting) {
        currentText = texts[index].substring(0, charIndex - 1);
        charIndex--;
    } else {
        currentText = texts[index].substring(0, charIndex + 1);
        charIndex++;
    }

    // Display the current text with base text in a different class
    const typingTextElement = document.getElementById('typingText');
    typingTextElement.innerHTML = `<span class="base-text">${baseText}</span>${currentText.substring(baseText.length)}`;

    // Control the typing animation
    if (!isDeleting && charIndex === texts[index].length) {
        setTimeout(() => { isDeleting = true; }, 2000); // Pause at the end of the text
    } else if (isDeleting && charIndex === baseText.length) {
        isDeleting = false;
        index = (index + 1) % texts.length; // Move to the next text
    }

    const typingSpeed = isDeleting ? 100 : 200; // Speed of typing and deleting
    setTimeout(type, typingSpeed);
}

// Start the typing animation
document.addEventListener('DOMContentLoaded', type);