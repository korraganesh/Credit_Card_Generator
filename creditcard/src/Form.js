import React, { useState } from 'react';
import Card from './Card';
import "./Form.css";

function Form({updateCardData,onSubmit}) {

  const [cardholdername, setcardholdername] = useState('')
  const[cardnumber,setCardNumber]=useState('')
  const[expdate,setExpDate]=useState('')
  const[dateyy, setDateyy]=useState('')
  const[cvvcode,setCvvCode]=useState('')
  const [error, setError]=useState(false)

  const handleCardholderNameChange =(e)=>{
    const value = e.target.value.replace(/[^A-Za-z\s]/g, '')
    setcardholdername(value)
  }

  const handleCardNumberChange =(e)=>{
    const value = String(e.target.value).replace(/\D/g, '');

    const formattedValue = value.replace(/(\d{4})/g, '$1 ');

  // Limit the card number to a maximum of 19 characters (16 digits + 3 spaces)
  const truncatedValue = formattedValue.slice(0, 19);
    setCardNumber(truncatedValue)
  }

  const handleExpDateChange =(e)=>{
    const value = e.target.value.replace(/\D/g, '')
    setExpDate(value)
  }

  const handleDateyyChange = (e)=>{
    const value = e.target.value.replace(/\D/g, '/')
    setDateyy(value)
  }

  const handleCvvCodeChange = (e)=>{
    const value=e.target.value.replace(/\D/g,'')
    setCvvCode(value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(cardholdername.length==0 || cardnumber.length !==19 || expdate.length==0 || cvvcode.length==0 || dateyy.length==0){
      setError(true);
    }
    else {
      // Prepare the data to send to the parent component (App)
      const cardData = {
        cardholdername,
        cardnumber,
        expdate,
        cvvcode,
        dateyy,
      };
      // Call the callback function to update the card data in the parent component
      updateCardData(cardData);
      onSubmit(cardData);
    }

  }

  return (
  <>
     <div className='formMain'>
      <form onSubmit={handleSubmit}>
        <div className='forminput'>
          <label className='lbl' htmlFor="name">CARDHOLDER NAME</label><br />
          <input type='text' placeholder='e.g. Jane Appleseed'  onChange={handleCardholderNameChange}/><br/>
        </div>
        {error&&cardholdername.length<=0?
        <label className='validation'>cardholder name required.</label>:""}

        <div>
          
          <label className='lbl2' htmlFor='num'>CARD NUMBER</label><br />
          <input type='text' id="card-number" placeholder='e.g. 1234 5678 9123 0000' maxLength="19" 
          value={cardnumber}
          onChange={handleCardNumberChange}/>
        </div>
        {error && cardnumber.length!==19?
        <label className='validation' id='validation1'>card number required.</label>:""}
        
        
          <div id='dateCvv'>
            <div className='datecvv2'>
              <label className='lblDate' htmlFor='num'>EXP.DATE (MM/YY)</label><br />
              <input className='inp' type='text' id="card-number" placeholder='MM' maxLength="2" onChange={handleExpDateChange}/>
              <input className='inp' type='text' id="card-number" placeholder='YY' maxLength="2" onChange={handleDateyyChange}/>
            </div>
            <div className='datecvv22'>
              <label>CVV</label><br />
              <input className='inp2' type='text' id="card-number" placeholder='e.g. 123' maxLength="3"  onChange={handleCvvCodeChange}/>
            </div>
            
          </div>
          {error && expdate.length<=0?
            <label className='validation' id='validation2'>MM required.</label>:""}<br/>
            {error && dateyy.length<=0?
            <label className='validation'  id='validation3'>YY required.</label>:""}<br/>

            {error && cvvcode.length<=0?
            <label className='validation' id='validation4'>CVV required.</label>:""}<br/>


          <button id='btn'>Confirm</button>
      </form>
    </div>
  
  
  
  
  </>
   
  )
}

export default Form;

