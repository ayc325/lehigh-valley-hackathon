import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css'; // Import the CSS file for styling

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const chatWindowRef = useRef(null); // Create a ref for the chat window

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

            // Make the API POST request using fetch
            const res = await fetch('https://6vtiprdy9b.execute-api.us-west-2.amazonaws.com/full_stack_snacks_api_stage/ask', {
                method: 'POST',
                body: JSON.stringify(requestBody),
                headers: {
                    'Content-Type': 'application/json', // Set content type to JSON
                },
            });

            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`); // Use res instead of response
            }

            const data = await res.json();
            console.log(data.response);

            // Add API response to messages
            const assistantMessage = { role: 'assistant', content: data.response };
            // Use a timeout to simulate a delay in response (optional)
            setTimeout(() => {
                setMessages((prevMessages) => [...prevMessages, assistantMessage]); // Append the assistant's message
            }, 500); // Delay for half a second

        } catch (error) {
            console.error('Error fetching completion:', error);
            alert('There was an error fetching the response. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Scroll to the bottom whenever messages change
    useEffect(() => {
        if (chatWindowRef.current) {
            chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
    }, [messages]); // Run this effect whenever messages change

    return (
        <div className="chatbot-container">
            <h1>ChatBot</h1>
            <div className="chat-window" ref={chatWindowRef}>
                {messages.map((message, index) => (
                    <div key={index} className={`chat-bubble ${message.role}`}>
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
