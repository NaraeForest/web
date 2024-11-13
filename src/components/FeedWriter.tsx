import React, { useState } from 'react';

const GoalInput: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendClick = () => {
    if (inputValue.trim() !== '') {
      console.log('Goal Update:', inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="goalInput mt-6 p-4 border-t border-gray-300 flex items-start">
      <button className="mr-4">
        <img src="/photo.svg" alt="Add image" className="w-6 h-6" />
      </button>
      <textarea
        value={inputValue}
        onChange={handleInputChange}
        placeholder="What's happening in your goals"
        className="flex-grow border border-gray-300 p-2 rounded resize-none h-24"
      />
      <button
        onClick={handleSendClick}
        className="ml-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        send
      </button>
    </div>
  );
};

export default GoalInput;