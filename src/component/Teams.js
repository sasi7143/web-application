import React from 'react';
import TeamsBox from './TeamsBox';
import teamsimage from '../images/Teams.png';


const Teams = () => {
  return (
    <div id='teams'>
        <h1 id='demo1'>Teams</h1>
        <div className='a-container'>
        <TeamsBox image={teamsimage} title='Group Meeting' />
        
        </div>
    </div>
  )
}

export default Teams;