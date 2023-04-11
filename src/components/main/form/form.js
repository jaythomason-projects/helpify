import React, { useState } from 'react';
import { reviseMessage } from './reviseMessage';

export default function Form() {
  const [message, setMessage] = useState('');
  const [revisedMessage, setRevisedMessage] = useState('');
  const [selectedTab, setSelectedTab] = useState(null);
  const [instruction, setInstruction] = useState("Default");

  const handleTabClick = (clickedTab) => {
    if (selectedTab === clickedTab) {
      setSelectedTab(null);
      setInstruction("Default");
    } else {
      setSelectedTab(clickedTab);
      setInstruction(clickedTab);
    }
  };

  return (
    <div>
      <h1>Revise Message Test</h1>
      <button onClick={() => handleTabClick("Understanding")}>
        Understanding
      </button>
      <button onClick={() => handleTabClick("Instructional")}>
        Instructional
      </button>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Enter your message'
        rows={5}
      />
      <input
        type="text"
        value={instruction}
        onChange={(e) => setInstruction(e.target.value)}
        placeholder="Enter instruction"
      />
      <button onClick={() => reviseMessage(message, instruction, setRevisedMessage)}>
        Revise Message
      </button>
      <p>Revised message:</p>
      <p>{revisedMessage}</p>
    </div>
  );
}