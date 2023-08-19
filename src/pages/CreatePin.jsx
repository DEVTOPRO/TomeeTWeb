import { makeStyles } from '@mui/styles'
import Label from '../common/components/label';
import Input from '../common/components/Input';
import AgentImg from "../assests/images/Agent.png";
import CardLayout from '../common/components/CardLayout';
import ActionButton from '../common/components/Button';
import Alertmessage from '../common/components/AlertMessage';
import { Box,Grid} from "@mui/material";
import { useForm } from "react-hook-form";
import { useLayoutEffect, useState } from 'react';
import service from '../Api/apiSection/service';
import {verifyToken,createPin} from '../Api/apiSection/apiUrlConstent'
const useStyles = makeStyles(theme => ({
    title:{
      color:"#0071dc",
      fontSize: "27px",
      fontWeight:"600"
    },
  root:{
    alignItems:"center"
  }
  }));
export default function CreatePing(props){
  const [tokeData,setTokenData]=useState()
  const [message,setMessage]=useState(null)
const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors },
        setValue,
        getValues,
      } = useForm();
const classes=useStyles();
useLayoutEffect(()=>{
  let urlParmeters=window.location.search;
  const urlParams = new URLSearchParams(urlParmeters);
   service.get(`${verifyToken}?userId=${urlParams.get("userId")}&verifyToken=${urlParams.get("token")}`).then((respones)=>{
    console.log("proces",respones.data.data)
    setTokenData(respones.data.data)
   }).catch((e)=>props.Redirectpath("/errorPage"))},[])
const onPasswordHandler=(data)=>{
console.log("cearte password")
let requestData={
  password:data.conformpin,
  userName:tokeData.userName
}
service.create(createPin,requestData).then((respones)=>{
 setMessage("You have created message successfully")
  props.Redirectpath("/homeOver-view")

}).catch((e)=>{
  alert("you have created error")
})
}
const numericValidater=(e)=>{
  const re = /^[0-9\b]+$/;
  if (e.target.value === '' || re.test(e.target.value)){
    e.target.value=e.target.value
  }
 }
return(
    <>
        <Grid
              container
              spacing={1}
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={classes.root}>
                    <Grid
                item
                xs={12}
                sm={12}
                md={8}
                lg={8}
                xl={8}
                style={{borderRadius:"20px"}}
              >
                <img src={AgentImg}/>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                xl={4}
                style={{padding:"10px"}}    
              >
                <CardLayout
                padding={"20px"}
        cardContent={
            <div>
                {message!=null&&<Alertmessage stauts={"success"} message={message}/>}
        <h1>{"Creation of Pin for your account"}</h1>
        <Label labelName={"Enter your pin"}/>
        <Input
          name="pin"
          //  readOnly={autoData?.isOpen}
           inputRef={register('pin', {
               required: true,

           })}
           maxLength="6"
           onInput={numericValidater}
           type="text"
        />
        <Label labelName={"Enter your Confrom pin"}/>
        <Input
          name="conformpin"
          //  readOnly={autoData?.isOpen}
           inputRef={register('conformpin', {
               required: true,

           })}
           maxLength="6"
           onInput={numericValidater}
           type="text"
          
        />
        <ActionButton 
                buttonText={"Submit"}
                backgroundColor={"#8c7eff"}
                borderRadius={"15px"}
                padding={"10px"}
                handleSubmit={handleSubmit(onPasswordHandler)}
                />
                </div>
        }
        />
        </Grid>
              </Grid>
      
    </>
)
}