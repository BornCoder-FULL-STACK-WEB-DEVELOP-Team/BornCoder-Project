import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange,blueGrey} from '@material-ui/core/colors';
import {image_div,back_img,upload_button,upload_button_background,cloud_upload,cloud_upload_background,info_update,background_container,avatar,updatebutton} from '../Styles/Background.module.scss';
import IconButton from '@material-ui/core/IconButton';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { storage } from "./firebase/firebase";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = theme => ({
    default: {
      fontSize:theme.spacing(7),
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
    button:{
      backgroundColor:blueGrey[300],
    },
    update_button:{
      backgroundColor:"white",
    },
    upload_button: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  });


class Background extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      path: null,
      isToggleOn: false,
      display: 'none',
      users: [],
      textFieldValue:"",

    };
    this.fileInputEl = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.saveClick= this.saveClick.bind(this);
    this.cancelClick= this.saveClick.bind(this);
  }

  handleOnChange = event => {
    console.log('Click');
    this.setState({textFieldValue:event.target.value});  
   
  };
  
  componentDidMount() {//网络请求都是放在此生命周期函数中
    fetch( 'http://localhost:8090/users/1')
    .then(response => response.json())
    .then(data =>{
      console.log(data)
      this.setState({users: data})  ////赋值到本地数据
      console.log(this.state.users)
      const { setValue } = this.props;
      setValue(this.state.users);
    })
    .catch(e => console.log('错误:', e))       
}
 
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      display: prevState.isToggleOn ? 'none': 'block'
    }));

  }

  cancelClick(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      display: prevState.isToggleOn ? 'none': 'block'
    }));
  }

  saveClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      display: prevState.isToggleOn ? 'none': 'block'
    }));
    console.log('save');
    console.log(this.state.textFieldValue);
    this.setState({count: this.state.count + 1},()=>{
      console.log(this.state);
      let content_name = {userName: this.state.textFieldValue};
      console.log(content_name);
       // The actual fetch request
       
    fetch('http://localhost:8090/users/1', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(content_name)
    }).then(response => {
      if(response.ok) {
          response.json().then(data => {
              console.log(data);
              fetch( 'http://localhost:8090/users/1')
                .then(response => response.json())
                .then(data =>{
                //console.log(data)
                this.setState({users: data});  ////赋值到本地数据
                console.log(this.state.users.userName);
                const { setValue } = this.props;
                setValue(this.state.users);
                }).catch(e => console.log('错误:', e))  
          });
      } else {
          console.log("请求不成功，状态码为", response.status);
      }
    }).catch(function(e) {
      console.log("Oops, error");
    });
     });

  }



  onFileChange = (event) => {
    if (event.target.files[0]) {
      const image_file = event.target.files[0];
      this.setState({
        image: image_file,
        path: URL.createObjectURL(event.target.files[0]),
      });

    }
  };

  uploadFile = (event) => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      display: prevState.isToggleOn ? 'none': 'block'
    }));  
    event.preventDefault();
    console.log(this.state);
    const { image } = this.state;
    //const uploadTask = storage.ref(`images/${image.name}`).put(image);
    //uploadTask.on('state_changed', progress, error,complete)
    if (image === null) {
      console.error(`not an image, should be ${typeof image}`);
    }
  else{
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
          let content = {userPhoto: url};
        // The actual fetch request
          
        
        fetch('http://localhost:8090/users/1', {
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(content)
        }).then(response => {
          if(response.ok) {
              response.json().then(data => {
                  console.log(data);
                  fetch( 'http://localhost:8090/users/1')
                    .then(response => response.json())
                    .then(data =>{
                    //console.log(data)
                    this.setState({users: data})  ////赋值到本地数据
                    console.log(this.state.users.userPhoto)
                    }).catch(e => console.log('错误:', e))  
              });
          } else {
              console.log("请求不成功，状态码为", response.status);
          }
        }).catch(function(e) {
          console.log("Oops, error");
        });
        });



          
        
    }
  );
}
};

uploadFile_background = (event) => {
  this.setState(prevState => ({
    isToggleOn: !prevState.isToggleOn,
    display: prevState.isToggleOn ? 'none': 'block'
  }));  
  event.preventDefault();
  console.log(this.state);
  const { image } = this.state;
  //const uploadTask = storage.ref(`images/${image.name}`).put(image);
  //uploadTask.on('state_changed', progress, error,complete)
  if (image === null) {
    console.error(`not an image, should be ${typeof image}`);
  }
else{
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
        let content = {backgroundPhoto: url};
      // The actual fetch request
        
      
      fetch('http://localhost:8090/users/1', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
      }).then(response => {
        if(response.ok) {
            response.json().then(data => {
                console.log(data);
                fetch( 'http://localhost:8090/users/1')
                  .then(response => response.json())
                  .then(data =>{
                  //console.log(data)
                  this.setState({users: data})  ////赋值到本地数据
                  console.log(this.state.users.backgroundPhoto)
                  }).catch(e => console.log('错误:', e))  
            });
        } else {
            console.log("请求不成功，状态码为", response.status);
        }
      }).catch(function(e) {
        console.log("Oops, error");
      });
      });



        
      
  }
);
}
};

    
  render(){
    const { classes } = this.props;
  return (
    <Fragment>
    <div className={background_container}>
      <input 			
        type="file"
        ref={this.fileInputEl}	//挂载ref
        accept=".jpg,.jpeg,.png"	//限制文件类型
        hidden	//隐藏input 
        onChange={this.onFileChange} >
      </input>
      <div className={image_div}>
          <img className={back_img} src={this.state.users.backgroundPhoto} alt=""/>
      </div>
      <Avatar alt="defaut" src={this.state.users.userPhoto} className={classes.default+" "+avatar}>
        q
      </Avatar>
      <IconButton onClick={this.handleClick} className={classes.button+" "+updatebutton}>
        <CreateOutlinedIcon />
      </IconButton>
      <IconButton onClick={() => {
        this.fileInputEl.current.click()		//当点击a标签的时候触发事件
      }} className={classes.update_button+" "+cloud_upload} style={{display: this.state.display}}>
      <CloudUploadIcon  />
      </IconButton>
        <Button onClick={this.uploadFile} variant="contained" className={upload_button} style={{display: this.state.display}}>
        Upload
        </Button> 
        <IconButton onClick={() => {
          this.fileInputEl.current.click()		//当点击a标签的时候触发事件
        }} className={classes.update_button+" "+cloud_upload_background} style={{display: this.state.display}}>
        <CloudUploadIcon  />
        </IconButton>
          <Button onClick={this.uploadFile_background} variant="contained" className={upload_button_background} style={{display: this.state.display}}>
          Upload
          </Button> 
    </div>
    <div 
      className={info_update} 
      style={{display: this.state.display}}>    
      <div className={classes.upload_button}>
        <TextField id="standard-basic" label="Name" onChange={this.handleOnChange} />
        <Button variant="contained" onClick={this.handleClick}>
        Cancel
        </Button>
        <Button variant="contained" onClick={this.saveClick}>
          Save
        </Button>
      </div>
      
    </div> 
    </Fragment>
  );
  }}


export default withStyles(useStyles)(Background);