import React, { useEffect } from "react";
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaExclamationTriangle, FaTimes } from "react-icons/fa";
import "../styles/Alert.scss";

interface AlertProps {
  show: boolean;
  message: string;
  type: "success" | "error" | "info" | "warning";
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ show, message, type, onClose }) => {
  const alertClass = `alert-${type}`;

  const renderIcon = () => {
    switch (type) {
      case "success":
        return <FaCheckCircle />;
      case "error":
        return <FaExclamationCircle />;
      case "info":
        return <FaInfoCircle />;
      case "warning":
        return <FaExclamationTriangle />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 5000); // Tự động ẩn sau 5 giây
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return show ? (
    <div className={`toast-alert ${alertClass}`} onClick={onClose}>
      <div className="alert-icon">
        {renderIcon()}
      </div>
      <div className="alert-message">{message}</div>
      <div className="alert-close" onClick={onClose}>
        <FaTimes />
      </div>
    </div>
  ) : null;
};

export default Alert;
