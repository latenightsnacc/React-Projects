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
            result: eval(this.state.result)
        })
    }

    onClick = button => {
        if(button === 'C'){
            this.reset();
        } else if (button === 'CE'){
            this.backspace();
        } else {
            this.setState( {
                result: this.state.result + button
            })
            
        }
    }
    render() {
        return(
            <>
                <div className="Calculator">
                    <Input result={this.state.result} />
                    <Buttons onClick={this.onClick} />
                </div>
            </>
        )
    }
}

export default Calculator;