import React from 'react'
import Portfoliobox from './Portfoliobox';
import portfolio from '../images/Frame 19.png';
import portfolio1 from '../images/download.png';

const Portfolio = () => {
  return (
    <div id='portfolio'>
       <h1 id='demo1'>Portfolio</h1>
        <div>
            <Portfoliobox image={portfolio} title="platform for the people to search jobs & apply." button="Get The App" />
            <Portfoliobox image={portfolio1} title="Best platform to get study material." button="Free Download" />
        </div>
    </div>
  )
}
export default Portfolio;

