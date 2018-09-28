import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Name extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        const {name} = this.props;
        return (
            <h1> { ` Hello  ${name}  !`}</h1>
        );
    }
}

Name.propTypes  = {
    name : PropTypes.string.isRequired,
}

/*const Name = ({name,tittle,initial})=> {
    return (
        <h1> { ` My Name is  ${tittle} ${initial} ${name}  !`}</h1>
    );
}*/

export default Name;