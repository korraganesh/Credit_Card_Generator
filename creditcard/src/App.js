import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Card from './Card';

function App() {
  const [cardData, setCardData] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const updateCardData = (data) => {
    setCardData(data);
    setFormSubmitted(true);
  };

  return (
    <div className="grid-container">
      <Card cardData={cardData} formSubmitted={formSubmitted}/>
      <Form updateCardData={updateCardData} onSubmit={updateCardData}/>
    </div>
  );
}

export default App;
