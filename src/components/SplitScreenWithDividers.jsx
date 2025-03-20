import React from 'react';

const SplitScreenWithDividers = () => {
  const sections = [
    { label: '3x', size: '1fr', description: 'Faster Release Cycle.' },
    { label: '40%', size: '1fr', description: 'Reduction in manual administration time.' },
    { label: '60%', size: '1fr', description: 'Software Development Reusability.' },
    { label: '40%', size: '1fr', description: 'Cost Optimization.' },
  ];

  return (
    <div style={{ 
      padding: '20px', 
      background: '#6C5FD4', 
      fontFamily: 'Poppins, sans-serif', 
      color: '#fff',
      width: '100vw', 
      boxSizing: 'border-box', 
      overflow: 'hidden',
      marginTop:'100px'
    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: sections.map(section => section.size).join(' '), 
        gap: '0', 
        width: '100%', 
      }}>
        {sections.map((section, index) => (
          <div 
            key={index} 
            style={{ 
              padding: '20px', 
              textAlign: 'center',
              position: 'relative', 
            }}
          >
            <h3 style={{ 
              margin: '0 0 10px', 
              fontSize: '3.2rem', 
              fontWeight: 'bold',
            }}>
              {section.label}
            </h3>
            <p style={{ 
              fontSize: '1.4rem', 
              lineHeight: '1.5', 
            }}>
              {section.description}
            </p>

            {/* Vertical divider, except for the last section */}
            {index !== sections.length - 1 && (
              <div style={{ 
                position: 'absolute', 
                top: '10%', 
                bottom: '10%', 
                right: '0', 
                width: '2px', 
                backgroundColor: '#fff', 
              }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SplitScreenWithDividers;
