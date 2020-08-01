import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {blueGrey} from '@material-ui/core/colors';
import moment from 'moment';
import {basicinfo} from '../Styles/BasicInfo.module.scss';


const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  location:{
      color:blueGrey[300],
      width:15,
      height:15,
  }
});


class Basicinfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          //users:[],
          //newusers:this.props.users,
        };
      }

    /*  componentDidMount() {//网络请求都是放在此生命周期函数中
        fetch( 'http://localhost:8090/users/1')
        .then(response => response.json())
        .then(data =>{
          console.log(data)
          this.setState({users: data})  ////赋值到本地数据
          console.log(this.state.users)
        })
        .catch(e => console.log('错误:', e))       
    }*/
      
    render(){
    const { classes } = this.props;
    return (
            <div className={classes.root+" "+basicinfo}>
                <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <div className="username">
                        {/*{this.state.users.userName}*/}
                        {this.props.value.userName}
                    </div>               
                    <div className="location">
                        <LocationOnIcon  className={classes.location}/>
                        {this.props.value.location}
                       {/*{this.state.users.location} */} 
                    </div>
                    <div className="start_date">
                    Joined from:{moment(this.props.value.joinDate).format('YYYY-MM-DD')}
                        {/*{this.state.users.joinDate} */}
                    </div>
                </Grid>
                </Grid>
            </div>      
    );
    }
  }

export default withStyles(useStyles)(Basicinfo);