import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Input from "../common/components/Input";
import Label from "../common/components/label";
import ActionButton from "../common/components/Button";
import Singup from "../assests/images/SignInImg.svg";
import ErrorMessage from "../common/components/ErrorMessage";
import { useForm } from "react-hook-form";
import Select from "../common/components/NewSelect";
const useStyles = makeStyles((theme) => ({
  title: {
    color: "#0071dc",
    fontSize: "27px",
    fontWeight: "600",
  },
  creatSection: {
    border: "1px solid #3b6a74",
    borderRadius: "15px",
    padding: "15px",
  },
}));

export default function SignUp(props) {
  const classes = useStyles();

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
  const onSubmitHandler = (data) => {
    console.log(data);
  };
  const numberValidater=(e)=>{
    e.target.value =(e.target.validity.valid) ? e.target.value :"";
    
  }
  return (
    <>
      <Grid container spacing={2} item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <img src={Singup} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{padding:"3%"}}>
          <Grid
            container
            spacing={2}
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={classes.creatSection}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={classes.title}
            >
              Create Account
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Label labelName={"First name*"} />
              <Input
                name="firstName"
                //  readOnly={autoData?.isOpen}
                inputRef={register("firstName", {
                  required: true,
                })}
                type="text"
                shrink={true}
              />
              {errors.firstName && errors.firstName.type === "required" && (
                <ErrorMessage message="Required !!" />
              )}
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Label labelName={"Last name*"} />
              <Input
                name="lastName"
                //  readOnly={autoData?.isOpen}
                inputRef={register("lastName", {
                  required: true,
                })}
                type="text"
                shrink={true}
              />
              {errors.lastName && errors.lastName.type === "required" && (
                <ErrorMessage message="Required !!" />
              )}
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Label labelName={"Mobile number*"} />
              <Input     name="mobileNumber"
                //  readOnly={autoData?.isOpen}
                inputRef={register("mobileNumber", {
                  required: true,
                  // pattern: //i,
                })}
                onInput={numberValidater}
                pattern="[0-9]*"
                type="text"
                maxLength={10}
                shrink={true} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Label labelName={"Email Id*"} />
              <Input
                name="email"
                //  readOnly={autoData?.isOpen}
                inputRef={register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                type="text"
                shrink={true}
              />
              {errors.email && errors.email.type === "required" && (
                <ErrorMessage message="Required !!" />
              )}
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Label labelName={"Date of Birth*"} />
              <Input
                name="dob"
                //  readOnly={autoData?.isOpen}
                inputRef={register("dob", {
                  required: true,
                })}
                max={"2023-08-13"}
                type="date"
                shrink={true}
              />
              {errors.dob && errors.dob.type === "required" && (
                <ErrorMessage message="Required !!" />
              )}
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Label labelName={"Gender*"} />
              <div style={{ padding: "18px" }}>
                <Select
                  padding="5px"
                  name="gender"
                  keyValue={"genderVal"}
                  displayValue={"genderNam"}
                  listItems={[
                    { genderVal: "female", genderNam: "Female" },
                    { genderVal: "male", genderNam: "Male" },
                  ]}
                  register={register("gender", {
                    required: true,
                    // onChange: (e) => gender(e),
                  })}
                />
              </div>

              {errors.gender && errors.gender.type === "required" && (
                <ErrorMessage message="Required !!" />
              )}
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Label labelName={"Job Role*"} />
              <div style={{ padding: "18px" }}>
                <Select
                  padding="5px"
                  name="jobRole"
                  keyValue={"roleVal"}
                  displayValue={"roleNam"}
                  listItems={[
                    { roleVal: "manger", roleNam: "Manager" },
                    { roleVal: "casher", roleNam: "Casher" },
                  ]}
                  register={register("jobRole", {
                    required: true,
                    // onChange: (e) => gender(e),
                  })}
                />
              </div>
              {errors.role && errors.role.type === "required" && (
                <ErrorMessage message="Required !!" />
              )}
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              sx={{ textAlign: "center" }}
            >
              <ActionButton
                buttonText={"Creat Account"}
                backgroundColor={"#8c7eff"}
                width={"323px"}
                borderRadius={"15px"}
                handleSubmit={handleSubmit(onSubmitHandler)}
                padding={"10px"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
