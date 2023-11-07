import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/MAin";
import AddJob from "../Pages/AddJob/AddJob";
import BidRequest from "../Pages/BidRequest/BidRequest";
import Home from "../Pages/Home/Home";
import JobDetails from "../Pages/Home/JobDetails/JobDetails";
import Login from "../Pages/Login/Login";
import MyBids from "../Pages/MyBids/MyBids";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import Register from "../Pages/Register/Register";
import UpdateJob from "../Pages/UpdateJob/UpdateJob";
import PrivateRoute from "./PrivateRoute";

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
            element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        },
        {
            path: '/jobs/:id',
            element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
            loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
            path: '/jobs/update/:id',
            element: <UpdateJob></UpdateJob>,
            loader: ({params})=>fetch(`http://localhost:5000/jobs/update/${params.id}`)
        },
        {
            path: '/myBids',
            element: <MyBids></MyBids>
            
        },
        {
            path: '/bidRequest',
            element: <BidRequest></BidRequest>
            
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: "*",
            element: <div>404 not found</div>
        }
      ]
    },
  ]);

  export default router;