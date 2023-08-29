import React, { useContext } from "react";
import Customlayout from "./pages/Customlayout";
import Defaultpage from "./common/components/Defaultpage";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/Signup";
import HomeOverView from "./pages/HomeOverViewPage";
import CreatePing from './pages/CreatePin';
import OverView from "./pages/OverViewSection";
import UserInfo from "./pages/UserInfo";
import ChatPage from "./pages/ChatPage";
import ErrorPage from "./pages/ErrorPage";
import JobShedule from './pages/JobShedule';
import UserShedule from "./pages/UserShedule";
export default function Routers(Redirectpath, getConstValue) {
  let route = [
    {
      path: "/",
       element: <Customlayout Redirectpath={Redirectpath} />,
      //element:<JobShedule/>,
      children: [
        { index: true, element: <HomePage Redirectpath={Redirectpath} /> },
        {
          path: "/homeOver-view",
          element: <HomeOverView Redirectpath={Redirectpath} />,
           children: [
            { index: true, element: <OverView Redirectpath={Redirectpath} /> },
            {
              path: "/homeOver-view/overViewPage",
              element: <OverView Redirectpath={Redirectpath} />,
            },
            {
              path: "/homeOver-view/userPage",
              element: <UserInfo Redirectpath={Redirectpath} />,
            },
            {
              path: "/homeOver-view/chatPage",
              element: <ChatPage Redirectpath={Redirectpath} />,
             },
            {
              path: "/homeOver-view/jobSchedulingPage",
              element: <JobShedule Redirectpath={Redirectpath} />,
            },
            ],
        },
        { path: "/signup", element: <SignUp Redirectpath={Redirectpath} /> },
        { path: "/CreationPassword", element: <CreatePing Redirectpath={Redirectpath}/> },
        { path: "/forgetPassword", element: <CreatePing Redirectpath={Redirectpath}/> },
        { path: "/errorPage", element: <ErrorPage Redirectpath={Redirectpath}/> },
      ],
    },
    { path: "*", element: <Defaultpage /> }, 
  ];
  return route;
}
