import React from 'react';

function ProgressBar({ data }) {
  return (
    <div style={{ width: '300px', margin: '10px auto', fontFamily: 'Arial',color: '#800080' }}>
      <div
        style={{
          height: '20px',
          width: '100%',
          backgroundColor: '#ffffff',
          borderRadius: '0px',
          overflow: 'hidden',
          marginBottom: '10px',
          marginLeft: '10px',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${data}%`,
            backgroundColor: '#800080',
          }}
        />
      </div>
      <div style={{ textAlign: 'center' }}>{data}%</div>
    </div>
  );
}

export default ProgressBar;
