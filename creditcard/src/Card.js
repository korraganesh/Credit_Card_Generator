import React from 'react';
import './Card.css';
import bgdesktop from './Image/bg-main-desktop.png';
import frontcard from './Image/bg-card-front.png';
import backcard from './Image/bg-card-back.png';
import whitecricle from './Image/Ellipse 1.png';
import cricle2 from './Image/Ellipse 2.png'

function Card({ cardData,formSubmitted }) {
  return (
    <>
      <div id='maincard'>
        <section>
          <img src={bgdesktop} className='bg' />
        </section>

        <div id='frontcard'>
          <img src={frontcard} />

          <img className='whitecricle' src={whitecricle}/>
          <img className='cricle2' src={cricle2}/>
          {/* Display cardholder name and card number from props */}
          <div className="card-text">
            
            <h1 className='namedisplay'>{formSubmitted ? `${cardData.cardholdername}`:'JANE APPLESEED'}</h1>
            <h2 className='cardnumberdisplay'>{formSubmitted ? `${cardData.cardnumber}`:'0000 0000 0000 0000'}</h2>
            <h2 className='expdatedisplay'>{formSubmitted ? `${cardData.expdate}/${cardData.dateyy}` : "00/00"}</h2>
            {/* <h2 className='dateyydisplay'>{cardData.dateyy}</h2> */}
          </div>
        </div>
        <div id="backcard">
          <img src={backcard} />
          {/* Display CVV from props */}
          <div className="cvv-text">
            <p className='cvvdisplay'>{formSubmitted ? `${cardData.cvvcode}`:'000'}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
