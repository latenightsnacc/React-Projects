import React from 'react';
import '../../Styles/Calculator.scss';
import Buttons from '../Buttons/Buttons';
import Input from '../Input/Input';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: ""
        }
    } 

    reset = () => {
        this.setState( {
            result: this.state.result
        })
    }

    backspace = () => {
        this.setState( {
            result: this.state.result.slice(0,-1)
        })
    }

    calculate = () => {
        this.setState( {
            result: this.state.result
        })
    }
    render() {
        return(
            <>
                <div className="Calculator">
                    <Input />
                    <Buttons />
                </div>
            </>
        )
    }
}

export default Calculator;