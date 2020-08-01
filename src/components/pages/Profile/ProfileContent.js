import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import Background from "./Components/Background";
import BasicInfo from "./Components/BasicInfo";
import About from "./Components/About";
//import Reviews from './Reviews';
import Skills from "./Components/Skills";
import { content } from "./Styles/App.module.scss";
import SimpleTabs from "./Components/SimpleTabs";
import Image from "./Components/Image";

class ProfileContent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      value: "",
    };
  }

  setValue = (value) => {
    this.setState({
      value,
    });
  };

  render() {
    console.log(this.props.userId);
    return (
      <Fragment>
        <Container maxWidth="md" className={content}>
          <Background setValue={this.setValue} userId={this.props.userId} />
          <BasicInfo value={this.state.value} />
          <About value={this.state.value} userId={this.props.userId} />
          <Skills value={this.state.value} userId={this.props.userId} />
          <SimpleTabs userId={this.props.userId} />
        </Container>
      </Fragment>
    );
  }
}

export default ProfileContent;
