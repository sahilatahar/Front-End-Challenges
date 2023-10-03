import { useEffect, useRef, useState } from 'react';
import closeIcon from '../assets/icons/close.svg';
import successIcon from '../assets/icons/success.svg';
import infoIcon from '../assets/icons/info.svg';
import warningIcon from '../assets/icons/warning.svg';
import errorIcon from '../assets/icons/error.svg';
import './Toast.css';
import PropTypes from 'prop-types';

const iconMap = {
    success: { icon: successIcon, color: '#22C55E' },
    info: { icon: infoIcon, color: '#3B82F6' },
    warning: { icon: warningIcon, color: '#F97316' },
    error: { icon: errorIcon, color: '#EF4444' },
    default: { icon: infoIcon, color: '#fff' },
};

const Toast = ({ toast }) => {
    const { type, message } = toast;
    const { icon, color } = iconMap[type] || iconMap.default;
    const timer = useRef();
    const DURATION = 5500;
    const [visible, setVisible] = useState(true);

    const closeToast = () => {
        setVisible(false);
        clearTimeout(timer.current);
    }

    useEffect(() => {
        timer.current = setTimeout(() => {
            setVisible(false);
        }, DURATION);
        return () => clearTimeout(timer.current);
    }, []);

    return (
        visible ? <div className="Toast">
            <div className="Toast__icon">
                <img src={icon} alt="icon" />
            </div>
            <p className="Toast__message">
                {message}
            </p>
            <div className="Toast__icon close" onClick={closeToast}>
                <img src={closeIcon} alt="icon" />
            </div>
            <span className="process-bar" style={{ backgroundColor: color }}></span>
        </div> : null
    );
};

Toast.propTypes = {
    toast: PropTypes.object.isRequired
};

export default Toast;
