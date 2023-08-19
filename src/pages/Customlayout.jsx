import Header from "../common/components/Header"
  import { Outlet } from "react-router-dom";
import Footer  from '../common/components/Footer';
import Toolbar from '@mui/material/Toolbar';
export default function Customlayout (props) {
  return (
    <div>
      <Header Redirectpath={props.Redirectpath} />  
      <Toolbar />    
      <Outlet/>
      <Footer Redirectpath={props.Redirectpath}/>
    </div>
  )
}
