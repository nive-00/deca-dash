let messagesInitialized = false; 

function openChat() {
  document.getElementById("chat-popup").style.display = "block";
  if (!messagesInitialized) {
    addAutomatedMessages();
    messagesInitialized = true; 
  }
}

function closeChat() {
  document.getElementById("chat-popup").style.display = "none";
}

function addAutomatedMessages() {
  const messages = [
    "Hello! Welcome to Kusing Karinderya.",
    "How can we help you today?"
  ];
  const chatMessages = document.getElementById("chat-messages");

  messages.forEach(message => {
    appendMessage("shop", message);
  });
}

function sendMessage() {
  const chatInput = document.getElementById("chat-input");
  const message = chatInput.value.trim();

  if (message) {
    appendMessage("user", message);

    chatInput.value = "";
    document.getElementById("user-messages").scrollTop = document.getElementById("user-messages").scrollHeight;
  }
}



function appendMessage(type, message) {
    const messagesContainer = type === "shop" ? document.getElementById("chat-messages") : document.getElementById("user-messages");
    const div = document.createElement("div");
    div.textContent = message;
    div.className = type === "shop" ? "shop-message" : "user-message";
    messagesContainer.appendChild(div);

    // Create timestamp element
    const timestamp = document.createElement("div");
    const messageDate = new Date();
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    // Check if message date is today, yesterday, or older
    if (isSameDay(messageDate, today)) {
        timestamp.textContent = `today at ${messageDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })}`;
    } else if (isSameDay(messageDate, yesterday)) {
        timestamp.textContent = `yesterday at ${messageDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })}`;
    } else {
        timestamp.textContent = `${messageDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} at ${messageDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })}`;
    }

    timestamp.className = type === "shop" ? "shop-timestamp" : "user-timestamp";
    messagesContainer.appendChild(timestamp);
}

// Function to check if two dates are the same day
function isSameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
}
