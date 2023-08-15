import { useState } from "react";
import { Box,Grid} from "@mui/material";
import CardLayout from "../common/components/CardLayout"
import { makeStyles } from '@mui/styles'
import Input from "../common/components/Input";
import Label from "../common/components/label";
import ActionButton from "../common/components/Button"
import HomePageImg from "../assests/images/homepageImage.png";
import { useForm } from 'react-hook-form';
import ErrorMessage from "../common/components/ErrorMessage";
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
  
  const {
    register,
    unregister,
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
    props.Redirectpath("/homeOver-view")
   }
   const numericValidater=(e)=>{
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)){
      e.target.value=e.target.value
    }
   }

return(
   <div style={{justifyContent:'space-evenly',padding:'8%',backgroundImage:"linear-gradient(45deg,#efefef 25%,rgba(239,239,239,0) 25%,rgba(239,239,239,0) 75%,#efefef 75%,#efefef),linear-gradient(45deg,#efefef 25%,rgba(239,239,239,0) 25%,rgba(239,239,239,0) 75%,#efefef 75%,#efefef)"}}>
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
                style={{ padding: '42px 0px' ,borderRadius:"20px"}}
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
              >
    <div>
        <CardLayout 
        padding={'10px'}
        border={"1px solid #8c7eff"}
        cardContent={
              <div>
                <h3 className={classes.title}>Log In</h3>
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
                buttonText={"creat Account"}
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
    </div>
    </Grid>
    </Grid>
   </div>
)
}