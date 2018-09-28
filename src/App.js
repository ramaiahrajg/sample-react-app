import React , {Component} from 'react';
import Name from './Components/Name';
import NameInput from './Components/NameInput';

class App extends Component {

  constructor() {
    super();
   
    this.state = {
      name : "",
     }
  }

  componentDidMount() {
    
  }

  componentDidUpdate() {
   
  }
  updateName = (name) => {
    this.setState({
      name,
    })
  }

  render() {
    return (
        <div>{
          this.state.name ? 
          <Name name={this.state.name}/> : null
        }
        <NameInput updateName={this.updateName} />
         </div>
     
    );
  }
}

export default App;
     