import React , {Component} from 'react';
import Name from './Components/Name';
import NameInput from './Components/NameInput';
import Age from './Components/Age';
import AgeInput from './Components/AgeInput';
import Gender from './Components/Gender';
import GenderInput from './Components/GenderInput';
import AddressInput from './Components/AddressInput';
import Address from './Components/Address';

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
 
  onInputChange = (type, event) => {
    const newState = {...this.state};
    newState[type] = event.target.value;
    this.setState(newState);
  }

  render() {
    return (
          <div> 
            <NameInput onInputChange={this.onInputChange}/>
            <AgeInput onInputChange={this.onInputChange}/>
            <GenderInput  onInputChange={this.onInputChange} gender={this.state.gender}/>
            <AddressInput onInputChange={this.onInputChange} address={this.state.address}/>
            
            <Name name={this.state.name}/> 
            <Age age={parseInt(this.state.age)}/>
            <Gender gender={this.state.gender} />
            <Address address={this.state.address} />
            
         </div>
     
    );
  }
}

export default App;
     