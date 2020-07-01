import { Component }from 'react';
import '../../Styles/Case.scss';
import Buttons from '../Buttons/Buttons';
import Input from '../Input/Input';

class Calculator extends Component {
    render() {
        return(
            <>
                <div className="calculator">
                    <Input />
                    <Buttons />
                </div>
            </>
        )
    }
}

export default Calculator;