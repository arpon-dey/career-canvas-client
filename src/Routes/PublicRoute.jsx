import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/MAin";
import AddJob from "../Pages/AddJob/AddJob";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import Register from "../Pages/Register/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path: '/addJob',
            element: <AddJob></AddJob>
        },
        {
            path: '/myPostedJobs',
            element: <MyPostedJobs></MyPostedJobs>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
      ]
    },
  ]);

  export default router;