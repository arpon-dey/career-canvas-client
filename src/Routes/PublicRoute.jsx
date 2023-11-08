import {
    Link,
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
            element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
            path: '/myPostedJobs',
            element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        },
        {
            path: '/jobs/:id',
            element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
            loader: ({params})=>fetch(`https://career-canvas-server-ten.vercel.app/jobs/${params.id}`)
        },
        {
            path: '/jobs/update/:id',
            element:<PrivateRoute> <UpdateJob></UpdateJob></PrivateRoute>,
            loader: ({params})=>fetch(`https://career-canvas-server-ten.vercel.app/jobs/update/${params.id}`)
        },
        {
            path: '/myBids',
            element: <PrivateRoute><MyBids></MyBids></PrivateRoute>
            
        },
        {
            path: '/bidRequest',
            element: <PrivateRoute><BidRequest></BidRequest></PrivateRoute>
            
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
            element: <div className="relative">
                <img src="https://i.ibb.co/mCT42wz/7741849-3747371.jpg" className="max-w-7xl mx-auto my-32" alt="" />
                <Link to='/'className="btn absolute top-96 ml-96 mt-8">Go to Home</Link>
                </div>
        }
      ]
    },
  ]);

  export default router;