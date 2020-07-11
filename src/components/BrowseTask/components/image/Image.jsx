import React from "react";
import { storage } from "../firebase/firebase";

class Image extends React.Component {
  constructor() {
    super();
    this.state = {
      image: null,
      path: null,
      url: "",
    };
  }

  onFileChange = (event) => {
    if (event.target.files[0]) {
      const image = event.target.files[0];
      this.setState({
        image: image,
        path: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  uploadFile = (event) => {
    event.preventDefault();
    console.log(this.state);
    const { image } = this.state;
    //const uploadTask = storage.ref(`images/${image.name}`).put(image);
    //uploadTask.on('state_changed', progress, error,complete)
    if (image === null) {
      console.error(`not an image, should be ${typeof image}`);
    }

    const uploadTask = storage.ref(`/images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        //console.log(snapShot);
      },
      (err) => {
        //catches the errors
        console.log(err);
      },
      () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            this.setState({ url });
          });
      }
    );
  };

  imageStyle = {
    width: "300px",
    height: "200px",
  };

  render() {
    return (
      <div>
        <div className="App-intro">
          <h3>Upload a file</h3>
          <input onChange={this.onFileChange} type="file"></input>
          <img style={this.imageStyle} src={this.state.path} />
          <img
            src={this.state.url}
            alt="upload image"
            style={this.imageStyle}
          />
          <button onClick={this.uploadFile}>Confirm</button>
        </div>
      </div>
    );
  }
}
export default Image;
