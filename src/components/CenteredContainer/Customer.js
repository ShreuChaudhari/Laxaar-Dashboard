import React from 'react';

const CustomerContainer = () => {
  const containerStyle = {
    width: '105px',
    height: '28px',
    position: 'absolute',
    top: '40px', // Adjusted to move 500px towards the top
    left: '290px', // Adjusted to move 200px to the right
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: '28.13px',
    textAlign: 'right',
    background: '#FFFFFF',
    color: '#454F5A', // Text color
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={containerStyle}>
      Customer
    </div>
  );
};

export default CustomerContainer;
