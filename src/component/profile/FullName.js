import React from 'react';

const FullName = ({ firstName, lastName }) => {
  return (
    <div className='head'>
        <div className='name'>
             <h1 className='subName'>{"Mohamed"}</h1>
             <h1 className='subName' >{"Abbes"}</h1>
        </div>
     
    </div>
  );
};

export default FullName;