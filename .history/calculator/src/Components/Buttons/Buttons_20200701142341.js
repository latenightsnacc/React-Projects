import React from 'react';
import '../../Styles/Buttons.scss';

class Buttons extends React.Component {
    render() {
        return (
            <>
                <div className="Buttons">
                    <button className="button" name="C" onClick= >C</button>
                    <button className="button" name="CE">CE</button>
                    <button className="button" name="%" title="modulus">%</button>
                    <button className="button" name="/">/</button>

                    <br/>

                    <button className="button" name="9">9</button>
                    <button className="button" name="8">8</button>
                    <button className="button" name="7">7</button>
                    <button className="button" name="x">x</button>

                    <br />

                    <button className="button" name="6">6</button>
                    <button className="button" name="5">5</button>
                    <button className="button" name="4">4</button>
                    <button className="button" name="-">-</button>

                    <br />

                    <button className="button" name="3">3</button>
                    <button className="button" name="2">2</button>
                    <button className="button" name="1">1</button>
                    <button className="button" name="+">+</button>

                    <br />

                    <button className="button" name="0">0</button>
                    <button className="button" name="%" title="percent">%</button>
                    <button className="button" name=".">.</button>
                    <button className="button" name="=">=</button>

                </div>
            </>
        )
    }
}

export default Buttons;