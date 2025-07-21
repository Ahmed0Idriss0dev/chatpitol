(function () {
  const scriptTag = document.currentScript;
  const chatbotId = scriptTag.getAttribute('chatbot-id');
  const type = scriptTag.getAttribute('type-service');

 const url = process.env.BASE_URL
  // Create toggle button
 const button = document.createElement('img');
  button.src = `https://chatpitol.vercel.app/icons/Chatbot.svg`; // 🔁 Replace with your icon URL
  button.alt = 'Chat';
  button.style = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    color: white;
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    cursor: pointer;
    z-index: 9999;
  `;

  const iframe = document.createElement('iframe');
  iframe.src = `https://chatpitol.vercel.app/${chatbotId}`;
  iframe.style = `
    position: fixed;
    bottom: 80px;
    right: 20px;
    width: 400px;
    height: 600px;
    border: 1px solid #00000029;

    border-radius: 12px;
    z-index: 9999;
    display: none;
  `;

  // Toggle logic
  let isOpen = false;
  button.addEventListener('click', () => {
    isOpen = !isOpen;
    iframe.style.display = isOpen ? 'block' : 'none';
  });

  // Add to page
  document.body.appendChild(button);
  document.body.appendChild(iframe);
})();
