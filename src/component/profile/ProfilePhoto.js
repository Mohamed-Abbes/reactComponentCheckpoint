import React from 'react';
import MyImage from './item1.jpg';
const ProfilePhoto = ({ src, alt }) => {
  return (
    <div className='head'>
         <img src={MyImage} alt={"me"} style={{ borderRadius: '70%', width: '150px', height: '150px' }}/>
    </div>
  );
};

export default ProfilePhoto;