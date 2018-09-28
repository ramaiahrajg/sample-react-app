import React , {Component} from 'react';

class AddressInput extends Component {

    constructor() {
        super();
    }

    changeInputValue = e => {this.props.onInputChange('address', e)}

    render() {
        return(
            <div>
           Age :<textarea   name="addressBox" value={this.props.address} onChange={this.changeInputValue}/>
            
         </div>
        );
    }
}

export default AddressInput;