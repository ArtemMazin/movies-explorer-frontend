import React, { useEffect } from 'react';
import './Notification.css';

const Notification = ({ notificationIsOpen, setNotificationIsOpen, errorMessage }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotificationIsOpen(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [notificationIsOpen]);

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
