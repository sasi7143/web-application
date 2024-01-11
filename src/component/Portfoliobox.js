import React from 'react'

const Portfoliobox = (props) => {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={props.image} alt=''></img>
        </div>
        <div className='about-text'>
            <h2> {props.title} </h2>
            <p>To Get a Better future for higher position.To Get a Better future for higher position.To Get a Better future for higher position.</p>
            <button> {props.button} </button>
        </div>
    </div>
  )
}

export default Portfoliobox;









