import React from 'react';
import { useNavigate } from 'react-router-dom';
function Notification(props) {
    const navigate = useNavigate();
    const { message } = props;
    return (
        <div>
            <div className='notification-popup' onClick={()=>navigate("/cart")}>
                {message}
            </div>
        </div>
    );
}

export default Notification;