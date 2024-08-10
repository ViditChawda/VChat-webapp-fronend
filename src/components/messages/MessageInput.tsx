import { Send } from 'lucide-react';
import React, { useState } from 'react';

function MessageInput() {
    const [message, setMessage] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault(); // Prevent the form from refreshing the page
        console.log(message);
        setMessage(''); // Clear the input field after submission
    };

    return (
        <div className=' border-t'>
            <form onSubmit={handleSubmit} className="flex flex-row items-center px-4">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message"
                    className="flex-grow p-2 bg-black focus-visible:outline-none py-4"
                />
                <button
                    type="submit"
                    className="px-4 py-4"
                >
                    <Send strokeWidth={1.25} />
                </button>
            </form>
        </div>
    );
}

export default MessageInput;
