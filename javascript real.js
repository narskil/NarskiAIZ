document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    if (message) {
        appendMessage('You: ' + message);
        input.value = '';

        // Simulate bot response (Replace this part with your actual backend API call)
        setTimeout(() => {
            appendMessage('NarskiBot: This is a simulated response.');
        }, 1000);
    }
}

function appendMessage(message) {
    const chatWindow = document.getElementById('chat-window');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}
