import React, { useState } from 'react';
import { reviseMessage } from './reviseMessage';

export default function Form() {
  const [message, setMessage] = useState('');
  const [revisedMessage, setRevisedMessage] = useState('');
  const [instruction, setInstruction] = useState('please make friendlier');

  return (
    <div>
      <h1>Revise Message Test</h1>
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