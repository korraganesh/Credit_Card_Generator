import React, { useState } from 'react';
import "./Form.css";

function Form() {

  const [cardholdername, setcardholdername] = useState('')
  const[cardnumber,setCardNumber]=useState('')
  const[expdate,setExpDate]=useState('')
  const[dateyy, setDateyy]=useState('')
  const[cvvcode,setCvvCode]=useState('')
  const [error, setError]=useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(cardholdername.length==0 || cardnumber.length==0 || expdate.length==0 || cvvcode.length==0 || dateyy.length==0){
      setError(true);
    }

  }

  return (
    <div className='formMain'>
      <form onSubmit={handleSubmit}>
        <div className='forminput'>
          <label className='lbl' htmlFor="name">CARDHOLDER NAME</label><br />
          <input type='text' placeholder='e.g. Jane Appleseed'  onChange={e=>setcardholdername(e.target.value)}/><br/>
        </div>
        {error&&cardholdername.length<=0?
        <label>Cardholder name can't be Empty</label>:""}

        <div>
          
          <label className='lbl2' htmlFor='num'>CARD NUMBER</label><br />
          <input type='text' id="card-number" placeholder='e.g. 1234 5678 9123 0000' maxLength="16" onChange={e=>setCardNumber(e.target.value)}/>
        </div>
        {error && cardnumber.length<=0?
        <label>Card Number can't be Empty</label>:""}
        
        
          <div id='dateCvv'>
            <div className='datecvv2'>
              <label className='lblDate' htmlFor='num'>EXP.DATE (MM/YY)</label><br />
              <input className='inp' type='text' id="card-number" placeholder='MM' onChange={e=>setExpDate(e.target.value)}/>
              <input className='inp' type='text' id="card-number" placeholder='YY' onChange={e=>setDateyy(e.target.value)}/>
            </div>
            <div className='datecvv22'>
              <label>CVV</label><br />
              <input className='inp2' type='text' id="card-number" placeholder='e.g. 1234'  onChange={e=>setCvvCode(e.target.value)}/>
            </div>
            
          </div>
          {error && expdate.length<=0?
            <label>Exp.Date cant be Empty</label>:""}<br/>
            {error && dateyy.length<=0?
            <label>Year cant be Empty</label>:""}<br/>

            {error && cvvcode.length<=0?
            <label>CVV cant be Empty</label>:""}<br/>


          <button id='btn'>Confirm</button>
      </form>
    </div>
  )
}

export default Form;
