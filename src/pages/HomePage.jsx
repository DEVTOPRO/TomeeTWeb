import { useContext, useState } from "react";
import { Grid} from "@mui/material";
import CardLayout from "../common/components/CardLayout"
import { makeStyles } from '@mui/styles'
import Input from "../common/components/Input";
import Label from "../common/components/label";
import ActionButton from "../common/components/Button"
import HomePageImg from "../assests/images/homepageImage.png";
import { useForm } from 'react-hook-form';
import ErrorMessage from "../common/components/ErrorMessage";
import service from "../Api/apiSection/service";
import {login} from "../Api/apiSection/apiUrlConstent";
import Context from '../context/Context';
import Alertmessage from '../common/components/AlertMessage';
import { timeOutCaller } from '../utils/ArrayMethods';
const useStyles = makeStyles(theme => ({
    title:{
      color:"#0071dc",
      fontSize: "22px",
      textAlign: "center"
    },
    creatSection:{
        textAlign:"end",
  fontWeight:"600",
  textDecoration: "underline",
  cursor:"pointer"
    },
    subTitle:{
        color:'#fb2929',
        fontSize:"14px"
    },
    i5pxmageTitle:{
      textAlign:"center",
      padding:"15px"
    },
    imageTitle:{
      textAlign:"center"
    }
    }))
export default function HomePage(props){
  const [alertMessage,setAlertMessage]=useState(null);
const context=useContext(Context)
  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    setValue,
    getValues,
} = useForm();
   const classes=useStyles();
   const creatHandler=(key)=>{
    key=="create"?props.Redirectpath("/signup"):props.Redirectpath("/forgetPin")
   } 
   const onEnterHandler=(e,onSubmit)=>{
e.key === 'Enter'&&onSubmit()
   }
   const onSubmitHandler=(data)=>{
    console.log("sinup data",data)
    let requestData={
      "password": data.pin,
      "userName": data.userName
    }
   
    sessionStorage.setItem("@dmK@y",true)
    service.create(login,requestData).then((respones)=>{
      if(respones.data.statusMessage==="success"){
        props.Redirectpath("/homeOver-view")
        context.dispatch({type:"isAuthorized",value:true})
        sessionStorage.setItem("token",respones.data.data.jwt)
      }else{
      setAlertMessage("Invalid User creditaionals")
      timeOutCaller(setAlertMessage,5000)
      }
    }).catch((e)=>setAlertMessage("Invalid User creditaionals"))
   }
   const numericValidater=(e)=>{
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)){
      e.target.value=e.target.value
    }
   }

return(
   <div style={{justifyContent:'space-evenly',padding:'3%',backgroundImage:"linear-gradient(45deg,#efefef 25%,rgba(239,239,239,0) 25%,rgba(239,239,239,0) 75%,#efefef 75%,#efefef),linear-gradient(45deg,#efefef 25%,rgba(239,239,239,0) 25%,rgba(239,239,239,0) 75%,#efefef 75%,#efefef)"}}>
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
                md={8}
                lg={8}
                xl={8}
                style={{borderRadius:"20px"}}
              >
    <div>
    <img src={HomePageImg}/>
    <h1 className={classes.imageTitle}>Welcome to Project TomeeT</h1>
    </div>
    </Grid>
    <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                xl={4}
                style={{paddingTop:"7%"}}
              >
        <CardLayout 
        padding={'10px'}
        border={"1px solid #8c7eff"}
        cardContent={
              <div>
                <h3 className={classes.title}>Log In</h3>

              {alertMessage&&<Alertmessage status={"error"} message={alertMessage}/>}
                <Label
                labelName={"User Name*"}
                />
                <Input
                     name="userName"
                     //  readOnly={autoData?.isOpen}
                      inputRef={register('userName', {
                          required: true,
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                      type="text"
                      shrink={true}
                />
                  {errors.useName && errors.userName.type === "required" && (
                <ErrorMessage message="Required !!" />
              )}
                <Label
                labelName={"Pin*"}
                />
                <Input
                 name="pin"
                 //  readOnly={autoData?.isOpen}
                  inputRef={register('pin', {
                      required: true,

                  })}
                  maxLength="6"
                  onInput={numericValidater}
                  type="text"
                  handleKeyPress={(e)=>onEnterHandler(e,handleSubmit(onSubmitHandler))}
                />
                  {errors.pin && errors.pin.type === "required" && (
                <ErrorMessage message="Required !!" />
              )}
                <div style={{display:"flex",padding:"0px 17px "}}>
                <ActionButton 
                  buttonText={"Login"}
                  backgroundColor={"#8c7eff"}
                  width={"108px"}
                  borderRadius={"15px"}
                  handleSubmit={handleSubmit(onSubmitHandler)}
                  padding={"10px"}
                />
                      <ActionButton 
                buttonText={"create Account"}
                backgroundColor={"#fff"}
                handleSubmit={()=>creatHandler("create")}
                color={"#000"}
                width={"fit-content"}
                borderRadius={"15px"}
                padding={"10px"}
                margin={"0px 10px"}
                />
                </div>
                <div className={classes.creatSection}  onClick={()=>creatHandler("forgetPin")}>
                     Forget Pin?
                    </div>
                </div>
        }
        />
    </Grid>
    </Grid>
   </div>
)
}