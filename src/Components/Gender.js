import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Gender extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        const {gender} = this.props;
        return (
            <h1> { 
                gender ?  ` I am a   ${gender}   !` : null
                }</h1>
        );
    }
}

Gender.propTypes  = {
    age : PropTypes.string.isRequired,
}

/*const Name = ({name,tittle,initial})=> {
    return (
        <h1> { ` My Name is  ${tittle} ${initial} ${name}  !`}</h1>
    );
}*/

export default Gender;