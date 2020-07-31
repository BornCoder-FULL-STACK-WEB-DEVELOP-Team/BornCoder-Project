import React,{Fragment} from 'react';
import Container from '@material-ui/core/Container';
import Background from './Components/Background';
import BasicInfo from './Components/BasicInfo';
import About from './Components/About';
//import Reviews from './Reviews';
import Skills from './Components/Skills';
import {content} from './Styles/App.module.scss';
import SimpleTabs from './Components/SimpleTabs';
import Image from './Components/Image';      

class Profile extends React.Component{
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
  

  render(){
    return (   
    <Fragment>
      <Container maxWidth="md"  className={content}>
        <Background setValue={this.setValue}/>
        <BasicInfo value={this.state.value}/>
        <About value={this.state.value}/>
        <Skills value={this.state.value}/>
        <SimpleTabs  />
      </Container>
    </Fragment>

  );

  }
  
}

export default Profile;
