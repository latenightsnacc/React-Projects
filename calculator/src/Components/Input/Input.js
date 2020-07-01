import React from 'react';
import '../../Styles/Input.scss';

class Input extends React.Component {
    
    render() {
        let result = this.props;
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