import React, {useContext} from 'react';
import AlertContext from '../context/alert/alertContext';

function Alert(props) {
    const alertContext = useContext(AlertContext);
    if(alertContext.alert == null){
        return null;
    }
    else {
        return (
            <div className={`alert-${alertContext.alert.type} text-center`}>
                <i className="fa fa-info-circle"></i> {alertContext.alert.msg}
            </div>
        )
    }
}

export default Alert
