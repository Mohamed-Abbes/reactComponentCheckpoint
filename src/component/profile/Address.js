import React from 'react'

function Address() {
  const address = '1234 Elm Street, Suite 567';
  const city = 'San Francisco';
  const state = 'CA';
  const postalCode = '12345';
  const phoneNumber = '555-123-4567';
  return (
    <div className="profile-details-container">
    <h2 className="profile-details-title">Profile Details</h2>
    <p className="profile-details-item">Address: {address}</p>
    <p className="profile-details-item">City: {city}</p>
    <p className="profile-details-item">State: {state}</p>
    <p className="profile-details-item">Postal Code: {postalCode}</p>
    <p className="profile-details-item">Phone Number: {phoneNumber}</p>
  </div>
)}

export default Address