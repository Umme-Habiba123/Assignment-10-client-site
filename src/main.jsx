import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './Components/Home.jsx';
import AddTasks from './Components/AddTasks.jsx';
import BrouseTasks from './Components/BrouseTasks.jsx'
import MyPostedTasks from './Components/MyPostedTasks.jsx';
import Login from './Components/Login.jsx';
import SignUp from './Components/SignUp.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import TaskDetails from './Components/TaskDetails.jsx';

// import ForgotPass from './Components/ForgotPass.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:'addTasks',
         element: <PrivateRoute><AddTasks></AddTasks></PrivateRoute>
      },
      {
        path:'brouseTasks',
        loader: ()=>fetch('http://localhost:5000/tasks'),
        element:<PrivateRoute><BrouseTasks></BrouseTasks></PrivateRoute>
      },
      {
        path:'myPostedTasks',
        element: <PrivateRoute><MyPostedTasks></MyPostedTasks></PrivateRoute>
      },
      {
       path: 'logIn',
       Component:Login 
      },
      {
        path:'signUp',
        Component: SignUp
      },
      // {
      //   path:'forgotPass',
      //   Component: ForgotPass
      // },
      {
        path:'taskDetails/:id',
        loader:({params})=>fetch(`http://localhost:5000/tasks/${params._id}`),
        Component:TaskDetails
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
