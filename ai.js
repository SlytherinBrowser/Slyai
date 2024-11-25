document.addEventListener("DOMContentLoaded", function() {
    // Gumb za odpiranje popupa
    const openPopupBtn = document.createElement('button');
    openPopupBtn.textContent = 'SlyAi';
    openPopupBtn.style.position = 'fixed';
    openPopupBtn.style.bottom = '80px';
    openPopupBtn.style.left = '100px';
    openPopupBtn.style.width = '80px';
    openPopupBtn.style.height = '50px';
    openPopupBtn.style.padding = '15px 30px';
    openPopupBtn.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    openPopupBtn.style.color = '#fff';
    openPopupBtn.style.border = 'none';
    openPopupBtn.style.borderRadius = '30px';
    openPopupBtn.style.cursor = 'pointer';
    openPopupBtn.style.fontSize = '1.2em';
    openPopupBtn.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.1)';
    openPopupBtn.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    
    openPopupBtn.addEventListener('mouseover', function() {
        openPopupBtn.style.transform = 'translateY(-5px)';
        openPopupBtn.style.boxShadow = '0 12px 25px rgba(0, 0, 0, 0.2)';
    });

    openPopupBtn.addEventListener('mouseout', function() {
        openPopupBtn.style.transform = 'translateY(0)';
        openPopupBtn.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.1)';
    });

    document.body.appendChild(openPopupBtn);

    // Popup okno
    const popup = document.createElement('div');
    popup.style.display = 'none';
    popup.style.position = 'fixed';
    popup.style.top = '0';
    popup.style.left = '0';
    popup.style.width = '100%';
    popup.style.height = '100%';
    popup.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    popup.style.justifyContent = 'center';
    popup.style.alignItems = 'center';
    popup.style.animation = 'fadeIn 0.5s forwards';
    document.body.appendChild(popup);

    const popupContent = document.createElement('div');
    popupContent.style.backgroundColor = '#fff';
    popupContent.style.padding = '30px';
    popupContent.style.width = '450px';
    popupContent.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    popupContent.style.borderRadius = '15px';
    popupContent.style.animation = 'slideUp 0.6s ease-out';
    popupContent.style.transformOrigin = 'center bottom';
    popup.appendChild(popupContent);

    // Naslov popupa
    const popupTitle = document.createElement('h1');
    popupTitle.textContent = 'AI Pomočnik';
    popupTitle.style.textAlign = 'center';
    popupTitle.style.color = '#333';
    popupTitle.style.fontSize = '2em';
    popupTitle.style.marginBottom = '20px';
    popupTitle.style.animation = 'textGlow 2s ease-in-out infinite alternate';
    popupContent.appendChild(popupTitle);

    // Polje za chat izpis
    const chatOutput = document.createElement('div');
    chatOutput.style.height = '200px';
    chatOutput.style.overflowY = 'auto';
    chatOutput.style.marginBottom = '15px';
    chatOutput.style.border = '1px solid #ccc';
    chatOutput.style.padding = '15px';
    chatOutput.style.borderRadius = '10px';
    chatOutput.style.backgroundColor = '#f9f9f9';
    chatOutput.style.boxShadow = 'inset 0 2px 5px rgba(0, 0, 0, 0.05)';
    chatOutput.style.transition = 'box-shadow 0.3s ease';
    
    chatOutput.addEventListener('mouseover', function() {
        chatOutput.style.boxShadow = 'inset 0 5px 15px rgba(0, 0, 0, 0.1)';
    });

    chatOutput.addEventListener('mouseout', function() {
        chatOutput.style.boxShadow = 'inset 0 2px 5px rgba(0, 0, 0, 0.05)';
    });
    
    popupContent.appendChild(chatOutput);

    // Polje za vnos vprašanja
    const userInput = document.createElement('input');
    userInput.type = 'text';
    userInput.placeholder = 'Vprašaj AI...';
    userInput.style.width = '100%';
    userInput.style.padding = '15px';
    userInput.style.borderRadius = '10px';
    userInput.style.border = '1px solid #ddd';
    userInput.style.marginBottom = '10px';
    userInput.style.fontSize = '1em';
    userInput.style.transition = 'border-color 0.3s ease';

    userInput.addEventListener('focus', function() {
        userInput.style.borderColor = '#667eea';
    });
    
    popupContent.appendChild(userInput);

    // Gumb za pošiljanje
    const sendBtn = document.createElement('button');
    sendBtn.textContent = 'Pošlji';
    sendBtn.style.width = '100%';
    sendBtn.style.padding = '15px';
    sendBtn.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    sendBtn.style.color = '#fff';
    sendBtn.style.border = 'none';
    sendBtn.style.borderRadius = '10px';
    sendBtn.style.cursor = 'pointer';
    sendBtn.style.fontSize = '1.1em';
    sendBtn.style.transition = 'background 0.3s ease, transform 0.3s ease';

    sendBtn.addEventListener('mouseover', function() {
        sendBtn.style.background = 'linear-gradient(135deg, #764ba2, #667eea)';
        sendBtn.style.transform = 'translateY(-5px)';
    });

    sendBtn.addEventListener('mouseout', function() {
        sendBtn.style.transform = 'translateY(0)';
    });

    popupContent.appendChild(sendBtn);

    // Gumb za zapiranje
    const closePopupBtn = document.createElement('button');
    closePopupBtn.textContent = 'Zapri';
    closePopupBtn.style.width = '100%';
    closePopupBtn.style.padding = '15px';
    closePopupBtn.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    closePopupBtn.style.color = '#fff';
    closePopupBtn.style.border = 'none';
    closePopupBtn.style.borderRadius = '10px';
    closePopupBtn.style.cursor = 'pointer';
    closePopupBtn.style.fontSize = '1.1em';
    closePopupBtn.style.transition = 'background 0.3s ease, transform 0.3s ease';

    closePopupBtn.addEventListener('mouseover', function() {
        closePopupBtn.style.background = 'linear-gradient(135deg, #764ba2, #667eea)';
        closePopupBtn.style.transform = 'translateY(-5px)';
    });

    closePopupBtn.addEventListener('mouseout', function() {
        closePopupBtn.style.transform = 'translateY(0)';
    });

    popupContent.appendChild(closePopupBtn);

    // Odpiranje popupa
    openPopupBtn.addEventListener('click', function() {
        popup.style.display = 'flex';
    });

    // Zapiranje popupa
    closePopupBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Pošiljanje sporočila AI
    sendBtn.addEventListener('click', async function() {
        const userMessage = document.createElement('p');
        userMessage.textContent = "Uporabnik: " + userInput.value;
        chatOutput.appendChild(userMessage);

        import OpenAI from "openai";

const openai = new OpenAI({
    organization: "org-kv4RQSNHDK4C1meUkJoaz765",
    project: "$PROJECT_ID",
});

       const apiKey = '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'; // Zamenjaj s svojim OpenAI API ključem
        const apiUrl = 'https://api.openai.com/v1/chat/completions';

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: userInput.value }],
                max_tokens: 150
            })
        };

        try {
            const response = await fetch(apiUrl, requestOptions);
            const data = await response.json();
            
            const aiMessage = document.createElement('p');
            aiMessage.textContent = "AI: " + data.choices[0].message.content;
            chatOutput.appendChild(aiMessage);

        } catch (error) {
            console.error('Prišlo je do napake:', error);
            const errorMessage = document.createElement('p');
            errorMessage.textContent = "AI: Prišlo je do napake pri pridobivanju odgovora.";
            chatOutput.appendChild(errorMessage);
        }

        // Po čiščenju polja
        userInput.value = '';
    });
});
