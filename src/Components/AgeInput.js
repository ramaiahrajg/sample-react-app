import React , {Component} from 'react';

class AgeInput extends Component {

    constructor() {
        super();
    }

    changeInputValue = e => {this.props.onInputChange('age', e)}

    render() {
        return(
            <div>
           Age :<input type="text" type='number' name="ageBox" value={this.props.age} onChange={this.changeInputValue}/>
            
         </div>
        );
    }
}

export default AgeInput;