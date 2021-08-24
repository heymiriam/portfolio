import React from 'react';
import PropTypes from 'prop-types';
import Link from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import YoutubeImg from '../../assets/youtube.png';
import testImg from '../../assets/testImg.jpeg';
import Cabin from '../../assets/cabin.png';
import MovieList from '../../assets/movielist.png';
import Blog from '../../assets/blog.png';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    color:'white',
    textDecoration:'none',
    marginTop:'20px',  
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  workcont:{
      display:'flex',
      flexDirection: 'row',
        justifyContent: 'space-between', 
        backgroundColor:"white",
        alignItems: 'center',
        marginBottom:'0px',
        marginTop:'20px',
  },

  workheading:{
      fontSize:'24px',
      marginLeft:'2%',
      color:'black',
  },
  card1: {
 
    margin:'20px 10px 0px 10px'  ,
    //flexGrow: 5,
    color:'white',
    height:'300px',
    textDecoration:'none',
    width: '40%',
    backgroundImage: `url(${YoutubeImg})`,
    backgroundSize:"700px",
   
  },
  card2: {
 
    margin:'20px 10px 0px 10px'  ,
    //flexGrow: 5,
    color:'white',
    height:'300px',
    textDecoration:'none',
    width: '40%',
    backgroundImage: `url(${MovieList})`,
    backgroundSize:"700px",
   
  },
  card3: {
    margin:'20px 10px 0px 10px'  ,
    //flexGrow: 5,
    color:'white',
    height:'300px',
    textDecoration:'none',
    width: '40%',
    backgroundImage: `url(${Blog})`,
    backgroundSize:"700px",
   
  },
  card4: {
 
    margin:'20px 10px 0px 10px'  ,
    //flexGrow: 5,
    color:'white',
    height:'300px',
    textDecoration:'none',
    width: '40%',
    backgroundImage: `url(${Cabin})`,
    backgroundSize:"700px",
   
  },
 

  tabPan:{
    display:'flex',
    flexDirection:'column',
    justifyContent: 'space-between'
  },
  cardCont:{ 
    display:'flex',
    textDecoration:'none',
    color:'white',
    flexDirection:'row',
    justifyContent: 'center',
    flexWrap:'wrap',
   
},
tab:{
    color:'black',
},
content:{
display:"flex",
flexDirection:'column',
justifyContent: 'flex-end',
marginTop:"200px",
},
txth:{
  color:'white',
  textDecoration:'none',
}
}));

export default function Work() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();
  return (
    <Paper className={classes.root}>
      <Paper position="static" color="default" className={classes.workcont}>
        <h3 className={classes.workheading}>Work</h3>  
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Web Dev" {...a11yProps(0)} className={classes.tab}/>
          <Tab label="UX/UI" {...a11yProps(1)} className={classes.tab} />
          <Tab label="Advertising" {...a11yProps(2)} className={classes.tab}/>
          <Tab label="Graphic Design" {...a11yProps(3)} className={classes.tab} />
      
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0} className={classes.tabPan}>
       
        <div className={classes.cardCont}>
        <Card className={classes.card1}>
        <a href="https://gallant-heyrovsky-7770ab.netlify.app" target="_blank" className={classes.txth}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5" className={classes.txth}>
              Youtube
            </Typography>
            <Typography variant="subtitle1" className={classes.txth}>
              Clone website
            </Typography>
          </CardContent>
          
        </div>
        </a>
    </Card>

    <Card className={classes.card2}>
      <a href="https://agitated-morse-c28af8.netlify.app/" target="_blank" className={classes.txth}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" className={classes.txth}>
            Movie List          
            </Typography>
          <Typography variant="subtitle1" color="textSecondary" className={classes.txth}>
            CRUD Website
          </Typography>
        </CardContent>
        
      </div>
      <CardMedia
        className={classes.cover}
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
      </a>
    </Card>


    <Card className={classes.card3}>
    <a href="https://gallant-heyrovsky-7770ab.netlify.app" target="_blank" className={classes.txth}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" className={classes.txth}>
            Blog
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" className={classes.txth}>
            API Website
          </Typography>
        </CardContent>
        
      </div>
      <CardMedia
        className={classes.cover}
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
      </a>
    </Card>


    <Card className={classes.card4}>
    <a href="https://zen-kowalevski-906525.netlify.app" target="_blank" className={classes.txth}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" className={classes.txth}>
            CÄBIN
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" className={classes.txth}>
            Perfect Score Website
          </Typography>
        </CardContent>
        
      </div>
      <CardMedia
        className={classes.cover}
        image="../"
        title="Live from space album cover"
      />
      </a>
    </Card>
    </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Paper>
  );
}