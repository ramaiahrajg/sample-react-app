import React , {Component} from 'react';

class GenderInput extends Component {

    constructor(props) {
        super(props);
    }

    changeInputValue = e => {this.props.onInputChange('gender', e)}
    
    render() {
        return(
            <div>

             Gender:   <select value={this.props.gender} onChange={this.changeInputValue}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
            </select>
            
            
         </div>
        );
    }
}

export default GenderInput;