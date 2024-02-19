import React from 'react';

const Message = ({ variant, children }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'rgb(179, 5, 5)',
        fontSize: '18px',
      }}
      className={`alert ${variant}`}
    >
      {children}
    </div>
  );
};

Message.defaultProps = {
  variant: 'alert-info',
};

export default Message;
