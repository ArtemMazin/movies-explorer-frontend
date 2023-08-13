import React from 'react';
import './Notification.css';

const Notification = ({ notificationIsOpen, setNotificationIsOpen, errorMessage }) => {
  return (
    <div className={`notification ${notificationIsOpen && 'notification_active'}`}>
      <p className='notification__message'>{errorMessage}</p>
      <button
        type='button'
        className='notification__close-btn'
        onClick={() => setNotificationIsOpen(false)}>
        &#10060;
      </button>
    </div>
  );
};

export default Notification;
