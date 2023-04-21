import React, { useState, useEffect } from 'react';
import { reviseMessage } from './reviseMessage';

function Form() {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [revisedMessage, setRevisedMessage] = useState('');
  const [selectedTab, setSelectedTab] = useState(null);
  const [instruction, setInstruction] = useState("Default");

  const handleReviseMessage = async () => {
    setIsLoading(true);
    await reviseMessage(message, instruction, setRevisedMessage, setIsLoading);
    setIsLoading(false);
  }
  
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
        Adjust the tone of your response:
        <div className='instruction-tabs'>
          <button 
            className={selectedTab === "Understanding" ? "selected" : ""}
            onClick={() => handleTabClick("Understanding")}
          > More Understanding
          </button>
          <button 
            className={selectedTab === "Instructional" ? "selected" : ""}
            onClick={() => handleTabClick("Instructional")}
          > More Instructional
          </button>
        </div>
      </section>

      <section className='message-section'>
        <div className='original-message space-above space-below'>
          <label htmlFor="original-message" className="message-label">Enter your message:</label>
          <textarea
            id='original-message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Hello Beth, Can you please turn your computer off and then on again? Regards, Steve'
            rows={12}
          />
        </div>

        <button className='revise-message-button' onClick={handleReviseMessage}>Revise Message</button>
        
        <div className='revised-message space-above'>
          <label htmlFor="revised-message" className="message-label">Revised message:</label>
          <div className="textarea-container">
            {isLoading && <div className='loading'>Loading...</div>}
            <textarea
              id='revised-message'
              value={revisedMessage}
              placeholder='Revised message will appear here'
              rows={12}
              readOnly
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Form;