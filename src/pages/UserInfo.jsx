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
  const [filterSection,setFilterSection]=React.useState(false)
  const [search,setSearch]=useState(null)
  const [tableData,setTableData]=React.useState(dataOfTable);
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
    return(
        <div className={classes.root}>
         <CardLayout 
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
                   handleSubmit={()=>{}}
                   padding={"10px"}
                />
              </div>}/>
            <div className={classes.tableSection}>
               <CardLayout 
        padding={'10px'}
        border={"1px solid #8c7eff"}
        cardContent={<>
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
       

</div> <CommonTable data={tableData}
                            />
         
        </>}/>
        </div>
        </div>
    )
}



