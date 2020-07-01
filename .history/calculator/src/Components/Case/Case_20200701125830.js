import { Component }from 'react';
import '../../Styles/Case.scss';
import Buttons from '../Buttons/Buttons';

class Case extends Component {
    render() {
        return(
            <>
                <div className="case">
                    <Buttons />
                </div>
            </>
        )
    }
}

export default Case;