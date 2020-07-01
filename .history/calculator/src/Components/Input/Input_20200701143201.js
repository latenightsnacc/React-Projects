import React from 'react';
import '../../Styles/Input.scss';

class Input extends React.Component {
    let result = this.PaymentResponse;
    render() {
        return (
            <>
                <div className="Input">
                    <div> {result} </div>
                </div>
            </>
        )
    }
}

export default Input;