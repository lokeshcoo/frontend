'use client'
import React, { useState } from 'react';

const Page = () => {
    const [taskList, setTaskList] = useState([]);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            setMessages([...messages, newMessage]);
            setNewMessage('');
        }
    };

    return (
        <div>
            {/* ...existing code... */}
            <div className='p-8'>
                {
                    taskList.map((task, index) => {
                        return <div key={index} className='shadow mb-5 rounded-lg p-5 bg-slate-200'>
                            <p>{task.text}</p>
                        </div>
                    })
                }
            </div>
            {/* Chat Box */}
            <div className='chat-box p-8'>
                <div className='messages'>
                    {messages.map((message, index) => (
                        <div key={index} className='message bg-slate-200 p-2 mb-2 rounded'>
                            {message}
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSendMessage} className='mt-4'>
                    <input
                        type='text'
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className='border p-2 rounded w-full'
                        placeholder='Type your message...'
                    />
                    <button type='submit' className='mt-2 p-2 bg-blue-500 text-white rounded'>
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Page;