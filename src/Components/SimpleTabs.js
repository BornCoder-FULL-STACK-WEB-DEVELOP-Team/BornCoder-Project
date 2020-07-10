import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  indicator: {
    backgroundColor: '#85b1bd',
  },
  label: {
    color: 'black',
  },
  tabs:{
    backgroundColor: '#b0bec5',
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs className={classes.tabs} value={value} onChange={handleChange} aria-label="simple tabs example" 
        classes={{indicator: classes.indicator}} tabItemContainerStyle={{width: '5vw'}}>
          <Tab classes={{ label: classes.label }} label="As a Tasker" {...a11yProps(0)} />
          <Tab classes={{ label: classes.label }} label="As a Poster" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <pre>
            Looks like you haven’t received{"\n"}
            any reviews just yet.{"\n"}
            Let’s browse available tasks.{"\n"}
        </pre>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <pre>
            Looks like you haven’t received{"\n"}
            any reviews just yet.{"\n"}
            Let’s go post a task.{"\n"}
        </pre>
      </TabPanel>
    </div>
  );
}