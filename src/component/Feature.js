import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/feature_2.png';
import featureimage2 from '../images/feature_3.png';

function Feature() {
  return (
    <div id="service">
      <h1 id='demo'>Services</h1>
        <div className='a-container'>
        <FeatureBox image={featureimage} title='CyberSecurity' />
        <FeatureBox image={featureimage1} title='Mobility' />
        <FeatureBox image={featureimage2} title='Digitial Engineering' />
        </div>
    </div>
  )
}

export default Feature;