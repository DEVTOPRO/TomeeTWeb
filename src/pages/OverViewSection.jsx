import React from 'react'
import { makeStyles } from '@mui/styles'
import CardLayout from '../common/components/CardLayout';
import { Grid } from '@mui/material';
import ActionButton from '../common/components/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PieChartView from "../common/components/PieChart";
const useStyles = makeStyles(theme => ({
  cardLayout: {
    boxShadow: '0px 0px 10px #00000029',
    background: '#fff',
    borderRadius: '10px',
    padding: '10px'
    // minHeight:"130px"
    // transition: "transform .2s",
    // "&:hover": {
    //   transform: "scale(1.0)"
    // },
  },
  sectionOne:{
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
  },
  sectionTwo:{
    fontSize:"20px",
    fontWeight:"600"
  },
  cardValues:{
fontSize:"20px",
display:'flex',
justifyContent:"space-between",
  },
  title:{
    color:"#7e7f81"
  },
  graphicSection:{
    padding:"15px"
  }
}))

export default function OverViewSection(){
  const classes=useStyles();
return(
    <>
      <div className={classes.sectionOne}>
      <h2>Overview</h2>
<div>
  <ActionButton  buttonText={"Add new Task"}/>
</div>
      </div>

      <Grid
              container
              spacing={3}
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={classes.sectionTwo}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                lg={3}
                xl={3}
              >
       <CardLayout 
        padding={'10px'}
        border={"1px solid #94ff7e"}
        boxShadow={"0px 0px 4px #00000029"}
        cardContent={
          <div>
            <div className={classes.title}>
              Size of Team
              </div>
              <div className={classes.cardValues}>
                <div>{"29"}</div><div><CheckCircleOutlineIcon sx={{color:"#39ca39"}}/></div>
              </div>
            </div>
        }/>
</Grid>
<Grid
                item
                xs={12}
                sm={12}
                md={3}
                lg={3}
                xl={3}
              >
       <CardLayout 
        padding={'10px'}
        border={"1px solid #ffc220"}
        boxShadow={"0px 0px 4px #00000029"}
        cardContent={
          <div>
            <div className={classes.title}>
            total daily/Working hours
              </div>
              <div className={classes.cardValues}>
                 <div>{"32/650"}</div><div><AccessTimeIcon sx={{color:"#abbd2b"}}/></div>
              </div>
            </div>
        }/>
</Grid>
<Grid
        item
                xs={12}
                sm={12}
                md={3}
                lg={3}
                xl={3}
              >
       <CardLayout 
        padding={'10px'}
        border={"1px solid #e84a4a96"}
        boxShadow={"0px 0px 4px #00000029"}
        cardContent={
          <div>
            <div className={classes.title}>
         No of day off 
              </div>
              <div className={classes.cardValues}>
              <div>{"29"}</div> <div><WarningAmberIcon sx={{color:"#fb2929"}}/></div>
              </div>
            </div>
        }/>
</Grid>
<Grid
        item
                xs={12}
                sm={12}
                md={3}
                lg={3}
                xl={3}
              >
       <CardLayout 
        padding={'10px'}
        border={"1px solid #dfff7e"}
        boxShadow={"0px 0px 4px #00000029"}
        cardContent={
          <div>
            <div className={classes.title}>
           Add new User
              </div>
              <div className={classes.cardValues} >
                <div>29</div> <div><PersonAddAltOutlinedIcon sx={{color:"#6654ffa8"}}/></div>
              </div>
            </div>
        }/>
</Grid>
</Grid>
<div className={classes.graphicSection}>
  <CardLayout
  cardContent={
    <div>
        <h2>
    Task status graphical View
  </h2>
<div >
  <PieChartView/>
</div>
      </div>
  }
  />

  </div>
    </>
)
}