const socket = io('http://127.0.0.1:3000');
const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');

socket.on('chat-my-message', data => {
    if (data != '') {
        appendMyMessage(data);
    }
});

socket.on('chat-others-message', data => {
    if (data != '') {
        appendOthersMessage(data);
    }
});

messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value;
    socket.emit('send-chat-message', message);
    messageInput.value = '';
});

const appendMyMessage = (data) => {
    const messageElement = document.createElement('div');
    messageElement.className = 'my';
    messageElement.innerText = data;
    messageContainer.append(messageElement);
}

const appendOthersMessage = (data) => {
    const messageElement = document.createElement('div');
    messageElement.className = 'others';
    messageElement.innerText = data;
    messageContainer.append(messageElement);
}