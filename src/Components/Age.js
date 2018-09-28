import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Age extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        const {age} = this.props;
        return (
            <h1> { 
                age ?  ` My Age is   ${age}  years !` : null
                }</h1>
        );
    }
}

Age.propTypes  = {
    age : PropTypes.number.isRequired,
}

/*const Name = ({name,tittle,initial})=> {
    return (
        <h1> { ` My Name is  ${tittle} ${initial} ${name}  !`}</h1>
    );
}*/

export default Age;