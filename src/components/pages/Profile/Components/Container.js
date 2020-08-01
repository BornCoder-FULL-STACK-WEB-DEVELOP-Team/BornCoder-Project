
import React from 'react';
// container
class Container extends React.Component {
    constructor() {
      super();
      this.state = {
        value: '',
      }
    }
    
    setValue = value => {
      this.setState({
        value,
      })
    }
  
    render() {
      return (
        <div>
          <A setValue={this.setValue}/>
          <B value={this.state.value} />
        </div>
      );
    }
  }