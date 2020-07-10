import React from 'react';
import {skills,updatebutton} from '../Styles/Skills.module.scss';
import IconButton from '@material-ui/core/IconButton';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import {blueGrey} from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button:{
      backgroundColor:blueGrey[300],
    },
  }));


export default function Skills(){
    const classes = useStyles();
    return(
        <div className={skills}>
            <div>SKILLS</div>
            <div>This user has not added any skills yet.</div>
            <IconButton className={classes.button+" "+updatebutton}>
                <CreateOutlinedIcon />
            </IconButton>
        </div>
    );


    
}
 