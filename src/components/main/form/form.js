import React, { useState, useEffect } from 'react';
import { reviseMessage } from './reviseMessage';

function Form() {
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

  useEffect(() => {
    console.log("Selected tab: ", instruction);
  }, [instruction]);

  return (
    <div className='form-wrapper'>
      <section className='instructions-section'>
        <p>Choose the tone of your response:</p>
        <div className='instruction-tabs'>
          <button 
            className={selectedTab === "Understanding" ? "selected" : ""}
            onClick={() => handleTabClick("Understanding")}
          >
            Understanding
          </button>
          <button 
            className={selectedTab === "Instructional" ? "selected" : ""}
            onClick={() => handleTabClick("Instructional")}
          >
            Instructional
          </button>
        </div>
        <p>{instruction}</p>
      </section>

      <section className='message-section'>
        <label htmlFor="original-message" className="message-label">Enter your message:</label>
        <textarea
          id='original-message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Enter your message'
          rows={10}
        />

        <button className='revise-message-button' onClick={() => reviseMessage(message, instruction, setRevisedMessage)}>Revise Message</button>

        <label htmlFor="revised-message" className="message-label">Revised message:</label>
        <textarea
          id='revised-message'
          value={revisedMessage}
          placeholder='Revised message will appear here'
          rows={10}
          readOnly
        />
      </section>
    </div>
  );
}

export default Form;