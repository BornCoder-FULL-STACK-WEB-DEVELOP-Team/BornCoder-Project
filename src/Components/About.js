import React,{ Fragment } from 'react';
import {about,about_update,updatebutton} from '../Styles/About.module.scss';
import IconButton from '@material-ui/core/IconButton';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import {blueGrey} from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = theme => ({
    button:{
      backgroundColor:blueGrey[300],
    },
  });

  class About extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          isToggleOn: false,
          display: 'none',
          textFieldValue:"",
        };
        this.handleClick = this.handleClick.bind(this);
        this.saveClick= this.saveClick.bind(this);
        this.cancelClick= this.saveClick.bind(this);
      }

    handleOnChange = event => {
        console.log('Click');
        this.setState({textFieldValue:event.target.value});  
       
      };

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
          this.refs.test.innerHTML=this.state.textFieldValue;
          let content_name = {description: this.state.textFieldValue};
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
                    this.setState({users: data})  ////赋值到本地数据
                    console.log(this.state.users.userName)
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
    render(){
        const { classes } = this.props;
    return ( 
        <Fragment>
        <div className={about}>
            <div>ABOUT</div>
            <div className="description" contentEditable='true' ref='test'>
            {/*{this.state.users.userName}*/}
            {this.props.value.description}
            </div> 
            <IconButton onClick={this.handleClick} className={classes.button+" "+updatebutton}>
                <CreateOutlinedIcon />
            </IconButton>
        </div>
        <div className={about_update} 
            style={{display: this.state.display}}>    
            <div className={classes.upload_button}>
            <TextField id="standard-basic" label="Description" onChange={this.handleOnChange} />
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
    }

  }

export default withStyles(useStyles)(About);