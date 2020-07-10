import React from 'react';
import {portfilio,updatebutton} from '../Styles/Portfolio.module.scss';
import IconButton from '@material-ui/core/IconButton';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import {blueGrey} from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button:{
      backgroundColor:blueGrey[300],
    },
  }));


export default function Portfilio(){
    const classes = useStyles();
    return(
        <div className={portfilio}>
            <div>PORTFOLIO</div>
            <IconButton className={classes.button+" "+updatebutton}>
                <CreateOutlinedIcon />
            </IconButton>
        </div>
    );


    
}
 