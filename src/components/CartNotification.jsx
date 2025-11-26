// CartNotification.jsx
import React, { useEffect } from "react";
import "./CartNotification.css";

export default function CartNotification({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return <div className="cart-notification">{message}</div>;
}

