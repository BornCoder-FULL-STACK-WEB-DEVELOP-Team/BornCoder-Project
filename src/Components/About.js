import React from 'react';
import {about,updatebutton} from '../Styles/About.module.scss';
import IconButton from '@material-ui/core/IconButton';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import {blueGrey} from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button:{
      backgroundColor:blueGrey[300],
    },
  }));


export default function About(){
    const classes = useStyles();
    return(
        <div className={about}>
            <div>ABOUT</div>
            <div>Edit your description now.</div>
            <IconButton className={classes.button+" "+updatebutton}>
                <CreateOutlinedIcon />
            </IconButton>
        </div>
    );


    
}
 
