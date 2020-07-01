import React from 'react';
import '../../Styles/Buttons.scss';

class Buttons extends React.Component {
    render() {
        return (
            <>
                <div className="Buttons">
                    <button className="button">1</button>
                    <button className="button">2</button>
                    <button className="button">3</button>
                    <button className="button">/</button>

                    <br/>

                    <button className="button">1</button>
                    <button className="button">2</button>
                    <button className="button">3</button>
                    <button className="button">x</button>

                    <br />

                    <button className="button">1</button>
                    <button className="button">2</button>
                    <button className="button">3</button>
                    <button className="button">-</button>

                    <br />

                    <button className="button">3</button>
                    <button className="button">2</button>
                    <button className="button">1</button>
                    <button className="button">+</button>

                    <br />

                    <button className="button">0</button>
                    <button className="button">()</button>
                    <button className="button">.</button>
                    <button className="button">=</button>

                </div>
            </>
        )
    }
}

export default Buttons;