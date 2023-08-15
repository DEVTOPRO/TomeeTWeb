import { makeStyles } from '@mui/styles'
import Label from '../common/components/label';
import Input from '../common/components/Input';
import AgentImg from "../assests/images/Agent.png";
import CardLayout from '../common/components/CardLayout';
import ActionButton from '../common/components/Button';
import Alertmessage from '../common/components/AlertMessage';
import { useForm } from "react-hook-form";
const useStyles = makeStyles(theme => ({
    title:{
      color:"#0071dc",
      fontSize: "27px",
      fontWeight:"600"
    },
    root:{
        backgroundSize: '100% 100%',
        backgroundImage: `url(${AgentImg})`
    }
  }));
export default function CreatePing(props){
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

const onPasswordHandler=(data)=>{
console.log("cearte password",data)
}
return(
    <div className={classes.root}>
        <CardLayout
        cardContent={
            <div>
                <Alertmessage stauts={"success"} message={"Your password created successful"}/>
        <h1>{"Creation of Pin for your account"}</h1>
        <Label labelName={"Enter your pin"}/>
        <Input/>
        <Label labelName={"Enter your Confrom pin"}/>
        <Input/>
        <ActionButton 
                buttonText={"Submit"}
                backgroundColor={"#8c7eff"}
                width={"323px"}
                borderRadius={"15px"}
                padding={"10px"}
                />
                </div>
        }
        />
   
      
    </div>
)
}