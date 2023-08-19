import React, { useState } from 'react';
import { makeStyles } from '@mui/styles'
import CardLayout from '../common/components/CardLayout';
import { Grid ,Typography} from '@mui/material';
import ActionButton from '../common/components/Button';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import DataGridDemo from "../common/components/DataGridCommonTable";
import CommonTable from '../common/components/CustomCommonTable';
import Title from '../common/components/Title';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TextField from '@mui/material/TextField';
import { visuallyHidden } from '@mui/utils';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import FilterListIcon from '@mui/icons-material/FilterList';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import {searchByKeyword } from "../utils/ArrayMethods";
import Label from '../common/components/label';
import CustomModal from '../common/components/modal';
const useStyles = makeStyles(theme => ({
  root:{
'& .MuiTextField-root':{
  padding:'10px',
  width:500
  },
  '& .MuiOutlinedInput-input':{
    padding:'10px'
  }
},
 titleSection:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
 },
 tableSection:{
  margin:'15px 0px'
 },sectionOne:{
  display:"flex",
  justifyContent:"space-between"
 }
    }))
export default function UserInfo(props){
  const dataOfTable=[{
    firstName:'Raja',
    lastName:'Ram',
    age:'29',
    role:'manager',
    startDate:"02/101/2023",
    loginTime:'10:20',
    email:"rajram@wing.com",
    mobileNumber:"9235133221"
  },
  {
    firstName:'Yuva raja',
    lastName:'Laxmana',
    age:'29',
    role:'casher',
    startDate:"02/101/2023",
    loginTime:'10:20',
    email:"rajram@wing.com",
    mobileNumber:"9235133221"
  },
  {
    firstName:'kosadhikari',
    lastName:'bhratha',
    age:'29',
    role:'casher',
    startDate:"02/101/2023",
    loginTime:'10:20',
    email:"rajram@wing.com",
    mobileNumber:"9235133221"
  },
  {
    firstName:'management',
    lastName:'sharthugana',
    age:'29',
    role:'casher',
    startDate:"02/101/2023",
    loginTime:'10:20',
    email:"rajram@wing.com",
    mobileNumber:"9235133221"
  }
]
let isAdmin=sessionStorage.getItem("@dmK@y")
  const [filterSection,setFilterSection]=React.useState(false)
  const [search,setSearch]=useState(null)
  const [tableData,setTableData]=React.useState(dataOfTable);
  const [addUser,setAddUser]=useState(false)
  const classes=useStyles()
console.log("tableData",tableData)
const filterDisplayHandler=()=>{
setFilterSection(!filterSection);
}
const searcHandler=(e)=>{
  let data=searchByKeyword(
    dataOfTable,
    ['firstName','lastName','age','role','email','mobileNumber'],
    e.target.value,
  );
  console.log(data)
  setTableData(data)
}
const userHandler=()=>{
  setAddUser(true)
}
const handleModalClose=()=>{
  setAddUser(false)
}
    return(
        <div className={classes.root}>
         {!isAdmin?<> <CardLayout 
        padding={'10px'}
        border={"1px solid #8c7eff"}
        cardContent={
              <div>
              <Title title={"My Profile"}/>

              <div style={{padding:"20px"}}>
              <CardLayout
                  padding={'10px'}
                  margin={"10px"}
                  boxShadow={"-1px 0px 2px 0px #867e7ea6"}
                  cardContent={
                <div className={classes.sectionOne}>
                    <div style={{display:"flex"}}>
                <IconButton>
                  <PermIdentityIcon/>
                </IconButton>
                     <h5>{"Vijay(SHift lead)"}</h5>
                  </div>
          <div>
                <ActionButton 
                  buttonText={"update"}
                  backgroundColor={"#fff"}
                  // handleSubmit={()=>()}
                  color={"#000"}
                  width={"fit-content"}
                  borderRadius={"15px"}
                  padding={"10px"}
                  margin={"0px 10px"}
                />
</div>
              </div>}
              />
              <CardLayout
                 padding={'10px'}
                 boxShadow={"-1px 0px 2px 0px #867e7ea6"}
                 margin={"10px"}
                  cardContent={
                        <div style={{padding:"20px"}}>
           <h3>{"Personal Information"}</h3>
           <Grid
              container
              spacing={2}
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
<Label labelName={"First Name"}/>
<div>vijay</div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
                <Label labelName={"Last Name"}/>
<div>Gopal</div>                
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
                <Label labelName={"Email Address"}/>
<div>wing@gmail.com</div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
<Label labelName={"Phone Number"}/>
<div>908322234</div>                
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
<Label labelName={"Role"}/>
<div>Shfit Lead</div>                
              </Grid>  
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
<Label labelName={"Date of Birth"}/>
<div>10/10/1998</div>                
              </Grid>  
              </Grid>
              </div>}
              />

<CardLayout
                 padding={'10px'}
                 boxShadow={"-1px 0px 2px 0px #867e7ea6"}
                 margin={"10px"}
                  cardContent={
                        <div style={{padding:"20px"}}>
           <h3>{"Address"}</h3>
           <Grid
              container
              spacing={2}
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
<Label labelName={"H.No/Street"}/>
<div>s22/west campus head</div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
                <Label labelName={"City/State"}/>
<div>Grand rapids/Michigan</div>                
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
                <Label labelName={"Psotal Code"}/>
<div>48211</div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
<Label labelName={"TAX ID"}/>
<div>BVE12324</div>                
              </Grid> 
              </Grid>
              </div>}
              />
              </div >            
              </div>
              }
              /></>:<><CardLayout 
        padding={'10px'}
        border={"1px solid #8c7eff"}
        cardContent={
              <div className={classes.titleSection}>
                <PermIdentityIcon sx={{fontSize:"57px",color:"#7d68e2"}}/>
              <Title title={"Employee Information's"}/>
                <ActionButton
                   buttonText={"Add New User"}
                   backgroundColor={"#8c7eff"}
                   width={"fit-content"}
                   borderRadius={"15px"}
                   handleSubmit={userHandler}
                   padding={"10px"}
                />
              </div>}/>
            <div className={classes.tableSection}>
               <CardLayout 
        padding={'10px'}
        border={"1px solid #8c7eff"}
        cardContent={
        <>
        <div>
<Typography
          sx={{ display:"flex",justifyContent:"space-between",alignItems:"center"}}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          <Title title={"User Reprository"} fontSize={"21px"}/>
          <TextField id="outlined-search"  onChange={searcHandler} placeholder={"Search by File Name"} type="search"  variant="outlined" InputProps={{
                  endAdornment:   <div style={{ cursor: 'pointer' }}>
                  <SearchOutlinedIcon
                    style={{ color: '#7d7171' }}
                    onClick={searcHandler}
                  />
                   </div>,
                }} />
    
        <Tooltip title="Filter list">
          <IconButton onClick={filterDisplayHandler}>
            <FilterListIcon  />
          </IconButton>
        </Tooltip>
        </Typography>
       

</div> <CommonTable data={tableData}/>
         
        </>
      }/>
        </div></>}

        <div>
        <div>
        <CustomModal
          paddingTop={'0px'}
          modalTitle={
            <div>
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#000000',
                  font:'Poppins'
                }}
              >
                  { 'AddUser'}
              </div>
            </div>
          }
          modalContent={
           
         <div>          
            <Grid
              container
              spacing={2}
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
<Label labelName={"First Name"}/>
<div>vijay</div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
                <Label labelName={"Last Name"}/>
<div>Gopal</div>                
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
                <Label labelName={"Email Address"}/>
<div>wing@gmail.com</div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
<Label labelName={"Phone Number"}/>
<div>908322234</div>                
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
<Label labelName={"Role"}/>
<div>Shfit Lead</div>                
              </Grid>  
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
<Label labelName={"Date of Birth"}/>
<div>10/10/1998</div>                
              </Grid>  
              </Grid>
          </div>
          }
          handleClose={handleModalClose}
          open={addUser}
          disableWidth={true}
        />
        </div>
        </div>
        </div>
    )
}



