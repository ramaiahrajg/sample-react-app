import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Address extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        const {address} = this.props;
        return (
            <h1> { 
                address ?  ` My Address is    ${address}  !` : null
                }</h1>
        );
    }
}

Address.propTypes  = {
    address : PropTypes.string.isRequired,
}

/*const Name = ({name,tittle,initial})=> {
    return (
        <h1> { ` My Name is  ${tittle} ${initial} ${name}  !`}</h1>
    );
}*/

export default Address;