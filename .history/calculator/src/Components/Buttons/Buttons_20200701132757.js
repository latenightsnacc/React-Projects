import React from 'react';
import '../../Styles/Buttons.scss';

class Buttons extends React.Component {
    render() {
        return (
            <>
                <div className="Buttons">
                    <div className="button">0</div>
                    <div className="button">1</div>
                    <div className="button">2</div>
                    <div className="button">3</div>
                    <div className="button">4</div>
                    <div className="button">5</div>
                    <div className="button">6</div>
                </div>
            </>
        )
    }
}

export default Buttons;