import React,{Component} from 'react';

class NameInput extends Component {

    constructor() {
        super();
        this.state = {
            nameInputValue : ''
        }
    }

    changeInputValue = e => {this.props.onInputChange('name', e)}

    
    render() {
       
        return(
            <div>
                Name :<input type="text" name="TextBox" value={this.props.name} onChange={this.changeInputValue}/>
               
            </div>
        );
    }
}

export default NameInput;