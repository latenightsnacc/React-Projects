import { Component }from 'react';
import '../../Styles/Case.scss';
import Buttons from '../Buttons/Buttons';
import Input from '../Input/Input';

class Case extends Component {
    render() {
        return(
            <>
                <div className="case">
                    <Input />
                    <Buttons />
                </div>
            </>
        )
    }
}

export default Case;