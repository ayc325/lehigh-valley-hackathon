import React, { useState } from 'react';

function ChatBot () {
    const [messages, setMessages] = useState([]);
    const [response, setResponse] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userMessage = { role: 'user', content: inputValue };

        // Add user's message to the chat
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInputValue('');
        setLoading(true);

        try {
            // Prepare the data for the POST request
            const requestBody = {
                prompt: inputValue,
            };

            // Make the API POST request using fetch, without Authorization header
            const res = await fetch('https://6vtiprdy9b.execute-api.us-west-2.amazonaws.com/full_stack_snacks_api_stage/ask', {
                method: 'POST',
                // headers: {
                //     'Access-Control-Allow-Origin': 'origin',
                // },
                body: JSON.stringify(requestBody),
            });

            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await res.json();
            //const response = JSON.parse(data.response);
            console.log(data);

            setResponse(data);

        } catch (error) {
            console.error('Error fetching completion:', error);
            alert('There was an error fetching the response. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>ChatBot</h1>
            <div className="chat-window">
                {messages.map((message, index) => (
                    <div key={index} className={message.role}>
                        <strong>{message.role === 'user' ? 'You' : 'Assistant'}:</strong> {message.content}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Ask me about mental wellness..."
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Send'}
                </button>
            </form>
        </div>
    );
};

export default ChatBot;
