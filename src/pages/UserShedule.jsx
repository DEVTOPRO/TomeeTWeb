import React, { useEffect, useState } from "react";
import { makeStyles } from '@mui/styles'
import CustomTabs from '../common/components/Tabs'
import CardLayout from "../common/components/CardLayout";
import { Grid} from "@mui/material";
import Carousel from '../common/components/Carousel';
const useStyles = makeStyles(theme => ({
 root:{

 },
 cardContentFlex:{
    display:'flex',
    justifyContent:"space-between",  
 },
 cardSection:{
    padding:'10px'
 },
 eachSchedual:{
    background:"#96a7b524"
 },
 infoStyle:{
    color:"#00a1ff",
    textDecoration:"underline"
 }
}))
export default function UserShedule(props){
 const classes=useStyles();
 const [data,setData]=useState([])
 const [position,setPosition]=useState(0)
 useEffect(()=>{
    let weekDate=[]
    for(let date of createWeek()) {
        weekDate.push(formatDate(date))
    }
    setData(weekDate)
 },[])
 const  createWeek=(currentDay = new Date())=> {
    const weekStart = new Date(currentDay);
    weekStart.setDate(currentDay.getDate() - currentDay.getDay());
    return Array.from( { length: 7 }, (v,k) => { 
        const dt = new Date(weekStart);
        dt.setDate(weekStart.getDate() + k);
        return dt;
    })

}

function formatDate(date) {
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()]
     .map(n => (n + '').padStart(2, '0'))
     .join('');
}
const stripPosition=(index)=>{
   setPosition(index)
}
console.log(data,"daeae")
let sample=[{id:1,date:"08/27/2023",position:"cook",location:'kentwood',time:"4:30 to 12:30",totalhours:"7h 30min"},
{id:1,date:"08/28/2023",position:"cook",location:'kentwood',time:"4:30 to 12:30",totalhours:"7h 30min"},
{id:1,date:"08/29/2023",position:"cook",location:'kentwood',time:"4:30 to 12:30",totalhours:"7h 30min"},
{id:1,date:"08/30/2023",position:"cook",location:'kentwood',time:"4:30 to 12:30",totalhours:"7h 30min"},
{id:1,date:"09/01/2023",position:"cook",location:'kentwood',time:"4:30 to 12:30",totalhours:"7h 30min"},
{id:1,date:"09/02/2023",position:"cook",location:'kentwood',time:"4:30 to 12:30",totalhours:"7h 30min"},
{id:1,date:"09/01/2023",position:"cook",location:'kentwood',time:"4:30 to 12:30",totalhours:"7h 30min"},
]
let DateList=[{date:'08/27',day:"Sun"},{date:'08/27',day:"Mon"},{date:'08/27',day:"Tue"},{date:'08/27',day:"Web"},{date:'08/27',day:"Thu"},{date:'08/27',day:"Fri"},{date:'08/27',day:"Sat"}]
let allUsersData=[
   {id:1,date:"08/28/2023",name:"vijay",position:"cook",location:'kentwood',time:"10:00 to 5:30",totalhours:"7h 30min"},
   {id:2,date:"08/28/2023",name:"Rohit",position:"Casher",location:'kentwood',time:"10:00 to 5:30",totalhours:"7h 30min"},
   {id:3,date:"08/28/2023",name:"Rishi",position:"helper",location:'kentwood',time:"10:00 to 5:30",totalhours:"7h 30min"},
   {id:4,date:"08/28/2023",name:"Suresh",position:"Manager",location:'kentwood',time:"10:00 to 5:30",totalhours:"7h 30min"},
   {id:1,date:"08/28/2023",name:"Sagar",position:"cook",location:'kentwood',time:"4:30 to 12:30",totalhours:"7h 30min"},
   {id:2,date:"08/28/2023",name:"Sam",position:"Casher",location:'kentwood',time:"4:30 to 12:30",totalhours:"7h 30min"},
   {id:3,date:"08/28/2023",name:"Phani",position:"helper",location:'kentwood',time:"4:30 to 12:30",totalhours:"7h 30min"},
   {id:4,date:"08/28/2023",name:"mahi",position:"Manager",location:'kentwood',time:"4:30 to 12:30",totalhours:"7h 30min"},
]
return(
    <div>
     <CustomTabs
     fullWidth={true}
     tabsList={[
       {
         title: <div>{'My Work Days'}</div>,
         content: <div>
            <div>
                {data&&data.length>0&&data.map((value)=>(<Carousel items={value.slice(0,3)}/>))}
            </div>
             <CardLayout
             borderRadius={'0px'}
             boxShadow={'6px 0px 3px #3489d1c7'}
              cardContent={
                     <div className={classes.cardContentFlex}>
                    <div>{"27 Aug - 2 Sep"}</div>
                    <div>{"20 hrs"}</div>
                </div>
              }/>
                <Grid container
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.eachSchedual}
              >
                <Grid
                  item
                  xs={3}
                  sm={3}
                  md={2}
                  lg={2}
                  xl={2}
                  style={{padding:'25px',background:"azure"}}
                >{DateList.map((data)=>(
                       
                     <div>
                        <div style={{fontSize:"21px",fontWeight:"600"}}>{data.date}</div>
                        <div style={{fontSize:"20px"}}>{data.day}</div>
                        <br/>      
                        </div>   
                ))
                }
                </Grid>
                <Grid
                  item
                  xs={9}
                  sm={9}
                  md={9}
                  lg={9}
                  xl={9} >
        {allUsersData.map((data)=>(
              <div className={classes.cardSection}>
                <CardLayout
              cardContent={
                <>
                <div className={classes.cardContentFlex}>
                    <div>{data.time}</div>
                    <div>{data.totalhours}</div>
                </div>
                <div className={classes.cardContentFlex}>
                <div>{data.location}&bull;{data.name}&bull;{data.position}</div>
                    <div className={classes.infoStyle}>{"Info"}</div>
                </div>
                </> 
              }
              /></div>  
            ))
         }
                </Grid>
                </Grid>
     </div>
        },
        {
            title: <div>{'Team Work Days'}</div>,
            content: <div>            
       <CardLayout
            borderRadius={'0px'}
            boxShadow={'6px 0px 3px #3489d1c7'}
            cardContent={
            <div className={classes.cardContentFlex}>
                   <div>{"27 Aug - 2 Sep"}</div>
                   <div>{"650 hr 36min"}</div>
            </div>
             }/>
               <Grid container
               item
               xs={12}
               sm={12}
               md={12}
               lg={12}
               xl={12}
               className={classes.eachSchedual}
             >
               <Grid
                 item
                 xs={3}
                 sm={3}
                 md={2}
                 lg={2}
                 xl={2}
                 style={{padding:'25px',background:"azure"}}
               >{DateList.map((data,index)=>(
                  <div style={{display:'flex',justifyContent:'space-between'}}>
                       <div onClick={()=>stripPosition(index)}>
                       <div style={{fontSize:"21px",fontWeight:"600"}}>{data.date}</div>
                       <div style={{fontSize:"20px"}}>{data.day}</div>
                       <br/>
                       </div>
                        {position==index?<div style={{  background: 'blueviolet',
                        borderRadius: '5px 0px 0px 5px',
                        width: '8px',
                        float: 'right',
                        margin: '0px 0px 10px 0px',
                        height: '50px'}}/>:null}
                        </div>
               ))
               } 
               </Grid>
               <Grid
                 item
                 xs={9}
                 sm={9}
                 md={9}
                 lg={9}
                 xl={9} >
       {sample.map((data)=>(
             <div className={classes.cardSection}>
               <CardLayout
             cardContent={
               <>
               <div className={classes.cardContentFlex}>
                   <div>{data.time}</div>
                   <div>{data.totalhours}</div>
               </div>
               <div className={classes.cardContentFlex}>
               <div>{data.location}&bull;{data.position}</div>
                   <div className={classes.infoStyle}>{"Info"}</div>
               </div>
               </> 
             }
             /></div>  
           ))
        }
               </Grid>
               </Grid>
               </div>
         }
    ]}
     />
                  
    </div>
 )
}
