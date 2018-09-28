import React,{Component} from 'react';

class NameInput extends Component {

    constructor() {
        super();
        this.state = {
            nameInputValue : ''
        }
    }

    changeInputValue = e => {
        
        this.setState({
            nameInputValue : e.target.value
         }
        );
    }

    
    render() {
        const onButtonClick = () => {
            this.props.updateName(this.state.nameInputValue);
        }
        return(
            <div>
                <input type="text" name="TextBox" value={this.state.nameInputValue} onChange={this.changeInputValue}/>
                <input type="button" name="Submit" value="Submit" onClick={onButtonClick} />
            </div>
        );
    }
}

export default NameInput;