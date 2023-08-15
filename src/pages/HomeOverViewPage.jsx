import { useState } from "react"
import HomeDrawer from '../common/components/HomeDrawer'
import { Outlet } from "react-router-dom";
export default function HomeOverView(props){
return(
    <div>
        <HomeDrawer Redirectpath={props.Redirectpath}/>
    </div>
)
}