import React from 'react';

const TeamsBox = (props) => {
  return (
    <div>
    <div id='presentaion'>
    <img src={props.image}></img>
    <h2 className='demo3'> {props.title} </h2>
        <p>Provides staffing and recruitment services in addition to 
          architect/define the Cybersecurity requirements (ISO 21434) 
          for AUTOSAR Architecture also.</p>
        
    </div>
    </div>
  )
}

export default TeamsBox;