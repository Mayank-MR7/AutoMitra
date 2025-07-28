import React from 'react'
import Getfranchaise from './Getfranchaise/Getfranchaise';
import Gethired from './Gethired/Gethired';
import Insuranceclaim from './Insuranceclaim/Insuranceclaim';
import Hiremechanic from './Hiremechanic/Hiremechanic';


const Services = () => {
  return (
    <div>
        <Hiremechanic/>
        <Gethired/>
        <Getfranchaise/>
        <Insuranceclaim/>
    </div>
  )
}

export default Services;